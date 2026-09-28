import React, { useState } from 'react';

export default function QuickConnectSimple({ contact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('Darshan Timings');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Send via WhatsApp or show client confirmation
    const waText = encodeURIComponent(
      `Namaste Temple Desk,\n• Name: ${name}\n• Phone: ${phone}\n• Topic: ${topic}\n• Message: ${message || 'No additional note'}`
    );

    // Save to local state for instant feedback
    setSubmitted(true);
    
    // Optionally open WhatsApp with formatted message
    window.open(`https://wa.me/${contact.whatsapp}?text=${waText}`, '_blank');
  };

  return (
    <section id="connect" className="section" style={{ background: '#FAF7F0' }}>
      <div className="container" style={{ maxWidth: '1040px' }}>
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <span>📞</span>
            <span>Reach the Temple</span>
          </div>
          <h2 className="section-title">Quick Connect</h2>
          <p className="section-desc">
            Directly connect with the temple priest or committee members for pooja timings, vazhipadu coordination, or temple visit queries.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '28px' }}>
          {/* Direct Phone & WhatsApp Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* WhatsApp Card */}
            <div className="temple-card" style={{ padding: '24px', background: 'linear-gradient(135deg, #FFFFFF, #F1F8F3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#E8F5E9',
                  color: '#0B4F26',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                }}>
                  💬
                </span>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#26070B', margin: 0 }}>WhatsApp Desk</h3>
                  <span style={{ fontSize: '0.78rem', color: '#0F6330', fontWeight: '600' }}>Instant Devotee Chat</span>
                </div>
              </div>

              <p style={{ color: '#574D50', fontSize: '0.88rem', marginBottom: '16px' }}>
                Send a quick text message to ask about daily darshan timings or upcoming special pooja rituals.
              </p>

              <a
                href={`https://wa.me/${contact.whatsapp}?text=Namaste,%20I%20have%20an%20enquiry%20regarding%20the%20temple`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-green"
                style={{ width: '100%', padding: '10px 18px', fontSize: '0.88rem', borderRadius: '12px' }}
              >
                <span>Chat on WhatsApp</span>
                <span>↗</span>
              </a>
            </div>

            {/* Direct Calls Card */}
            <div className="temple-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <span style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#FDF8EA',
                  color: '#8C6507',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                }}>
                  📞
                </span>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#26070B', margin: 0 }}>Direct Phone Contacts</h3>
                  <span style={{ fontSize: '0.78rem', color: '#B8860B', fontWeight: '600' }}>Priest & Committee</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href={`tel:${contact.phonePrimary}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: '#FAF7F0',
                    color: '#26070B',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    border: '1px solid #ECE7DE',
                  }}
                >
                  <span>{contact.secretaryName}</span>
                  <span style={{ color: '#8C6507' }}>{contact.phonePrimary} 📞</span>
                </a>

                <a
                  href={`tel:${contact.phoneSecondary}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: '#FAF7F0',
                    color: '#26070B',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    border: '1px solid #ECE7DE',
                  }}
                >
                  <span>{contact.priestName}</span>
                  <span style={{ color: '#8C6507' }}>{contact.phoneSecondary} 📞</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="temple-card" style={{ padding: '28px' }}>
            <span className="badge-gold" style={{ marginBottom: '8px' }}>
              Send Devotee Query
            </span>
            <h3 style={{ fontSize: '1.35rem', color: '#26070B', marginBottom: '8px' }}>
              Quick Message Form
            </h3>
            <p style={{ color: '#574D50', fontSize: '0.85rem', marginBottom: '20px' }}>
              Leave your contact and inquiry; it sends straight to WhatsApp for immediate coordination.
            </p>

            {submitted && (
              <div style={{ background: '#E8F5E9', border: '1px solid #81C784', padding: '12px 16px', borderRadius: '10px', color: '#1B5E20', fontSize: '0.88rem', marginBottom: '16px' }}>
                ✓ Thank you, {name}! Your query was dispatched to the temple desk.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Devotee Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="form-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Inquiry Topic</label>
                <select
                  className="form-select"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  <option value="Darshan Timings">Darshan Timings</option>
                  <option value="Pooja / Vazhipadu Booking">Pooja / Vazhipadu Booking</option>
                  <option value="Special Festival Pooja">Special Festival Pooja</option>
                  <option value="General Direction & Location">General Direction & Location</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message / Details</label>
                <textarea
                  rows="2"
                  placeholder="Any questions or specific dates you plan to visit..."
                  className="form-textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-gold"
                style={{ width: '100%', padding: '12px', fontSize: '0.92rem' }}
              >
                <span>Send Quick Query</span>
                <span>💬</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
