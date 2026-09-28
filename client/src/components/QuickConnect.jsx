import React, { useState, useEffect } from 'react';

export default function QuickConnect() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Darshan Timings Enquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [recentEnquiries, setRecentEnquiries] = useState([]);
  const [showDevoteeLog, setShowDevoteeLog] = useState(false);

  // Fetch recent enquiries from MongoDB
  const fetchRecent = async () => {
    try {
      const res = await fetch('/api/connect');
      const json = await res.json();
      if (json.success) {
        setRecentEnquiries(json.data || []);
      }
    } catch (e) {
      console.warn('Could not fetch enquiries:', e);
    }
  };

  useEffect(() => {
    fetchRecent();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSubmittedStatus(null);

    try {
      const res = await fetch('/api/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmittedStatus({
          id: data.enquiryId,
          message: data.message,
          name: formData.name,
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: 'Darshan Timings Enquiry',
          message: '',
        });
        fetchRecent();
      } else {
        setErrorMessage(data.error || 'Failed to submit enquiry.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Network error communicating with temple server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quick-connect" className="section" style={{ background: '#FAF7F0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <span>📞</span>
            <span>Reach Out</span>
          </div>
          <h2 className="section-title">Quick Connect & Devotee Desk</h2>
          <p className="section-desc">
            Have questions about pooja schedules, accommodation, or pithru tharpanam? Reach out to the Sree Janardhana Swamy Temple Devaswom office directly or leave a message below.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px' }}>
          {/* Left Column: Direct Contact Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Temple Office Card */}
            <div className="temple-card" style={{ padding: '26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <span style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#FDF8EA',
                  color: '#8C6507',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                }}>
                  🏛️
                </span>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#26070B', margin: 0 }}>Temple Office</h3>
                  <span style={{ fontSize: '0.82rem', color: '#B8860B', fontWeight: '600' }}>Devaswom Administrative Counter</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '10px' }}>
                <a href="tel:04702607575" className="btn btn-outline-gold" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                  📞 0470 2607575
                </a>
                <a href="tel:04702602288" className="btn btn-outline-gold" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                  📞 0470 2602288
                </a>
              </div>
              <p style={{ color: '#574D50', fontSize: '0.85rem', margin: 0 }}>
                Open daily from <strong>08:00 AM to 06:00 PM IST</strong>.
              </p>
            </div>

            {/* WhatsApp Quick Chat Card */}
            <div className="temple-card" style={{ padding: '26px', background: 'linear-gradient(135deg, #FFFFFF, #F1F8F3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <span style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#E8F5E9',
                  color: '#0B4F26',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                }}>
                  💬
                </span>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#26070B', margin: 0 }}>WhatsApp Devotee Helpdesk</h3>
                  <span style={{ fontSize: '0.82rem', color: '#0F6330', fontWeight: '600' }}>Direct Devotee Messaging</span>
                </div>
              </div>

              <p style={{ color: '#574D50', fontSize: '0.9rem', marginBottom: '16px' }}>
                Get instant answers regarding darshan timings, upcoming festival dates, and room reservations via WhatsApp.
              </p>

              <a
                href="https://wa.me/919447312890?text=Namaste%20I%20would%20like%20to%20know%20about%20Sree%20Janardhana%20Swamy%20Temple%20Varkala"
                target="_blank"
                rel="noreferrer"
                className="btn btn-green"
                style={{ width: '100%', padding: '12px 20px', borderRadius: '12px' }}
              >
                <span>Chat on WhatsApp (+91 94473 12890)</span>
                <span>↗</span>
              </a>
            </div>

            {/* Guest House & Accommodation Card */}
            <div className="temple-card" style={{ padding: '26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <span style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#FCE8EA',
                  color: '#781825',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                }}>
                  🏨
                </span>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#26070B', margin: 0 }}>Guest House & Accommodation</h3>
                  <span style={{ fontSize: '0.82rem', color: '#8C6507', fontWeight: '600' }}>Mandaram Pilgrim Stay</span>
                </div>
              </div>

              <p style={{ color: '#574D50', fontSize: '0.88rem', marginBottom: '12px' }}>
                Devaswom guest house offers clean AC & Non-AC suites for visiting pilgrims and families performing special rituals.
              </p>

              <a href="tel:04702603399" style={{ color: '#3E0C13', fontWeight: '700', fontSize: '1.05rem', textDecoration: 'none' }}>
                📞 Helpline: 0470 2603399
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Connect Form */}
          <div className="temple-card" style={{ padding: '36px' }}>
            <span className="badge-gold" style={{ marginBottom: '10px' }}>
              MERN Stack Devotee Portal
            </span>
            <h3 style={{ fontSize: '1.6rem', color: '#26070B', marginBottom: '8px' }}>
              Devotee Quick Message Form
            </h3>
            <p style={{ color: '#574D50', fontSize: '0.9rem', marginBottom: '24px' }}>
              Messages submitted here are recorded directly into the temple database and attended by temple staff.
            </p>

            {submittedStatus && (
              <div style={{
                background: '#E8F5E9',
                border: '1px solid #81C784',
                color: '#1B5E20',
                padding: '16px',
                borderRadius: '12px',
                marginBottom: '20px',
              }}>
                <div style={{ fontWeight: '700', fontSize: '1.05rem', marginBottom: '4px' }}>
                  ✓ Enquiry Logged Successfully!
                </div>
                <div style={{ fontSize: '0.9rem' }}>
                  Thank you, <strong>{submittedStatus.name}</strong>. {submittedStatus.message}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#2E7D32', marginTop: '6px' }}>
                  Reference ID: {submittedStatus.id}
                </div>
              </div>
            )}

            {errorMessage && (
              <div style={{
                background: '#FCE8EA',
                border: '1px solid #E57373',
                color: '#9A2030',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '20px',
                fontSize: '0.9rem',
              }}>
                ⚠️ {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Devotee Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="devotee@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Enquiry Topic *</label>
                  <select
                    className="form-select"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Darshan Timings Enquiry">Darshan Timings Enquiry</option>
                    <option value="Pooja / Vazhipadu Booking">Pooja / Vazhipadu Booking</option>
                    <option value="Annadanam Contribution">Annadanam Contribution</option>
                    <option value="Guest House / Accommodation">Guest House / Accommodation</option>
                    <option value="Pithru Tharpanam Rituals">Pithru Tharpanam Rituals</option>
                    <option value="General Temple Information">General Temple Information</option>
                    <option value="Special Seva / Sponsorship">Special Seva / Sponsorship</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message or Question *</label>
                <textarea
                  required
                  rows="3"
                  placeholder="Please write your questions regarding poojas, travel timings, or family rituals..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-gold"
                style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
              >
                {loading ? 'Submitting to Temple...' : 'Submit Quick Message 🪔'}
              </button>
            </form>

            {/* Toggle recent inquiries to show real MERN stack persistence */}
            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #ECE7DE', textAlign: 'center' }}>
              <button
                onClick={() => setShowDevoteeLog(!showDevoteeLog)}
                style={{ background: 'none', border: 'none', color: '#8C6507', fontSize: '0.85rem', fontWeight: '700', cursor: 'pointer' }}
              >
                {showDevoteeLog ? '▲ Hide Recent Devotee Messages' : `▼ View Devotee Enquiries (${recentEnquiries.length} Recorded in DB)`}
              </button>

              {showDevoteeLog && (
                <div style={{ marginTop: '16px', textAlign: 'left', maxHeight: '200px', overflowY: 'auto', background: '#FAF7F0', padding: '12px', borderRadius: '12px' }}>
                  {recentEnquiries.length === 0 ? (
                    <div style={{ fontSize: '0.85rem', color: '#83787B', textAlign: 'center' }}>No enquiries submitted yet. Be the first!</div>
                  ) : (
                    recentEnquiries.map((enq) => (
                      <div key={enq._id} style={{ padding: '8px 0', borderBottom: '1px solid #ECE7DE', fontSize: '0.82rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#26070B', fontWeight: '600' }}>
                          <span>{enq.name} ({enq.subject})</span>
                          <span style={{ color: '#0F6330' }}>{enq.status || 'Received'}</span>
                        </div>
                        <div style={{ color: '#574D50', marginTop: '2px' }}>"{enq.message}"</div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
