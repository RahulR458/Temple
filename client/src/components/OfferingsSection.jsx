import React, { useState } from 'react';

export default function OfferingsSection({ offerings, onBookPooja }) {
  const [filter, setFilter] = useState('all');

  const filteredOfferings = offerings?.filter((item) => {
    if (filter === 'popular') return item.popular;
    if (filter === 'pithru') return item.id.includes('pooja-3') || item.name.includes('Thila');
    return true;
  });

  return (
    <section id="offerings" className="section" style={{ background: '#FAF7F0' }}>
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <span>🪔</span>
            <span>Vazhipadu & Sevas</span>
          </div>
          <h2 className="section-title">Sacred Poojas & Offerings</h2>
          <p className="section-desc">
            Consecrate special poojas at Sree Janardhana Swamy Temple for family welfare, spiritual liberation, and removal of planetary and ancestral doshas.
          </p>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '36px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setFilter('all')}
            className={`btn ${filter === 'all' ? 'btn-maroon' : 'btn-outline-gold'}`}
            style={{ padding: '8px 20px', fontSize: '0.9rem' }}
          >
            All Offerings ({offerings?.length || 0})
          </button>
          <button
            onClick={() => setFilter('popular')}
            className={`btn ${filter === 'popular' ? 'btn-maroon' : 'btn-outline-gold'}`}
            style={{ padding: '8px 20px', fontSize: '0.9rem' }}
          >
            ⭐ Most Revered
          </button>
          <button
            onClick={() => setFilter('pithru')}
            className={`btn ${filter === 'pithru' ? 'btn-maroon' : 'btn-outline-gold'}`}
            style={{ padding: '8px 20px', fontSize: '0.9rem' }}
          >
            🌊 Pithru Tharpanam & Ancestral
          </button>
        </div>

        {/* Offerings Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {filteredOfferings?.map((item) => (
            <div key={item.id} className="temple-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: '#B8860B', fontFamily: 'var(--font-heading)', fontWeight: '700' }}>
                    {item.malayalam}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', color: '#26070B', margin: '4px 0 0 0' }}>
                    {item.name}
                  </h3>
                </div>

                <div style={{
                  background: '#E8F5E9',
                  color: '#0B4F26',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontWeight: '800',
                  fontSize: '1.15rem',
                  border: '1px solid #A5D6A7',
                }}>
                  ₹{item.price}
                </div>
              </div>

              <p style={{ color: '#574D50', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '14px', flex: 1 }}>
                {item.description}
              </p>

              <div style={{ background: '#FAF7F0', padding: '10px 14px', borderRadius: '10px', marginBottom: '20px', borderLeft: '3px solid #D4AF37' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#8C6507', textTransform: 'uppercase', display: 'block' }}>
                  Spiritual Benefit:
                </span>
                <span style={{ fontSize: '0.86rem', color: '#5C4204' }}>
                  {item.benefits}
                </span>
              </div>

              <button
                onClick={() => onBookPooja(item)}
                className="btn btn-green"
                style={{ width: '100%', padding: '12px', borderRadius: '12px', fontSize: '0.95rem' }}
              >
                <span>Book Offering</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
