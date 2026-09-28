import React from 'react';

const essentials = [
  {
    title: "About Sree Janardhana",
    subtitle: "2000-Year Ancient Legend",
    desc: "Legend recounts that Sage Narada arrived here followed by the celestial Navaprajapathis. Consecrated by Lord Parasurama, the divine idol of Lord Vishnu with conch and holy kumbha bestows moksha to all who surrender.",
    image: "/images/hero.jpg",
    linkText: "Discover Legend",
    badge: "Sanctum History",
  },
  {
    title: "Papanasam Holy Waters",
    subtitle: "Sacred Bath & Pithru Tharpanam",
    desc: "Literally 'Destroyer of Sins', Papanasam Beach is renowned across Bharat. Taking a holy dip in its sea waters and offering Pithru Tharpanam frees ancestors and purifies the devotee's karmas.",
    image: "/images/papanasam-beach.jpg",
    linkText: "View Rituals",
    badge: "Sacred Snanam",
  },
  {
    title: "The Dutch Captain's Bell",
    subtitle: "Historic 18th Century Relic",
    desc: "A massive bronze bell gifted in 1757 by the captain of a stranded Dutch sailing vessel who prayed to Lord Janardhana when his vessel lost steerage during a tempest off the Varkala coast.",
    image: "/images/architecture.jpg",
    linkText: "Read Chronicle",
    badge: "Heritage Treasure",
  },
  {
    title: "Devotee Accommodation",
    subtitle: "Devaswom Pilgrim Guest House",
    desc: "Clean, peaceful AC and non-AC rooms located just 200m from the temple entrance, managed by the Devaswom Board for visiting pilgrims and families performing special poojas.",
    image: "/images/darshan-deepam.jpg",
    linkText: "Check Availability",
    badge: "Pilgrim Stay",
  },
];

export default function DevoteeEssentials({ onSelectTopic }) {
  return (
    <section id="essentials" className="section" style={{ background: '#FFFFFF' }}>
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <span>⚜️</span>
            <span>Pilgrim Heritage</span>
          </div>
          <h2 className="section-title">Devotee Essentials</h2>
          <p className="section-desc">
            Essential spiritual lore, sacred rituals, and practical pilgrim guidance for visiting Sree Janardhana Swamy Temple at Varkala.
          </p>
        </div>

        {/* 4 Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {essentials.map((item, idx) => (
            <div
              key={idx}
              className="essential-card"
              style={{
                position: 'relative',
                height: '420px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(38, 7, 11, 0.12)',
                cursor: 'pointer',
              }}
              onClick={() => onSelectTopic && onSelectTopic(item)}
            >
              {/* Background Image */}
              <div
                className="essential-bg"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />

              {/* Gradient Dark Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(38, 7, 11, 0.95) 0%, rgba(38, 7, 11, 0.55) 60%, rgba(38, 7, 11, 0.2) 100%)',
                  transition: 'background 0.3s ease',
                }}
              />

              {/* Card Badge */}
              <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>
                <span className="badge-gold" style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>
                  {item.badge}
                </span>
              </div>

              {/* Content bottom */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '28px 24px',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
              }}>
                <span style={{ color: '#F3E5AB', fontSize: '0.82rem', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {item.subtitle}
                </span>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.45rem', marginBottom: '10px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                  {item.title}
                </h3>
                <p className="essential-desc" style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.88rem', lineHeight: 1.55, marginBottom: '16px' }}>
                  {item.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FDE047', fontWeight: '700', fontSize: '0.9rem' }}>
                  <span>{item.linkText}</span>
                  <span style={{ transition: 'transform 0.3s ease' }} className="arrow-icon">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .essential-card:hover .essential-bg {
          transform: scale(1.08);
        }
        .essential-card:hover .arrow-icon {
          transform: translateX(6px);
        }
      `}</style>
    </section>
  );
}
