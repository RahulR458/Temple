import React, { useState, useEffect, useRef } from 'react';

export default function ModernHeader({ liveStatus, contact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };

    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="modern-header-wrapper"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        pointerEvents: 'none',
      }}
    >
      <div className="header-container" style={{ pointerEvents: 'auto' }}>
        {/* Floating Responsive Island / Pill Container */}
        <div className="header-island">
          {/* Brand Identity - Clean Simple Text */}
          <a href="#home" className="header-brand" onClick={() => setMobileOpen(false)}>
            <div className="header-brand-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C10.5 5.5 8 8 12 13C16 8 13.5 5.5 12 2Z" fill="#FDE047" />
                <circle cx="12" cy="8.5" r="1.5" fill="#EF4444" />
                <ellipse cx="12" cy="15.5" rx="7.5" ry="3" fill="#D4AF37" />
                <path d="M7 16L9.5 21H14.5L17 16Z" fill="#996515" />
              </svg>
            </div>

            <span className="header-brand-title">
              Varkala Temple
            </span>
          </a>

          {/* Desktop Center Navigation Links */}
          <nav className="header-desktop-nav">
            <a href="#home" className="modern-nav-item">Home</a>
            <a href="#timings" className="modern-nav-item">Timings</a>
            <a href="#about" className="modern-nav-item">About</a>
            <a href="#offerings" className="modern-nav-item">Offerings</a>
            <a href="#location" className="modern-nav-item">Location</a>
            <a href="#connect" className="modern-nav-item">Contact</a>
          </nav>

          {/* Right Action Cluster */}
          <div className="header-right-actions">
            {/* Live Sanctum Status Badge */}
            <div className={`status-pill ${liveStatus?.isOpen ? 'status-open' : 'status-closed'}`}>
              <span className="status-dot" />
              <span className="status-text">{liveStatus?.isOpen ? 'Open' : 'Closed'}</span>
            </div>

            {/* Quick Contact CTA (visible on tablets & desktops) */}
            <a
              href={`https://wa.me/${contact.whatsapp}?text=Namaste`}
              target="_blank"
              rel="noreferrer"
              className="header-cta-btn"
            >
              <span>Contact</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="7" x2="20" y2="7"></line>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="17" x2="20" y2="17"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Modern Mobile Floating Sheet Drawer */}
        {mobileOpen && (
          <div className="mobile-drawer">
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <a href="#home" onClick={() => setMobileOpen(false)} className="mobile-item">Home</a>
              <a href="#timings" onClick={() => setMobileOpen(false)} className="mobile-item">Timings</a>
              <a href="#about" onClick={() => setMobileOpen(false)} className="mobile-item">About</a>
              <a href="#offerings" onClick={() => setMobileOpen(false)} className="mobile-item">Offerings</a>
              <a href="#location" onClick={() => setMobileOpen(false)} className="mobile-item">Location</a>
              <a href="#connect" onClick={() => setMobileOpen(false)} className="mobile-item">Contact</a>
            </nav>

            <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #ECE7DE', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href={`tel:${contact.phonePrimary}`}
                className="mobile-action-call"
              >
                <span>📞 Call Temple: {contact.phonePrimary}</span>
              </a>

              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mobile-action-wa"
              >
                <span>💬 WhatsApp Quick Connect</span>
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        /* Header Wrapper & Positioning */
        .modern-header-wrapper {
          padding: 10px 12px;
          transition: padding 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Container Length Controls */
        /* Mobile View Length: Compact and centered (max 440px) */
        .header-container {
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
        }

        /* Floating Island Container */
        .header-island {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.90);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(212, 175, 55, 0.35);
          border-radius: 9999px;
          padding: 5px 8px 5px 12px;
          min-height: 46px;
          box-shadow: 0 6px 20px rgba(38, 7, 11, 0.08);
          transition: all 0.3s ease;
          gap: 10px;
        }

        /* Brand */
        .header-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .header-brand-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3E0C13 0%, #1A0507 100%);
          border: 1.5px solid #D4AF37;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .header-brand-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.92rem;
          color: #26070B;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        /* Desktop Nav */
        .header-desktop-nav {
          display: none;
          align-items: center;
          gap: 2px;
        }
        .modern-nav-item {
          color: #3E0C13;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 6px 11px;
          border-radius: 9999px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .modern-nav-item:hover {
          background: rgba(212, 175, 55, 0.15);
          color: #8C6507;
        }

        /* Right Actions */
        .header-right-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        /* Live Status Pill */
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 9px;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 700;
          white-space: nowrap;
        }
        .status-open {
          background: #E8F5E9;
          border: 1px solid #A5D6A7;
          color: #1B5E20;
        }
        .status-closed {
          background: #FCE8EA;
          border: 1px solid #F87171;
          color: #991B1B;
        }
        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
        }

        /* CTA Button */
        .header-cta-btn {
          display: none;
          align-items: center;
          gap: 6px;
          padding: 6px 13px;
          border-radius: 9999px;
          background: #3E0C13;
          color: #FDE047;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid rgba(212, 175, 55, 0.4);
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .header-cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(38, 7, 11, 0.25);
          background: #57111B;
        }

        /* Mobile Hamburger */
        .mobile-menu-btn {
          background: #FAF6EE;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #26070B;
          flex-shrink: 0;
          padding: 0;
        }

        /* Mobile Drawer (Matches mobile length) */
        .mobile-drawer {
          max-width: 440px;
          margin: 8px auto 0 auto;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 18px;
          padding: 14px 18px;
          box-shadow: 0 16px 40px rgba(38, 7, 11, 0.16);
          animation: slideDown 0.2s ease-out;
        }
        .mobile-item {
          color: #26070B;
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 600;
          padding: 8px 12px;
          border-radius: 10px;
          transition: background 0.15s ease;
        }
        .mobile-item:hover, .mobile-item:active {
          background: #FAF6EE;
          color: #B8860B;
        }
        .mobile-action-call {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FDF8EA;
          color: #8C6507;
          padding: 8px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.82rem;
        }
        .mobile-action-wa {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #E8F5E9;
          color: #0B4F26;
          padding: 8px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.82rem;
        }

        /* Tablet View Breakpoint (540px - 879px) */
        @media (min-width: 540px) {
          .header-container {
            max-width: 540px;
          }
          .header-cta-btn {
            display: inline-flex;
          }
          .header-brand-title {
            font-size: 1rem;
          }
          .header-brand-icon {
            width: 32px;
            height: 32px;
          }
        }

        /* Website Desktop View Length Control (>= 880px) */
        /* Custom adjusted length: fits comfortably around 820px, not overly stretched */
        @media (min-width: 880px) {
          .modern-header-wrapper {
            padding: 16px 20px;
          }
          .header-container {
            max-width: 820px; /* Custom adjusted desktop length */
          }
          .header-island {
            min-height: 50px;
            padding: 6px 12px 6px 16px;
            gap: 16px;
          }
          .header-desktop-nav {
            display: flex;
          }
          .mobile-menu-btn {
            display: none;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
