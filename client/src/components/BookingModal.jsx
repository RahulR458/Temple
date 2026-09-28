import React, { useState } from 'react';

const nakshatras = [
  "Aswathi (Ashwini)", "Bharani", "Karthika (Krittika)", "Rohini", "Makayiram (Mrigashirsha)",
  "Thiruvathira (Ardra)", "Punartham (Punarvasu)", "Pooyam (Pushya)", "Aayilyam (Ashlesha)",
  "Makam (Magha)", "Pooram (Purva Phalguni)", "Uthram (Uttara Phalguni)", "Atham (Hasta)",
  "Chithira (Chitra)", "Chothi (Swati)", "Vishakham (Vishakha)", "Anizham (Anuradha)",
  "Thrikketta (Jyeshtha)", "Moolam (Mula)", "Pooradam (Purva Ashadha)", "Uthradam (Uttara Ashadha)",
  "Thiruvonam (Shravana)", "Avittam (Dhanishta)", "Chathayam (Shatabhisha)", "Poororuttathi (Purva Bhadrapada)",
  "Uthrattathi (Uttara Bhadrapada)", "Revathi"
];

export default function BookingModal({ isOpen, onClose, selectedPooja, offerings }) {
  const [formData, setFormData] = useState({
    devoteeName: '',
    nakshatra: nakshatras[0],
    gotra: '',
    poojaId: selectedPooja?.id || offerings?.[0]?.id || 'pooja-1',
    poojaName: selectedPooja?.name || offerings?.[0]?.name || 'Special Paal Payasam',
    dateOfPooja: new Date().toISOString().split('T')[0],
    phone: '',
    email: '',
    prasadamDelivery: false,
    postalAddress: '',
  });

  const [loading, setLoading] = useState(false);
  const [successReceipt, setSuccessReceipt] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Update selected pooja when prop changes
  React.useEffect(() => {
    if (selectedPooja) {
      setFormData((prev) => ({
        ...prev,
        poojaId: selectedPooja.id,
        poojaName: selectedPooja.name,
      }));
    }
  }, [selectedPooja]);

  if (!isOpen) return null;

  // Calculate amount based on selected pooja
  const currentOffering = offerings?.find((o) => o.id === formData.poojaId) || selectedPooja || { price: 180 };
  const basePrice = currentOffering.price || 180;
  const postalCost = formData.prasadamDelivery ? 100 : 0;
  const totalAmount = basePrice + postalCost;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          amount: totalAmount,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessReceipt(data);
      } else {
        setErrorMessage(data.error || 'Failed to submit booking. Please check details.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Connection error. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessReceipt(null);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '36px' }}>
        {/* Top Gold Trim */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #8C6507, #D4AF37, #B8860B)',
        }} />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '20px',
            background: '#F4EFE2',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            fontSize: '1.2rem',
            color: '#3E0C13',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ✕
        </button>

        {!successReceipt ? (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span className="badge-gold" style={{ marginBottom: '8px' }}>
                🪔 Devaswom Official Portal
              </span>
              <h2 style={{ fontSize: '1.75rem', color: '#26070B', margin: '4px 0 6px 0' }}>
                Book Pooja / Vazhipadu
              </h2>
              <p style={{ color: '#574D50', fontSize: '0.92rem' }}>
                Offerings will be consecrated in the sanctum sanctorum of Lord Janardhana Swamy in your name and nakshatra.
              </p>
            </div>

            {errorMessage && (
              <div style={{ background: '#FCE8EA', border: '1px solid #E57373', color: '#9A2030', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.9rem' }}>
                ⚠️ {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                {/* Devotee Name */}
                <div className="form-group">
                  <label className="form-label">Devotee Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter devotee name"
                    className="form-input"
                    value={formData.devoteeName}
                    onChange={(e) => setFormData({ ...formData, devoteeName: e.target.value })}
                  />
                </div>

                {/* Nakshatra (Star) */}
                <div className="form-group">
                  <label className="form-label">Birth Star (Nakshatra) *</label>
                  <select
                    className="form-select"
                    value={formData.nakshatra}
                    onChange={(e) => setFormData({ ...formData, nakshatra: e.target.value })}
                  >
                    {nakshatras.map((star, idx) => (
                      <option key={idx} value={star}>{star}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                {/* Gotra */}
                <div className="form-group">
                  <label className="form-label">Gotra (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Kashyapa, Bharadwaja"
                    className="form-input"
                    value={formData.gotra}
                    onChange={(e) => setFormData({ ...formData, gotra: e.target.value })}
                  />
                </div>

                {/* Date of Pooja */}
                <div className="form-group">
                  <label className="form-label">Date of Offering *</label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="form-input"
                    value={formData.dateOfPooja}
                    onChange={(e) => setFormData({ ...formData, dateOfPooja: e.target.value })}
                  />
                </div>
              </div>

              {/* Pooja Selection */}
              <div className="form-group">
                <label className="form-label">Select Vazhipadu / Pooja *</label>
                <select
                  className="form-select"
                  value={formData.poojaId}
                  onChange={(e) => {
                    const found = offerings?.find((o) => o.id === e.target.value);
                    setFormData({
                      ...formData,
                      poojaId: e.target.value,
                      poojaName: found ? found.name : 'Selected Offering',
                    });
                  }}
                >
                  {offerings?.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.name} - ₹{o.price}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                {/* Phone */}
                <div className="form-group">
                  <label className="form-label">Devotee Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Prasadam Post Delivery Checkbox */}
              <div style={{
                background: '#FAF7F0',
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid #ECE7DE',
                marginBottom: '20px',
              }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontWeight: '600', color: '#26070B', fontSize: '0.95rem' }}>
                  <input
                    type="checkbox"
                    checked={formData.prasadamDelivery}
                    onChange={(e) => setFormData({ ...formData, prasadamDelivery: e.target.checked })}
                    style={{ width: '18px', height: '18px', accentColor: '#D4AF37' }}
                  />
                  <span>Send Consecrated Prasadam via Speed Post / Courier (+₹100 postal fee)</span>
                </label>

                {formData.prasadamDelivery && (
                  <div style={{ marginTop: '12px' }}>
                    <textarea
                      required={formData.prasadamDelivery}
                      rows="2"
                      placeholder="Complete Postal Address with Pin Code & Landmark"
                      className="form-textarea"
                      value={formData.postalAddress}
                      onChange={(e) => setFormData({ ...formData, postalAddress: e.target.value })}
                    />
                  </div>
                )}
              </div>

              {/* Total Calculation & Submit */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #ECE7DE', paddingTop: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: '#574D50', display: 'block' }}>Total Kanikka / Offering:</span>
                  <span style={{ fontSize: '1.6rem', fontWeight: '800', color: '#0F6330' }}>₹{totalAmount}</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-green"
                  style={{ padding: '14px 32px', fontSize: '1rem' }}
                >
                  {loading ? 'Confirming with Temple...' : 'Confirm & Generate Receipt 🪔'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Receipt View */
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#E8F5E9',
              color: '#168843',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              marginBottom: '16px',
            }}>
              ✓
            </div>

            <span className="badge-green" style={{ marginBottom: '8px' }}>
              Booking Confirmed in MongoDB
            </span>

            <h2 style={{ fontSize: '1.8rem', color: '#26070B', margin: '8px 0' }}>
              Om Namo Bhagavate Vasudevaya
            </h2>

            <p style={{ color: '#574D50', fontSize: '0.95rem', marginBottom: '24px' }}>
              Your pooja offering has been registered with the Temple Devaswom Counter.
            </p>

            {/* Receipt Card */}
            <div style={{
              background: '#FFFDF9',
              border: '2px dashed #D4AF37',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'left',
              marginBottom: '24px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ECE7DE', paddingBottom: '12px', marginBottom: '14px' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', color: '#8C6507', textTransform: 'uppercase', fontWeight: '700' }}>Booking Reference</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#3E0C13' }}>
                    {successReceipt.bookingReference}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.78rem', color: '#8C6507', textTransform: 'uppercase', fontWeight: '700' }}>Amount</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F6330' }}>
                    ₹{successReceipt.booking?.amount}
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.9rem' }}>
                <div>
                  <strong style={{ color: '#574D50' }}>Devotee:</strong> {successReceipt.booking?.devoteeName}
                </div>
                <div>
                  <strong style={{ color: '#574D50' }}>Nakshatra:</strong> {successReceipt.booking?.nakshatra}
                </div>
                <div>
                  <strong style={{ color: '#574D50' }}>Offering:</strong> {successReceipt.booking?.poojaName}
                </div>
                <div>
                  <strong style={{ color: '#574D50' }}>Date:</strong> {new Date(successReceipt.booking?.dateOfPooja).toLocaleDateString()}
                </div>
                <div>
                  <strong style={{ color: '#574D50' }}>Phone:</strong> {successReceipt.booking?.phone}
                </div>
                <div>
                  <strong style={{ color: '#574D50' }}>Status:</strong> Confirmed
                </div>
              </div>

              {successReceipt.booking?.prasadamDelivery && (
                <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #ECE7DE', fontSize: '0.85rem', color: '#574D50' }}>
                  📦 <strong>Prasadam Dispatch:</strong> Will be mailed to provided address after morning consecration.
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button onClick={() => window.print()} className="btn btn-outline-gold" style={{ padding: '10px 20px' }}>
                🖨️ Print Receipt
              </button>
              <button onClick={handleReset} className="btn btn-maroon" style={{ padding: '10px 24px' }}>
                Close Portal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
