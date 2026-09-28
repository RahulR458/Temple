import React from 'react';

export default function ModernFooter({ info }) {
  return (
    <footer style={{
      background: '#1F060A',
      color: '#D8D0C5',
      paddingTop: '60px',
      paddingBottom: '32px',
      borderTop: '2px solid rgba(212, 175, 55, 0.4)',
    }}>
      <div className="container" style={{ maxWidth: '1040px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '36px',
          marginBottom: '40px',
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#3E0C13',
                border: '1.5px solid #D4AF37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
              }}>
                🪔
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', margin: 0 }}>
                {info.name}
              </h3>
            </div>
            <p style={{ color: '#A89E96', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '12px' }}>
              {info.tagline}
            </p>
            <p style={{ color: '#F3E5AB', fontSize: '0.82rem', margin: 0 }}>
              {info.contact.address.locality}, {info.contact.address.city}, Kerala – {info.contact.address.pinCode}
            </p>
          </div>

          {/* Quick Timings */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '16px', borderBottom: '1px solid rgba(212, 175, 55, 0.25)', paddingBottom: '6px' }}>
              Darshan Hours
            </h4>
            <div style={{ fontSize: '0.86rem', lineHeight: 1.8, color: '#D8D0C5' }}>
              <div><strong>Morning:</strong> {info.timings.morning.time}</div>
              <div><strong>Evening:</strong> {info.timings.evening.time}</div>
              <div style={{ color: '#FDE047', fontSize: '0.8rem', marginTop: '6px' }}>
                Deeparadhana daily at 06:30 PM
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '16px', borderBottom: '1px solid rgba(212, 175, 55, 0.25)', paddingBottom: '6px' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem' }}>
              <a href="#home" style={{ color: '#D8D0C5', textDecoration: 'none' }}>Home</a>
              <a href="#timings" style={{ color: '#D8D0C5', textDecoration: 'none' }}>Darshan Timings</a>
              <a href="#about" style={{ color: '#D8D0C5', textDecoration: 'none' }}>About Temple</a>
              <a href="#offerings" style={{ color: '#D8D0C5', textDecoration: 'none' }}>Daily Poojas</a>
              <a href="#location" style={{ color: '#D8D0C5', textDecoration: 'none' }}>Location & Map</a>
              <a href="#connect" style={{ color: '#D8D0C5', textDecoration: 'none' }}>Quick Connect</a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          fontSize: '0.82rem',
          color: '#8A817D',
        }}>
          <div>
            © {new Date().getFullYear()} {info.name}, Varkala. All rights reserved.
          </div>
          <div style={{ color: '#D4AF37' }}>
            Traditional Coastal Temple of Varkala • Static Web Edition
          </div>
        </div>
      </div>
    </footer>
  );
}
