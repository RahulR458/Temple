# Varkala Sree Kshethram — Modern Static Temple Website (No Database Required)

A modern, fast, and serene static website for a traditional local temple in **Varkala, Kerala**. Built purely on the frontend (React + Vite + Vanilla CSS) with **zero database or backend dependencies**, making it lightweight, easily editable, and deployable anywhere (Vercel, Netlify, GitHub Pages, or any web hosting).

---

## ✨ Highlights & Features

1. **Modern Floating Pill Header**
   - Sleek floating island navbar with frosted glassmorphism (`backdrop-filter: blur(20px)`).
   - Live **Sanctum Status micro-pill** ("🟢 Nada Open" / "🔴 Closed") automatically computed in real-time according to IST time.
   - Minimalist glowing Diya emblem and smooth pill link hover states.
   - Responsive floating mobile drawer sheet with quick contact buttons.

2. **Tailored for Small & General Temples in Varkala**
   - Clean, cozy, and serene aesthetic focused on the authentic spiritual atmosphere of traditional Kerala village temples.
   - Highlights deities (Lord Dharma Sastha, Bhadrakali Devi, Ganapathi, Nagaraja), daily oil lamps, and sacred quietude.

3. **Darshan Timings**
   - Clear, simple cards for **Morning Darshan** (`05:30 AM – 09:30 AM`) and **Evening Darshan** (`05:00 PM – 07:45 PM`).
   - Daily ritual milestones: *Palli Unarthal & Nirmalyam*, *Usha Pooja*, *Deeparadhana (06:30 PM)*, and *Athazha Pooja*.
   - Special days notice (Tuesdays, Fridays, Muppattu Chovva) and traditional Kerala temple dress code guide.

4. **Daily Offerings & Vazhipadu**
   - List of traditional modest offerings (*Pushpanjali*, *Neyvilakku / Ghee Lamp*, *Bhagya Sooktham*, *Ganapathi Homam*, *Paal Payasam*, *Thrimadhuram*) with transparent pricing (₹30 to ₹250).
   - Direct click-to-request feature that opens WhatsApp with a pre-filled, formatted message with Devotee Name, Nakshatra, and Pooja Date.

5. **Temple Location & Nearby Hubs**
   - Interactive embedded Google Map.
   - Clear address in Varkala, Kerala.
   - Quick distance markers to Varkala Cliff (1.5 km), Papanasam Beach (800m), and Varkala Sivagiri Railway Station (2.8 km).

6. **Quick Connect Desk**
   - Direct click-to-call buttons for the Temple Head Priest (*Melsanthi*) and Temple Secretary / Committee.
   - Direct WhatsApp instant chat button.
   - Quick inquiry form that sends formatted queries straight to WhatsApp.

7. **100% Static & Easy to Customize**
   - All temple information, timings, offerings, and phone numbers are located in a single, simple configuration file:
     **`client/src/data/templeInfo.js`**
   - You can change temple names, contact numbers, or timings in seconds!

---

## 🚀 How to Run Locally

### Start Development Server:
```bash
npm run dev
# Or: cd client && npm run dev
```
Open **`http://localhost:3000`** in your browser.

### Build Production Static Files:
```bash
npm run build
# Or: cd client && npm run build
```
Creates static HTML, CSS, and JS in `client/dist/`, ready to upload to any static hosting service.
