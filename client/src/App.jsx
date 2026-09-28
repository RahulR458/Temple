import React, { useState, useEffect } from 'react';
import { templeInfo } from './data/templeInfo';
import ModernHeader from './components/ModernHeader';
import ModernHero from './components/ModernHero';
import DarshanTimingsSimple from './components/DarshanTimingsSimple';
import AboutSection from './components/AboutSection';
import OfferingsSimple from './components/OfferingsSimple';
import LocationSimple from './components/LocationSimple';
import QuickConnectSimple from './components/QuickConnectSimple';
import ModernFooter from './components/ModernFooter';

export default function App() {
  // Compute live open/closed status client-side based on IST time
  const [liveStatus, setLiveStatus] = useState({
    isOpen: false,
    currentPhase: 'Sanctum Closed',
  });

  useEffect(() => {
    const computeStatus = () => {
      const now = new Date();
      // IST is UTC + 5:30
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + 3600000 * 5.5);
      const minutes = istDate.getHours() * 60 + istDate.getMinutes();

      // Morning: 05:30 (330 min) to 09:30 (570 min)
      // Evening: 17:00 (1020 min) to 19:45 (1185 min)
      const isMorning = minutes >= 330 && minutes < 570;
      const isEvening = minutes >= 1020 && minutes < 1185;
      const isOpen = isMorning || isEvening;

      let currentPhase = 'Sanctum Closed (Repose)';
      if (isMorning) {
        currentPhase = 'Open for Morning Darshan';
      } else if (isEvening) {
        currentPhase = 'Open for Evening Darshan';
      } else if (minutes < 330) {
        currentPhase = 'Opens at 05:30 AM (Nirmalyam)';
      } else if (minutes >= 570 && minutes < 1020) {
        currentPhase = 'Afternoon Repose • Reopens at 05:00 PM';
      } else {
        currentPhase = 'Sanctum Closed for the Night';
      }

      setLiveStatus({ isOpen, currentPhase });
    };

    computeStatus();
    const interval = setInterval(computeStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="temple-app">
      {/* Modern Floating Header with glassmorphism */}
      <ModernHeader
        liveStatus={liveStatus}
        contact={templeInfo.contact}
      />

      <main>
        {/* Modern Hero with quick highlight badges */}
        <ModernHero
          info={templeInfo}
          liveStatus={liveStatus}
        />

        {/* Clear Darshan Timings & Daily Schedule */}
        <DarshanTimingsSimple
          timings={templeInfo.timings}
          liveStatus={liveStatus}
          dressCode={templeInfo.dressCode}
        />

        {/* About the Small Temple & Deities */}
        <AboutSection
          about={templeInfo.about}
          deities={templeInfo.deities}
        />

        {/* Daily Offerings & Vazhipadu */}
        <OfferingsSimple
          offerings={templeInfo.offerings}
          contact={templeInfo.contact}
        />

        {/* Location & Directions */}
        <LocationSimple
          location={templeInfo.location}
          contact={templeInfo.contact}
        />

        {/* Quick Connect & Direct Contact Desk */}
        <QuickConnectSimple
          contact={templeInfo.contact}
        />
      </main>

      {/* Modern Clean Footer */}
      <ModernFooter
        info={templeInfo}
      />
    </div>
  );
}
