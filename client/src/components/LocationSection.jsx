import React, { useState } from 'react';

const transportGuides = [
  {
    icon: "✈️",
    mode: "By Air / Flight",
    hub: "Trivandrum International Airport (TRV)",
    dist: "42 km (Approx 55 mins)",
    details: "Trivandrum Airport connects all major Indian metros and international destinations (Gulf, Singapore, Europe). Prepaid airport taxis and private cabs operate 24/7 directly to Varkala Temple.",
  },
  {
    icon: "🚆",
    mode: "By Train / Railway",
    hub: "Varkala Sivagiri Railway Station (VAK)",
    dist: "3.2 km (Approx 8 mins)",
    details: "Varkala Sivagiri is an 'A' grade station where all major superfast and express trains stop on the Trivandrum–Kollam route. Auto-rickshaws (₹60-80) and taxis are readily available right outside the platform.",
  },
  {
    icon: "🚌",
    mode: "By Road & KSRTC Bus",
    hub: "Varkala Bus Stand / NH-66",
    dist: "2.5 km (Approx 6 mins)",
    details: "Frequent KSRTC fast-passenger buses run between Trivandrum (Thampanoor Bus Stand) and Varkala every 20 minutes. If driving via NH-66, take the scenic coastal deviation at Kallambalam or Parippally.",
  },
  {
    icon: "🌊",
    mode: "Papanasam Holy Snanam Ghat",
    hub: "Papanasam Beach Walkway",
    dist: "400 meters (3 mins walk)",
    details: "An ancient stone staircase leads directly from the western temple gopuram down to the sacred sandy shores of Papanasam Beach where pilgrims take holy snanam and perform Pithru Tharpanam.",
  },
];

export default function LocationSection() {
  const [selectedMode, setSelectedMode] = useState(0);

  return (
    <section id="location" className="section" style={{ background: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <span>📍</span>
            <span>Pilgrim Pilgrimage Map</span>
          </div>
          <h2 className="section-title">Temple Location & How to Reach</h2>
          <p className="section-desc">
            Sree Janardhana Swamy Temple is situated on a serene hillock near the dramatic laterite cliffs of Varkala, Thiruvananthapuram district, Kerala.
          </p>
        </div>

        {/* Location Grid: Map + Guides */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'start' }}>
          {/* Map Column */}
          <div>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 12px 35px rgba(38, 7, 11, 0.12)',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              position: 'relative',
              background: '#F4EFE2',
              height: '380px',
            }}>
              <iframe
                title="Janardhana Swamy Temple Varkala Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3857319985925!2d76.71183357597148!3d8.730833291319223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05efa61eaebce5%3A0xe9f75ec30e008aa2!2sJanardhanaswamy%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address Banner */}
            <div style={{
              background: '#FFFDF9',
              border: '1px solid #ECE7DE',
              borderRadius: '16px',
              padding: '20px',
              marginTop: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '14px',
            }}>
              <div>
                <strong style={{ color: '#26070B', display: 'block', fontSize: '1.05rem' }}>
                  Sree Janardhana Swamy Temple
                </strong>
                <span style={{ color: '#574D50', fontSize: '0.88rem' }}>
                  Temple Road, Near Varkala Beach, Thiruvananthapuram, Kerala – 695141
                </span>
              </div>

              <a
                href="https://maps.google.com/?q=Janardhanaswamy+Temple+Varkala"
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
                style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              >
                <span>Navigate on Google Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Transportation Guide */}
          <div>
            <h3 style={{ fontSize: '1.5rem', color: '#26070B', marginBottom: '20px' }}>
              Travel Connectivity
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {transportGuides.map((guide, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedMode(idx)}
                  className="temple-card"
                  style={{
                    padding: '20px',
                    cursor: 'pointer',
                    borderColor: selectedMode === idx ? '#D4AF37' : 'rgba(212, 175, 55, 0.2)',
                    background: selectedMode === idx ? '#FFFDF9' : '#FFFFFF',
                    transform: selectedMode === idx ? 'translateX(6px)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '1.4rem' }}>{guide.icon}</span>
                      <div>
                        <h4 style={{ fontSize: '1.08rem', color: '#26070B', margin: 0 }}>{guide.mode}</h4>
                        <span style={{ fontSize: '0.82rem', color: '#B8860B', fontWeight: '600' }}>{guide.hub}</span>
                      </div>
                    </div>
                    <span className="badge-gold" style={{ fontSize: '0.78rem' }}>{guide.dist}</span>
                  </div>

                  <p style={{ color: '#574D50', fontSize: '0.88rem', margin: 0, lineHeight: 1.55 }}>
                    {guide.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
