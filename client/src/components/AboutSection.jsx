import React from 'react';

export default function AboutSection({ about, deities }) {
  return (
    <section id="about" className="section" style={{ background: '#FFFFFF' }}>
      <div className="container" style={{ maxWidth: '1040px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
          {/* Left Text Column */}
          <div>
            <div className="section-subtitle">
              <span>🌿</span>
              <span>Sacred Serenity</span>
            </div>
            <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '16px' }}>
              About the Temple
            </h2>

            <p style={{ color: '#8C6507', fontSize: '1.08rem', fontWeight: '500', lineHeight: 1.6, marginBottom: '14px' }}>
              {about.lead}
            </p>

            {about.paragraphs.map((p, idx) => (
              <p key={idx} style={{ color: '#574D50', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '14px' }}>
                {p}
              </p>
            ))}

            {/* Deities Pills */}
            <div style={{ marginTop: '20px' }}>
              <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#83787B', textTransform: 'uppercase', marginBottom: '8px' }}>
                Presiding & Upadevathas (Deities):
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {deities.map((d, idx) => (
                  <span key={idx} className="badge-gold" style={{ fontSize: '0.82rem' }}>
                    🪔 {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Feature */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(38, 7, 11, 0.14)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              position: 'relative',
              height: '360px',
            }}>
              <img
                src="/images/darshan-deepam.jpg"
                alt="Temple Lamp and Sanctum"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(38, 7, 11, 0.8) 0%, transparent 60%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '24px',
                color: '#FFFFFF',
              }}>
                <div>
                  <h4 style={{ color: '#FDE047', fontSize: '1.15rem', margin: '0 0 4px 0' }}>Daily Brass Lamp Illumination</h4>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', margin: 0 }}>
                    Deeparadhana brings serene peace to the local neighborhood every dusk.
                  </p>
                </div>
              </div>
            </div>

            {/* Overlapping small accent card */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-16px',
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '14px 18px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
              border: '1px solid #EFE0A7',
              maxWidth: '220px',
            }} className="hidden md:block">
              <span style={{ fontSize: '1.2rem', display: 'block', marginBottom: '2px' }}>🙏</span>
              <span style={{ fontSize: '0.82rem', fontWeight: '700', color: '#26070B', display: 'block' }}>Open for All Devotees</span>
              <span style={{ fontSize: '0.74rem', color: '#574D50' }}>A peaceful local space for prayer and quiet reflection.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
