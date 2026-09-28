import React from 'react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #26070B 0%, #170406 100%)',
      color: '#EAE1CF',
      borderTop: '2px solid #D4AF37',
      paddingTop: '72px',
      paddingBottom: '36px',
    }}>
      <div className="container">
        {/* Main 4-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '56px',
        }}>
          {/* Column 1: Temple Branding & Address */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#3E0C13',
                border: '1.5px solid #D4AF37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: '1.3rem' }}>🪔</span>
              </div>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', margin: 0 }}>
                Sree Janardhana Swamy
              </h3>
            </div>

            <p style={{ color: '#C5BCB6', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '18px' }}>
              Sree Janardhana Swamy Temple Devaswom<br />
              Temple Road, Near Varkala Beach & Cliff,<br />
              Thiruvananthapuram District, Kerala, India<br />
              Pin Code: <strong>695141</strong>
            </p>

            <a
              href="https://maps.google.com/?q=Janardhanaswamy+Temple+Varkala"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#FDE047', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Get GPS Directions</span>
              <span>→</span>
            </a>
          </div>

          {/* Column 2: Direct Contact */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '20px', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '8px' }}>
              Temple Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#B8860B', textTransform: 'uppercase', fontWeight: '700' }}>
                  Devaswom Office
                </span>
                <a href="tel:04702607575" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '600' }}>
                  0470 2607575
                </a>
                <span style={{ margin: '0 6px', color: '#D4AF37' }}>/</span>
                <a href="tel:04702602288" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '600' }}>
                  0470 2602288
                </a>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#B8860B', textTransform: 'uppercase', fontWeight: '700' }}>
                  WhatsApp Devotee Support
                </span>
                <a href="https://wa.me/919447312890" target="_blank" rel="noreferrer" style={{ color: '#81C784', textDecoration: 'none', fontWeight: '600' }}>
                  +91 94473 12890 (Message Only)
                </a>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#B8860B', textTransform: 'uppercase', fontWeight: '700' }}>
                  Email Helpdesk
                </span>
                <a href="mailto:devaswom@varkalatemple.org" style={{ color: '#EFE0A7', textDecoration: 'none' }}>
                  devaswom@varkalatemple.org
                </a>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#B8860B', textTransform: 'uppercase', fontWeight: '700' }}>
                  Mandaram Guest House
                </span>
                <a href="tel:04702603399" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  0470 2603399
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '20px', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '8px' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <a href="#home" style={{ color: '#C5BCB6', textDecoration: 'none' }} className="footer-link">Home Portal</a>
              <a href="#darshan-timings" style={{ color: '#C5BCB6', textDecoration: 'none' }} className="footer-link">Darshan & Pooja Timings</a>
              <a href="#essentials" style={{ color: '#C5BCB6', textDecoration: 'none' }} className="footer-link">Devotee Essentials & History</a>
              <a href="#offerings" style={{ color: '#C5BCB6', textDecoration: 'none' }} className="footer-link">Sacred Offerings & Vazhipadu</a>
              <a href="#location" style={{ color: '#C5BCB6', textDecoration: 'none' }} className="footer-link">Location & How to Reach</a>
              <a href="#quick-connect" style={{ color: '#C5BCB6', textDecoration: 'none' }} className="footer-link">Quick Connect Helpdesk</a>
              <button
                onClick={onOpenBooking}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FDE047',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontWeight: '700',
                  padding: 0,
                  fontSize: '0.9rem',
                }}
              >
                🪔 Online Pooja Booking Portal
              </button>
            </div>
          </div>

          {/* Column 4: Devotee Guidelines */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '20px', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '8px' }}>
              Devotee Guidelines
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: '#C5BCB6' }}>
              <p style={{ margin: 0 }}>
                • <strong>Traditional Attire:</strong> Mundu (dhoti) without shirts for men; Sarees / Salwars for women.
              </p>
              <p style={{ margin: 0 }}>
                • <strong>Morning Darshan:</strong> Opens at 03:30 AM with sacred Nirmalya Darshanam.
              </p>
              <p style={{ margin: 0 }}>
                • <strong>Maha Annadanam:</strong> Consecrated satvik meals served daily at 12:15 PM.
              </p>
              <p style={{ margin: 0 }}>
                • <strong>Pithru Tharpanam:</strong> Priests available daily from 04:30 AM at Papanasam Beach ghat.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.85rem',
          color: '#83787B',
        }}>
          <div>
            © {new Date().getFullYear()} Sree Janardhana Swamy Temple Devaswom, Varkala. All rights reserved.
          </div>

          <div style={{ color: '#F3E5AB', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
            ശ്രീ ജനാർദ്ദനസ്വാമി തുണ | MERN Stack Portal
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ color: '#81C784' }}>● MongoDB Database Connected</span>
            <span style={{ color: '#FDE047' }}>● Express REST API Active</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: #FDE047 !important;
          transform: translateX(4px);
        }
      `}</style>
    </footer>
  );
}
