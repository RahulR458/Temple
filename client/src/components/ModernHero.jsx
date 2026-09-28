import React from 'react';

export default function ModernHero({ info, liveStatus }) {
  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '82vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '110px',
      paddingBottom: '80px',
      overflow: 'hidden',
    }}>
      {/* Background Image with subtle cinematic depth */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        zIndex: 1,
      }} />

      {/* Modern gradient tint overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(38, 7, 11, 0.92) 0%, rgba(38, 7, 11, 0.76) 50%, rgba(20, 10, 12, 0.88) 100%)',
        zIndex: 2,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 3, maxWidth: '960px', textAlign: 'center' }}>
        {/* Modern Pill Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          borderRadius: '9999px',
          padding: '6px 18px',
          color: '#FDE047',
          fontSize: '0.82rem',
          fontWeight: '600',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
          <span>🪔</span>
          <span>Traditional Coastal Village Shrine • Varkala</span>
        </div>

        {/* Malayalam Sacred Line */}
        <p style={{
          color: '#F3E5AB',
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
          letterSpacing: '0.04em',
          marginBottom: '10px',
        }}>
          {info.malayalamName}
        </p>

        {/* Main Heading */}
        <h1 style={{
          color: '#FFFFFF',
          fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
          fontWeight: '800',
          lineHeight: 1.18,
          marginBottom: '18px',
          textShadow: '0 4px 20px rgba(0,0,0,0.5)',
        }}>
          {info.name}
        </h1>

        <p style={{
          color: 'rgba(255, 255, 255, 0.88)',
          fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
          lineHeight: 1.7,
          maxWidth: '680px',
          margin: '0 auto 36px auto',
        }}>
          A serene sanctuary of peace and devotion. Consecrated to {info.deities.join(', ')}, welcoming pilgrims and local families for daily prayers and blessings.
        </p>

        {/* Quick Action Button Group */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '44px' }}>
          <a href="#timings" className="btn btn-gold" style={{ padding: '12px 26px', fontSize: '0.95rem' }}>
            <span>⏰</span>
            <span>Darshan Timings</span>
          </a>

          <a
            href={`https://wa.me/${info.contact.whatsapp}?text=Namaste,%20I%20would%20like%20to%20know%20more%20about%20poojas%20at%20Varkala%20temple`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-green"
            style={{ padding: '12px 26px', fontSize: '0.95rem' }}
          >
            <span>💬</span>
            <span>WhatsApp Quick Connect</span>
          </a>

          <a href="#offerings" className="btn btn-outline-white" style={{ padding: '12px 24px', fontSize: '0.95rem' }}>
            <span>🌸</span>
            <span>Pooja Offerings</span>
          </a>
        </div>

        {/* Modern 3-Card Glassmorphism Highlight Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          textAlign: 'left',
        }}>
          {/* Card 1: Morning Darshan */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '18px',
            padding: '18px 20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FDE047', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
              <span>🌅</span>
              <span>Morning Darshan</span>
            </div>
            <div style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: '700' }}>
              {info.timings.morning.time}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', marginTop: '2px' }}>
              Nirmalyam & Usha Pooja
            </div>
          </div>

          {/* Card 2: Evening Darshan */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '18px',
            padding: '18px 20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FDE047', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
              <span>🌆</span>
              <span>Evening Darshan</span>
            </div>
            <div style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: '700' }}>
              {info.timings.evening.time}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', marginTop: '2px' }}>
              Deeparadhana at 6:30 PM
            </div>
          </div>

          {/* Card 3: Location */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '18px',
            padding: '18px 20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FDE047', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
              <span>📍</span>
              <span>Location</span>
            </div>
            <div style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: '700' }}>
              Varkala, Kerala
            </div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', marginTop: '2px' }}>
              Near Papanasam Beach Road
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
