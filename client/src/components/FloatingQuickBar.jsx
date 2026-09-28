import React from 'react';

export default function FloatingQuickBar({ timingsData, onOpenBooking }) {
  const liveStatus = timingsData?.liveStatus;

  return (
    <section style={{ position: 'relative', zIndex: 20, marginTop: '-60px', paddingBottom: '30px' }}>
      <div className="container">
        <div style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(38, 7, 11, 0.16)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          padding: '36px 32px',
          position: 'relative',
        }}>
          {/* Top golden decorative ribbon */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '20%',
            right: '20%',
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #D4AF37, #B8860B, transparent)',
          }} />

          <div className="grid-quick-bar">
            {/* Column 1: Online Pooja Booking */}
            <div className="quick-col quick-col-border">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#E8F5E9',
                  color: '#0B4F26',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.12em', color: '#0B4F26', textTransform: 'uppercase' }}>
                  Official Online Portal
                </span>
              </div>

              <h2 style={{ fontSize: '1.65rem', color: '#26070B', marginBottom: '12px' }}>
                Book Pooja Online
              </h2>

              <p style={{ color: '#574D50', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>
                Devotees around the world can offer sacred Vazhipadu, Paal Payasam, and Thila Homam with direct postal prasadam delivery.
              </p>

              <button
                onClick={onOpenBooking}
                className="btn btn-green"
                style={{ width: '100%', justifyContent: 'space-between', padding: '14px 20px', borderRadius: '14px' }}
              >
                <span>Visit Booking Portal</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>

            {/* Column 2: Darshan Timings */}
            <div className="quick-col quick-col-border">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#FDF8EA',
                    color: '#8C6507',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </span>
                  <h3 style={{ fontSize: '1.35rem', color: '#26070B', margin: 0 }}>
                    Darshan Timings
                  </h3>
                </div>

                {/* Live operational badge */}
                <span className={liveStatus?.isOpenNow ? "badge-green" : "badge-maroon"}>
                  <span style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: liveStatus?.isOpenNow ? '#168843' : '#9A2030',
                    display: 'inline-block',
                  }} />
                  {liveStatus?.isOpenNow ? 'Open Now' : 'Closed'}
                </span>
              </div>

              {/* Status Note */}
              <div style={{
                background: '#FAF6EE',
                borderLeft: '3px solid #D4AF37',
                padding: '8px 12px',
                borderRadius: '0 8px 8px 0',
                fontSize: '0.85rem',
                color: '#5C4204',
                marginBottom: '16px',
              }}>
                <strong>Current:</strong> {liveStatus?.currentPhase || 'Regular Daily Schedule'}
                <br />
                <span style={{ fontSize: '0.78rem', color: '#8C6507' }}>Next: {liveStatus?.nextEvent}</span>
              </div>

              {/* Timings breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ paddingLeft: '14px', borderLeft: '2px solid #EFE0A7', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '-5px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', background: '#D4AF37' }}></span>
                  <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#8C6507', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Morning Darshan
                  </span>
                  <span style={{ fontSize: '1.05rem', fontWeight: '700', color: '#21191B' }}>
                    03:30 AM – 12:00 PM
                  </span>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: '#83787B' }}>
                    Nirmalyam at 3:30 AM • Ucha Pooja at 11:30 AM
                  </span>
                </div>

                <div style={{ paddingLeft: '14px', borderLeft: '2px solid #EFE0A7', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '-5px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', background: '#B8860B' }}></span>
                  <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#8C6507', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Evening Darshan
                  </span>
                  <span style={{ fontSize: '1.05rem', fontWeight: '700', color: '#21191B' }}>
                    05:00 PM – 08:00 PM
                  </span>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: '#83787B' }}>
                    Maha Deeparadhana at 6:30 PM • Athazham at 7:30 PM
                  </span>
                </div>
              </div>

              <div style={{ marginTop: '16px', textAlign: 'right' }}>
                <a href="#darshan-timings" style={{ color: '#8C6507', fontSize: '0.88rem', fontWeight: '700', textDecoration: 'none' }}>
                  View Full Schedule & Rules →
                </a>
              </div>
            </div>

            {/* Column 3: Quick Connect */}
            <div className="quick-col">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#FCE8EA',
                  color: '#781825',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <h3 style={{ fontSize: '1.35rem', color: '#26070B', margin: 0 }}>
                  Quick Connect
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#83787B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Temple Devaswom Office
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '2px' }}>
                    <a href="tel:04702607575" style={{ color: '#26070B', fontWeight: '700', fontSize: '1.05rem', textDecoration: 'none' }} className="phone-hover">
                      0470 2607575
                    </a>
                    <span style={{ color: '#D4AF37' }}>•</span>
                    <a href="tel:04702602288" style={{ color: '#26070B', fontWeight: '700', fontSize: '1.05rem', textDecoration: 'none' }} className="phone-hover">
                      0470 2602288
                    </a>
                  </div>
                  <a href="mailto:devaswom@varkalatemple.org" style={{ fontSize: '0.85rem', color: '#8C6507', textDecoration: 'none', display: 'block', marginTop: '2px' }}>
                    devaswom@varkalatemple.org
                  </a>
                </div>

                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#83787B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    WhatsApp Devotee Support
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                    <a href="https://wa.me/919447312890" target="_blank" rel="noreferrer" style={{ color: '#0F6330', fontWeight: '700', fontSize: '1.05rem', textDecoration: 'none' }}>
                      +91 94473 12890
                    </a>
                    <span className="badge-green" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>Chat Only</span>
                  </div>
                </div>

                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', color: '#83787B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Devotee Guest House Desk
                  </span>
                  <a href="tel:04702603399" style={{ color: '#26070B', fontWeight: '700', fontSize: '1.05rem', textDecoration: 'none' }}>
                    0470 2603399
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '16px' }}>
                <a href="#quick-connect" className="btn btn-outline-gold" style={{ width: '100%', padding: '10px', fontSize: '0.9rem', borderRadius: '12px' }}>
                  <span>Leave Devotee Message</span>
                  <span>✍️</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .grid-quick-bar {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 992px) {
          .grid-quick-bar {
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
          }
          .quick-col {
            padding: 0 28px;
            display: flex;
            flex-direction: column;
          }
          .quick-col:first-child {
            padding-left: 0;
          }
          .quick-col:last-child {
            padding-right: 0;
          }
          .quick-col-border {
            border-right: 1px solid #ECE7DE;
          }
        }
        .phone-hover:hover {
          color: #B8860B !important;
          text-decoration: underline !important;
        }
      `}</style>
    </section>
  );
}
