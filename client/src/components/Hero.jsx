import React, { useState, useEffect } from 'react';

const titles = [
  { text: "Sree Janardhana Swamy Temple", lang: "en", sub: "The Ancient Dakshina Kashi of Kerala" },
  { text: "ശ്രീ ജനാർദ്ദനസ്വാമി ക്ഷേത്രം", lang: "ml", sub: "വർക്കലയിലെ പുണ്യ തീർത്ഥ സങ്കേതം" },
  { text: "श्री जनार्दन स्वामी मंदिर", lang: "hi", sub: "वर्कला का प्राचीन दक्षिण काशी तीर्थ" },
  { text: "ஸ்ரீ ஜனார்த்தன சுவாமி கோவில்", lang: "ta", sub: "வர்க்கலையின் புண்ணிய சேத்திரம்" },
];

export default function Hero({ onOpenBooking }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setFade(true);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header id="home" style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background Image with Overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%',
        zIndex: 1,
      }} />

      {/* Atmospheric Spiritual Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(38, 7, 11, 0.94) 0%, rgba(38, 7, 11, 0.75) 45%, rgba(15, 36, 16, 0.6) 100%), linear-gradient(to top, rgba(20, 10, 12, 0.9) 0%, transparent 60%)',
        zIndex: 2,
      }} />

      {/* Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 3, paddingTop: '60px', paddingBottom: '110px' }}>
        <div style={{ maxWidth: '780px' }}>
          {/* Pill Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(212, 175, 55, 0.5)',
            padding: '6px 16px',
            borderRadius: '9999px',
            color: '#FDE047',
            fontSize: '0.85rem',
            fontWeight: '600',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}>
            <span>🪔</span>
            <span>2,000+ Years Ancient Vaishnavite Shrine</span>
            <span>•</span>
            <span>Varkala, Kerala</span>
          </div>

          {/* Animated Multilingual Title */}
          <h1 style={{
            color: '#FFFFFF',
            fontSize: 'clamp(2.3rem, 5.5vw, 3.8rem)',
            fontWeight: '800',
            lineHeight: 1.15,
            marginBottom: '14px',
            textShadow: '0 3px 20px rgba(0,0,0,0.6)',
            minHeight: '1.25em',
            transition: 'opacity 0.4s ease',
            opacity: fade ? 1 : 0,
          }}>
            {titles[index].text}
          </h1>

          <p style={{
            color: '#F3E5AB',
            fontFamily: 'var(--font-subheading)',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)',
            fontStyle: 'italic',
            letterSpacing: '0.02em',
            marginBottom: '20px',
            transition: 'opacity 0.4s ease',
            opacity: fade ? 1 : 0,
          }}>
            {titles[index].sub}
          </p>

          <p style={{
            color: 'rgba(255, 255, 255, 0.92)',
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            lineHeight: 1.7,
            marginBottom: '36px',
            maxWidth: '680px',
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }}>
            Perched gracefully on the dramatic laterite red cliffs overlooking the azure Arabian Sea and the sin-cleansing Papanasam Beach, Sree Janardhana Swamy Temple is consecrated to Lord Maha Vishnu. Celebrated as <em>Dakshina Kashi</em>, it is renowned for sacred Pithru Tharpanam, divine morning peace, and centuries-old tantric traditions.
          </p>

          {/* Action Button Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            <a href="#darshan-timings" className="btn btn-gold" style={{ padding: '14px 28px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Darshan Timings</span>
            </a>

            <button onClick={onOpenBooking} className="btn btn-green" style={{ padding: '14px 28px' }}>
              <span>🪔</span>
              <span>Book Pooja Online</span>
            </button>

            <a href="#quick-connect" className="btn btn-outline-white" style={{ padding: '14px 26px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Quick Connect</span>
            </a>
          </div>

          {/* Quick Highlight Metrics */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            marginTop: '44px',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.4rem' }}>🏛️</span>
              <div>
                <span style={{ color: '#FDE047', fontWeight: '700', fontSize: '1.1rem', display: 'block' }}>2,000+ Yrs</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Sacred Heritage</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.4rem' }}>🌊</span>
              <div>
                <span style={{ color: '#FDE047', fontWeight: '700', fontSize: '1.1rem', display: 'block' }}>Papanasam</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Holy Snanam Ghat</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.4rem' }}>🔔</span>
              <div>
                <span style={{ color: '#FDE047', fontWeight: '700', fontSize: '1.1rem', display: 'block' }}>Historic Bell</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>17th C. Dutch Relic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
