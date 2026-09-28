import React, { useState } from 'react';

export default function DarshanTimings({ timingsData }) {
  const [activeTab, setActiveTab] = useState('daily');
  const liveStatus = timingsData?.liveStatus;
  const morningEvents = timingsData?.darshanTimings?.morning?.events || [
    { time: "03:30 AM", name: "Palli Unarthal & Nirmalya Darshanam", desc: "First sacred glimpse of the day" },
    { time: "04:30 AM", name: "Abhishekam & Alankaram", desc: "Holy bath with panchamrutham and floral adornment" },
    { time: "05:30 AM", name: "Usha Pooja", desc: "Morning consecration with naivedyam" },
    { time: "08:30 AM", name: "Pantheeradi Pooja", desc: "Mid-morning pooja ritual" },
    { time: "11:30 AM", name: "Ucha Pooja", desc: "Main noon pooja with special offering" },
    { time: "12:00 PM", name: "Nada Adappu", desc: "Temple doors close for afternoon repose" },
  ];

  const eveningEvents = timingsData?.darshanTimings?.evening?.events || [
    { time: "05:00 PM", name: "Nada Thurakkal", desc: "Doors reopen for evening worship" },
    { time: "06:30 PM", name: "Maha Deeparadhana", desc: "Lamps glowing, conch blowing, divine evening aarti" },
    { time: "07:30 PM", name: "Athazha Pooja", desc: "Night pooja before deity goes to rest" },
    { time: "08:00 PM", name: "Trippuka & Nada Adappu", desc: "Sacred frankincense offering and night closure" },
  ];

  return (
    <section id="darshan-timings" className="section" style={{ background: '#FAF7F0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-subtitle">
            <span>⏰</span>
            <span>Sacred Schedule</span>
          </div>
          <h2 className="section-title">Darshan & Pooja Timings</h2>
          <p className="section-desc">
            Experience the divine grace of Lord Janardhana Swamy throughout the day. Please plan your visit in accordance with the traditional sanctum hours.
          </p>

          {/* Live Status Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: liveStatus?.isOpenNow ? '#E8F5E9' : '#FCE8EA',
            border: `1.5px solid ${liveStatus?.isOpenNow ? '#81C784' : '#E57373'}`,
            padding: '10px 22px',
            borderRadius: '9999px',
            marginTop: '20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          }}>
            <span style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: liveStatus?.isOpenNow ? '#2E7D32' : '#C62828',
              boxShadow: `0 0 10px ${liveStatus?.isOpenNow ? '#4CAF50' : '#EF5350'}`,
            }}></span>
            <span style={{ fontWeight: '700', color: liveStatus?.isOpenNow ? '#1B5E20' : '#B71C1C', fontSize: '0.95rem' }}>
              {liveStatus?.isOpenNow ? 'TEMPLE NADA CURRENTLY OPEN' : 'TEMPLE NADA CURRENTLY CLOSED'}
            </span>
            <span style={{ color: '#574D50', fontSize: '0.88rem' }}>
              • {liveStatus?.currentPhase || 'Standard Hours'} ({liveStatus?.currentTimeIST || 'IST'})
            </span>
          </div>
        </div>

        {/* Tab Toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
          <button
            onClick={() => setActiveTab('daily')}
            className={`btn ${activeTab === 'daily' ? 'btn-maroon' : 'btn-outline-gold'}`}
            style={{ padding: '10px 24px', fontSize: '0.95rem' }}
          >
            <span>Daily Schedule</span>
          </button>
          <button
            onClick={() => setActiveTab('special')}
            className={`btn ${activeTab === 'special' ? 'btn-maroon' : 'btn-outline-gold'}`}
            style={{ padding: '10px 24px', fontSize: '0.95rem' }}
          >
            <span>Special Days & Snanam</span>
          </button>
          <button
            onClick={() => setActiveTab('dresscode')}
            className={`btn ${activeTab === 'dresscode' ? 'btn-maroon' : 'btn-outline-gold'}`}
            style={{ padding: '10px 24px', fontSize: '0.95rem' }}
          >
            <span>Dress Code & Customs</span>
          </button>
        </div>

        {/* Daily Schedule View */}
        {activeTab === 'daily' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {/* Morning Card */}
            <div className="temple-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid #ECE7DE', paddingBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.8rem' }}>🌅</span>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: '#26070B', margin: 0 }}>Morning Darshan</h3>
                    <span style={{ fontSize: '0.85rem', color: '#B8860B', fontWeight: '600' }}>Prabhatha Pooja Seva</span>
                  </div>
                </div>
                <span className="badge-gold" style={{ fontSize: '0.9rem', padding: '6px 14px' }}>03:30 AM – 12:00 PM</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {morningEvents.map((evt, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span style={{
                      minWidth: '78px',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      color: '#8C6507',
                      background: '#FDF8EA',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      textAlign: 'center',
                    }}>
                      {evt.time}
                    </span>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', color: '#21191B', margin: '0 0 3px 0' }}>{evt.name}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#574D50', margin: 0 }}>{evt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Evening Card */}
            <div className="temple-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid #ECE7DE', paddingBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.8rem' }}>🌆</span>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: '#26070B', margin: 0 }}>Evening Darshan</h3>
                    <span style={{ fontSize: '0.85rem', color: '#B8860B', fontWeight: '600' }}>Sayanthana Deeparadhana</span>
                  </div>
                </div>
                <span className="badge-gold" style={{ fontSize: '0.9rem', padding: '6px 14px' }}>05:00 PM – 08:00 PM</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {eveningEvents.map((evt, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span style={{
                      minWidth: '78px',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      color: '#8C6507',
                      background: '#FDF8EA',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      textAlign: 'center',
                    }}>
                      {evt.time}
                    </span>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', color: '#21191B', margin: '0 0 3px 0' }}>{evt.name}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#574D50', margin: 0 }}>{evt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '28px', background: '#FDF8EA', padding: '14px 18px', borderRadius: '12px', borderLeft: '4px solid #D4AF37' }}>
                <strong style={{ color: '#8C6507', fontSize: '0.9rem' }}>🪔 Maha Deeparadhana Note:</strong>
                <p style={{ color: '#5C4204', fontSize: '0.85rem', margin: '4px 0 0' }}>
                  At 06:30 PM, all interior stone corridors and multi-tiered brass Nilavilakku lamps are illuminated in traditional Kerala style.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Special Days Tab */}
        {activeTab === 'special' && (
          <div className="temple-card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#26070B' }}>
              Special Observances & Papanasam Sacred Rituals
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div style={{ background: '#FAF7F0', padding: '24px', borderRadius: '16px', border: '1px solid #ECE7DE' }}>
                <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: '8px' }}>🌑</span>
                <h4 style={{ fontSize: '1.15rem', color: '#3E0C13', marginBottom: '6px' }}>Amavasi Pithru Tharpanam</h4>
                <p style={{ fontSize: '0.9rem', color: '#574D50', lineHeight: 1.6 }}>
                  Every New Moon (Amavasi), thousands of devotees perform ancestral rites on Papanasam beach right below the cliff from <strong>04:30 AM</strong>, followed by holy bath (Snanam) and direct Nirmalya darshan of Lord Janardhana.
                </p>
              </div>

              <div style={{ background: '#FAF7F0', padding: '24px', borderRadius: '16px', border: '1px solid #ECE7DE' }}>
                <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: '8px' }}>✨</span>
                <h4 style={{ fontSize: '1.15rem', color: '#3E0C13', marginBottom: '6px' }}>Ekadashi & Thiruvonam Vrat</h4>
                <p style={{ fontSize: '0.9rem', color: '#574D50', lineHeight: 1.6 }}>
                  On Guruvayur/Vaikunta Ekadashi and monthly Thiruvonam stars, the temple sanctum doors remain open with extended hours, special Vishnu Sahasranama recitations, and continuous Tulsi pushpanjali.
                </p>
              </div>

              <div style={{ background: '#FAF7F0', padding: '24px', borderRadius: '16px', border: '1px solid #ECE7DE' }}>
                <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: '8px' }}>🐘</span>
                <h4 style={{ fontSize: '1.15rem', color: '#3E0C13', marginBottom: '6px' }}>10-Day Arattu Mahotsavam</h4>
                <p style={{ fontSize: '0.9rem', color: '#574D50', lineHeight: 1.6 }}>
                  Celebrated during Meenam (March-April), marked by flag hoisting (Kodiyettu), caparisoned elephant processions, traditional Panchavadyam, and the grand holy immersion of the deity into the Arabian Sea at Papanasam.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Dress Code Tab */}
        {activeTab === 'dresscode' && (
          <div className="temple-card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#26070B' }}>
              Temple Customs, Protocol & Dress Code
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '28px' }}>
              <div style={{ background: '#FFFDF9', border: '1.5px solid #EFE0A7', padding: '24px', borderRadius: '16px' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3E0C13', fontSize: '1.2rem', marginBottom: '12px' }}>
                  <span>🥻</span> For Men
                </h4>
                <ul style={{ color: '#574D50', fontSize: '0.95rem', paddingLeft: '20px', lineHeight: 1.8 }}>
                  <li>Traditional <strong>Mundu (Dhoti)</strong> or Veshti is required.</li>
                  <li>Upper garments (shirts, vests, coats) must be removed before entering the inner Chuttambalam courtyard as per centuries-old Kerala Tantric customs.</li>
                  <li>Angavastram / shoulder cloth may be draped across shoulders.</li>
                </ul>
              </div>

              <div style={{ background: '#FFFDF9', border: '1.5px solid #EFE0A7', padding: '24px', borderRadius: '16px' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3E0C13', fontSize: '1.2rem', marginBottom: '12px' }}>
                  <span>🌸</span> For Women & Children
                </h4>
                <ul style={{ color: '#574D50', fontSize: '0.95rem', paddingLeft: '20px', lineHeight: 1.8 }}>
                  <li>Saree, Set-Mundu (traditional Kerala attire), Pavada, or modest Salwar Kameez with Dupatta.</li>
                  <li>Western clothing like shorts, sleeveless tops, miniskirts, or ripped jeans are strictly disallowed.</li>
                  <li>Young girls may wear traditional skirts or dresses.</li>
                </ul>
              </div>
            </div>

            <div style={{ background: '#FCE8EA', padding: '16px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '1.5rem' }}>🚫</span>
              <p style={{ margin: 0, color: '#57111B', fontSize: '0.92rem' }}>
                <strong>Strict Rules:</strong> Mobile phones, cameras, smartwatches, and footwear are strictly forbidden inside the temple perimeter. Complimentary footwear storage is available at the temple entrance.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
