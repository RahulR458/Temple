import React, { useState } from 'react';

export default function OfferingsSimple({ offerings, contact }) {
  const [selectedOffering, setSelectedOffering] = useState(null);
  const [devoteeName, setDevoteeName] = useState('');
  const [star, setStar] = useState('Aswathi');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleWhatsAppBooking = (item) => {
    const text = encodeURIComponent(
      `Namaste, I would like to book a pooja at the temple:\n• Offering: ${item.name} (₹${item.price})\n• Devotee: ${devoteeName || '[Devotee Name]'}\n• Star/Nakshatra: ${star}\n• Date: ${date}\nPlease confirm availability.`
    );
    window.open(`https://wa.me/${contact.whatsapp}?text=${text}`, '_blank');
    setSelectedOffering(null);
  };

  return (
    <section id="offerings" className="section" style={{ background: '#FAF7F0' }}>
      <div className="container" style={{ maxWidth: '1040px' }}>
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <span>🌸</span>
            <span>Vazhipadu List</span>
          </div>
          <h2 className="section-title">Daily Poojas & Offerings</h2>
          <p className="section-desc">
            Devotees can offer daily Pushpanjali, Neyvilakku (Ghee lamps), and special poojas. You can book in person at the sanctum or coordinate directly with the priest via WhatsApp.
          </p>
        </div>

        {/* Offerings Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {offerings.map((item) => (
            <div
              key={item.id}
              className="temple-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#B8860B', fontWeight: '700' }}>
                      {item.malayalam}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', color: '#26070B', margin: '2px 0 0 0' }}>
                      {item.name}
                    </h3>
                  </div>

                  <div style={{
                    background: '#E8F5E9',
                    color: '#0B4F26',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontWeight: '800',
                    fontSize: '1.1rem',
                  }}>
                    ₹{item.price}
                  </div>
                </div>

                <p style={{ color: '#574D50', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {item.desc}
                </p>
              </div>

              <button
                onClick={() => setSelectedOffering(item)}
                className="btn btn-outline-gold"
                style={{ width: '100%', padding: '10px', fontSize: '0.88rem', borderRadius: '12px' }}
              >
                <span>Request Offering</span>
                <span>💬</span>
              </button>
            </div>
          ))}
        </div>

        {/* Modal for Offering Request */}
        {selectedOffering && (
          <div className="modal-overlay" onClick={() => setSelectedOffering(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '32px', maxWidth: '520px' }}>
              <button
                onClick={() => setSelectedOffering(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '18px',
                  background: '#F4EFE2',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  color: '#3E0C13',
                }}
              >
                ✕
              </button>

              <span className="badge-gold" style={{ marginBottom: '10px' }}>
                Direct Devotee Request
              </span>

              <h3 style={{ fontSize: '1.45rem', color: '#26070B', margin: '4px 0 6px' }}>
                {selectedOffering.name} (₹{selectedOffering.price})
              </h3>
              <p style={{ color: '#574D50', fontSize: '0.88rem', marginBottom: '20px' }}>
                Fill in your details below to send a formatted request directly to the temple priest via WhatsApp:
              </p>

              <div className="form-group">
                <label className="form-label">Devotee Full Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="form-input"
                  value={devoteeName}
                  onChange={(e) => setDevoteeName(e.target.value)}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Birth Star (Nakshatra)</label>
                  <input
                    type="text"
                    placeholder="e.g. Rohini, Makam"
                    className="form-input"
                    value={star}
                    onChange={(e) => setStar(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Date of Pooja</label>
                  <input
                    type="date"
                    className="form-input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => handleWhatsAppBooking(selectedOffering)}
                  className="btn btn-green"
                  style={{ flex: 1, padding: '12px' }}
                >
                  <span>Send on WhatsApp</span>
                  <span>💬</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
