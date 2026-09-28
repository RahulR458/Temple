import React from 'react';

export default function LocationSimple({ location, contact }) {
  return (
    <section id="location" className="section" style={{ background: '#FFFFFF' }}>
      <div className="container" style={{ maxWidth: '1040px' }}>
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <span>📍</span>
            <span>Reach the Sanctum</span>
          </div>
          <h2 className="section-title">Temple Location</h2>
          <p className="section-desc">
            Conveniently situated in Varkala, easily accessible by auto-rickshaw, taxi, or walking from the nearby beaches and cliffs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'center' }}>
          {/* Map Column */}
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            border: '2px solid rgba(212, 175, 55, 0.3)',
            boxShadow: 'var(--shadow-md)',
            height: '340px',
            background: '#F4EFE2',
          }}>
            <iframe
              title="Varkala Temple Map"
              src={location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Details & Landmarks */}
          <div>
            <div style={{
              background: '#FAF7F0',
              padding: '24px',
              borderRadius: '18px',
              border: '1px solid #ECE7DE',
              marginBottom: '20px',
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#8C6507', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Sacred Address
              </span>
              <h3 style={{ fontSize: '1.25rem', color: '#26070B', margin: '4px 0 8px 0' }}>
                {contact.address.temple}
              </h3>
              <p style={{ color: '#574D50', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                {contact.address.locality},<br />
                {contact.address.city}, {contact.address.district}, {contact.address.state} — {contact.address.pinCode}
              </p>

              <div style={{ marginTop: '16px' }}>
                <a
                  href={location.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gold"
                  style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Nearby Distances */}
            <div>
              <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#83787B', textTransform: 'uppercase', marginBottom: '10px' }}>
                Nearby Travel Hubs:
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {location.nearbyLandmarks.map((lm, idx) => (
                  <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #ECE7DE', padding: '10px 14px', borderRadius: '12px' }}>
                    <span style={{ display: 'block', fontWeight: '600', color: '#26070B', fontSize: '0.85rem' }}>{lm.name}</span>
                    <span style={{ color: '#B8860B', fontSize: '0.78rem' }}>{lm.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
