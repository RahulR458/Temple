import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top sacred ticker announcement bar */}
      <div style={{
        background: 'linear-gradient(90deg, #3E0C13, #57111B, #3E0C13)',
        color: '#F7F0D3',
        padding: '7px 16px',
        fontSize: '0.82rem',
        fontWeight: '500',
        borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <span style={{ color: '#FDE047' }}>🪔</span>
            <span><strong>Temple Update:</strong> Arattu Mahotsavam 2026 dates announced • Daily Maha Annadanam at 12:15 PM</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="hidden md:flex">
            <span>Devaswom Office: <strong>0470 2607575</strong></span>
            <span style={{ opacity: 0.5 }}>|</span>
            <a href="https://wa.me/919447312890" target="_blank" rel="noreferrer" style={{ color: '#FDE047', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>💬 WhatsApp Devotee Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 253, 249, 0.96)' : 'rgba(255, 253, 249, 0.88)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 4px 20px rgba(38, 7, 11, 0.08)' : '0 2px 10px rgba(0,0,0,0.03)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: scrolled ? '10px 24px' : '16px 24px' }}>
          {/* Logo & Temple Branding */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3E0C13, #26070B)',
              border: '2px solid #D4AF37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
            }}>
              {/* Sacred Nilavilakku / Temple Icon */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C11 5 9 7 12 10C15 7 13 5 12 2Z" fill="#FDE047" />
                <circle cx="12" cy="7" r="1.5" fill="#DC2626" />
                <ellipse cx="12" cy="12" rx="7" ry="2" fill="#D4AF37" />
                <path d="M9 12L10 19H14L15 12Z" fill="#B8860B" />
                <ellipse cx="12" cy="19" rx="6" ry="1.5" fill="#D4AF37" />
                <path d="M7 19.5L6 22H18L17 19.5Z" fill="#8C6507" />
              </svg>
            </div>
            <div>
              <span style={{
                display: 'block',
                fontFamily: 'var(--font-heading)',
                fontWeight: '800',
                fontSize: '1.15rem',
                color: '#26070B',
                letterSpacing: '0.02em',
                lineHeight: 1.15,
              }}>
                Sree Janardhana Swamy
              </span>
              <span style={{
                display: 'block',
                fontSize: '0.75rem',
                color: '#B8860B',
                fontWeight: '600',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                Varkala • Dakshina Kashi
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div style={{ display: 'none', alignItems: 'center', gap: '28px' }} className="nav-desktop-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#darshan-timings" className="nav-link">Darshan Timings</a>
            <a href="#essentials" className="nav-link">Devotee Essentials</a>
            <a href="#offerings" className="nav-link">Pooja & Offerings</a>
            <a href="#location" className="nav-link">Location & Map</a>
            <a href="#quick-connect" className="nav-link">Quick Connect</a>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={onOpenBooking}
              className="btn btn-gold"
              style={{ padding: '9px 20px', fontSize: '0.9rem' }}
            >
              <span>🪔</span>
              <span>Book Pooja</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                padding: '6px',
                cursor: 'pointer',
                color: '#3E0C13',
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div style={{
            background: '#FFFFFF',
            borderTop: '1px solid rgba(212, 175, 55, 0.2)',
            padding: '16px 24px 24px',
            boxShadow: '0 12px 28px rgba(0,0,0,0.1)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Home</a>
              <a href="#darshan-timings" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Darshan Timings</a>
              <a href="#essentials" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Devotee Essentials</a>
              <a href="#offerings" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Pooja & Offerings</a>
              <a href="#location" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Location & Directions</a>
              <a href="#quick-connect" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link">Quick Connect</a>
              <div style={{ paddingTop: '8px', borderTop: '1px solid #ECE7DE' }}>
                <a href="tel:04702607575" style={{ color: '#57111B', fontWeight: '600', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                  📞 Call Temple Office: 0470 2607575
                </a>
                <a href="https://wa.me/919447312890" target="_blank" rel="noreferrer" style={{ color: '#0F6330', fontWeight: '600', textDecoration: 'none', display: 'block' }}>
                  💬 WhatsApp Devotee Support
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        .nav-link {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.95rem;
          color: #3E0C13;
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
        }
        .nav-link:hover {
          color: #B8860B;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: #D4AF37;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .mobile-nav-link {
          font-family: var(--font-body);
          font-size: 1.05rem;
          font-weight: 600;
          color: #26070B;
          text-decoration: none;
          padding: 8px 0;
          border-bottom: 1px solid #F4EFE2;
        }
        @media (min-width: 992px) {
          .nav-desktop-links {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
