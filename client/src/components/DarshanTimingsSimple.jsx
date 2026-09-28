import React from 'react';

export default function DarshanTimingsSimple({ timings, liveStatus, dressCode }) {
  return (
    <section id="timings" className="section" style={{ background: '#FAF7F0' }}>
      <div className="container" style={{ maxWidth: '1040px' }}>
        {/* Section Title */}
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <span>⏰</span>
            <span>Sanctum Schedule</span>
          </div>
          <h2 className="section-title">Darshan Timings</h2>
          <p className="section-desc">
            The sanctum sanctorum opens daily in the morning and evening for prayers, oil lamp illumination, and sacred pushpanjali.
          </p>

          {/* Real-time Status Banner */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: liveStatus?.isOpen ? '#E8F5E9' : '#FCE8EA',
            border: `1.5px solid ${liveStatus?.isOpen ? '#81C784' : '#E57373'}`,
            padding: '8px 20px',
            borderRadius: '9999px',
            marginTop: '16px',
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: liveStatus?.isOpen ? '#2E7D32' : '#C62828',
              boxShadow: liveStatus?.isOpen ? '0 0 8px #4CAF50' : 'none',
            }} />
            <span style={{ fontWeight: '700', color: liveStatus?.isOpen ? '#1B5E20' : '#B71C1C', fontSize: '0.9rem' }}>
              {liveStatus?.isOpen ? 'SANCTUM CURRENTLY OPEN' : 'SANCTUM CURRENTLY CLOSED'}
            </span>
            <span style={{ color: '#574D50', fontSize: '0.82rem' }}>
              • {liveStatus?.currentPhase}
            </span>
          </div>
        </div>

        {/* 2-Column Schedule Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          {/* Morning Schedule */}
          <div className="temple-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #ECE7DE', paddingBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.6rem' }}>🌅</span>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#26070B', margin: 0 }}>Morning Darshan</h3>
                  <span style={{ fontSize: '0.78rem', color: '#B8860B', fontWeight: '600' }}>Prabhatha Pooja</span>
                </div>
              </div>
              <span className="badge-gold" style={{ fontSize: '0.85rem' }}>{timings.morning.time}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {timings.morning.schedule.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{
                    minWidth: '72px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: '#8C6507',
                    background: '#FDF8EA',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    textAlign: 'center',
                  }}>
                    {item.time}
                  </span>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', color: '#21191B', margin: '0 0 2px 0' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: '#574D50', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Evening Schedule */}
          <div className="temple-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #ECE7DE', paddingBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.6rem' }}>🌆</span>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#26070B', margin: 0 }}>Evening Darshan</h3>
                  <span style={{ fontSize: '0.78rem', color: '#B8860B', fontWeight: '600' }}>Sayanthana Pooja</span>
                </div>
              </div>
              <span className="badge-gold" style={{ fontSize: '0.85rem' }}>{timings.evening.time}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {timings.evening.schedule.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{
                    minWidth: '72px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: '#8C6507',
                    background: '#FDF8EA',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    textAlign: 'center',
                  }}>
                    {item.time}
                  </span>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', color: '#21191B', margin: '0 0 2px 0' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: '#574D50', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Days & Dress Code Banner */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          padding: '24px 28px',
          boxShadow: 'var(--shadow-sm)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          <div>
            <h4 style={{ color: '#8C6507', fontSize: '1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>✨</span>
              <span>Special Days & Poojas</span>
            </h4>
            <p style={{ color: '#574D50', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
              {timings.specialNote}
            </p>
          </div>

          <div>
            <h4 style={{ color: '#3E0C13', fontSize: '1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🥻</span>
              <span>Devotee Dress Code</span>
            </h4>
            <p style={{ color: '#574D50', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>
              <strong>Men:</strong> {dressCode.men}<br />
              <strong>Women:</strong> {dressCode.women}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
