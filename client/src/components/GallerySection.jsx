import React, { useState } from 'react';

const galleryImages = [
  {
    src: '/images/hero.jpg',
    title: 'Twilight Gopuram & Coastal Sanctuary',
    desc: 'Majestic view of the centuries-old Kerala tiled sanctum perched on the coastal cliffs.',
  },
  {
    src: '/images/darshan-deepam.jpg',
    title: 'Sanctum Sanctorum & Nilavilakku Lamps',
    desc: 'Golden idol of Lord Janardhana adorned with sacred garlands during Deeparadhana.',
  },
  {
    src: '/images/papanasam-beach.jpg',
    title: 'Papanasam Beach Holy Snanam',
    desc: 'Early morning sea bath and ancestral Pithru Tharpanam along the scenic red cliffs.',
  },
  {
    src: '/images/architecture.jpg',
    title: 'Historic Courtyard & Dutch Bell',
    desc: 'Carved wooden pillars, stone Chuttambalam, and the 1757 Dutch bronze bell relic.',
  },
];

export default function GallerySection() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="section" style={{ background: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <span>📷</span>
            <span>Sacred Visuals</span>
          </div>
          <h2 className="section-title">Temple Darshan Gallery</h2>
          <p className="section-desc">
            Glimpses of sacred heritage, illuminated brass lamps, and the breathtaking coastal vistas of Varkala.
          </p>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(item)}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                aspectRatio: '4 / 3',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(38, 7, 11, 0.1)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
              }}
              className="gallery-item"
            >
              <img
                src={item.src}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                className="gallery-img"
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(38, 7, 11, 0.85) 0%, rgba(38, 7, 11, 0.2) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px',
                  color: '#FFFFFF',
                }}
              >
                <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', margin: '0 0 4px 0' }}>{item.title}</h4>
                <p style={{ fontSize: '0.82rem', color: '#F3E5AB', margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImg && (
          <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '850px', background: 'transparent', border: 'none', boxShadow: 'none', textAlign: 'center' }}
            >
              <button
                onClick={() => setSelectedImg(null)}
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '0px',
                  background: 'rgba(255,255,255,0.2)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
              <img
                src={selectedImg.src}
                alt={selectedImg.title}
                style={{
                  width: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  border: '2px solid #D4AF37',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                }}
              />
              <div style={{ marginTop: '16px', color: '#FFFFFF' }}>
                <h3 style={{ color: '#FDE047', fontSize: '1.35rem' }}>{selectedImg.title}</h3>
                <p style={{ color: '#EAE1CF', fontSize: '0.95rem' }}>{selectedImg.desc}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .gallery-item:hover .gallery-img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
