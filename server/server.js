import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { templeData } from './data/templeData.js';
import Enquiry from './models/Enquiry.js';
import Booking from './models/Booking.js';

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/varkala_temple';

app.use(cors());
app.use(express.json());

// In-memory fallbacks to guarantee uninterrupted service
const memoryEnquiries = [];
const memoryBookings = [];
let isMongoConnected = false;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { serverSelectionTimeoutMS: 4000 })
  .then(() => {
    isMongoConnected = true;
    console.log('✅ Connected to MongoDB at', MONGODB_URI);
  })
  .catch((err) => {
    isMongoConnected = false;
    console.warn('⚠️ MongoDB connection warning (Falling back to in-memory persistence):', err.message);
  });

mongoose.connection.on('connected', () => {
  isMongoConnected = true;
});
mongoose.connection.on('disconnected', () => {
  isMongoConnected = false;
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    temple: 'Sree Janardhana Swamy Temple, Varkala',
    mongoConnected: isMongoConnected,
    timestamp: new Date().toISOString(),
  });
});

// Temple general info & metadata
app.get('/api/temple-info', (req, res) => {
  res.json(templeData);
});

// Darshan Timings & daily schedule
app.get('/api/timings', (req, res) => {
  // Compute live open/closed status based on current IST time
  const now = new Date();
  // IST is UTC+5:30
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utc + 3600000 * 5.5);
  const currentMinutes = istTime.getHours() * 60 + istTime.getMinutes();

  // Morning: 03:30 (210 min) to 12:00 (720 min)
  // Evening: 17:00 (1020 min) to 20:00 (1200 min)
  const isMorningOpen = currentMinutes >= 210 && currentMinutes < 720;
  const isEveningOpen = currentMinutes >= 1020 && currentMinutes < 1200;
  const isOpenNow = isMorningOpen || isEveningOpen;

  let currentPhase = 'Nada Closed';
  let nextEvent = 'Morning Nirmalya Darshanam at 03:30 AM';

  if (isMorningOpen) {
    currentPhase = 'Open for Morning Darshan';
    if (currentMinutes < 330) nextEvent = 'Usha Pooja at 05:30 AM';
    else if (currentMinutes < 510) nextEvent = 'Pantheeradi Pooja at 08:30 AM';
    else if (currentMinutes < 690) nextEvent = 'Ucha Pooja at 11:30 AM';
    else nextEvent = 'Nada Closes at 12:00 PM';
  } else if (isEveningOpen) {
    currentPhase = 'Open for Evening Darshan';
    if (currentMinutes < 1110) nextEvent = 'Maha Deeparadhana at 06:30 PM';
    else if (currentMinutes < 1170) nextEvent = 'Athazha Pooja at 07:30 PM';
    else nextEvent = 'Sanctum Closes at 08:00 PM';
  } else if (currentMinutes >= 720 && currentMinutes < 1020) {
    currentPhase = 'Afternoon Repose (Nada Closed)';
    nextEvent = 'Evening Nada Opens at 05:00 PM';
  }

  res.json({
    darshanTimings: templeData.darshanTimings,
    liveStatus: {
      isOpenNow,
      currentPhase,
      nextEvent,
      currentTimeIST: istTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }),
    },
  });
});

// Offerings / Vazhipadu list
app.get('/api/offerings', (req, res) => {
  res.json(templeData.offerings);
});

// Announcements & Festivals
app.get('/api/announcements', (req, res) => {
  res.json(templeData.announcements);
});

// Location & How to Reach details
app.get('/api/location', (req, res) => {
  res.json(templeData.location);
});

// Quick Connect: Devotee enquiry submission
app.post('/api/connect', async (req, res) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide Devotee Name, Phone Number, and Message.',
      });
    }

    let savedEnquiry = null;

    if (isMongoConnected) {
      const enquiry = new Enquiry({
        name,
        phone,
        email: email || '',
        subject: subject || 'General Temple Information',
        message,
      });
      savedEnquiry = await enquiry.save();
    } else {
      savedEnquiry = {
        _id: 'mem_' + Date.now(),
        name,
        phone,
        email: email || '',
        subject: subject || 'General Temple Information',
        message,
        createdAt: new Date().toISOString(),
      };
      memoryEnquiries.unshift(savedEnquiry);
    }

    res.status(201).json({
      success: true,
      message: 'Hare Janardhana! Your enquiry has been received by the Temple Devaswom Office. Our priests / office staff will reach out to you shortly.',
      enquiryId: savedEnquiry._id,
      data: savedEnquiry,
    });
  } catch (error) {
    console.error('Error in /api/connect:', error);
    res.status(500).json({
      success: false,
      error: 'Unable to submit enquiry at this time. Please call the Temple Office directly at 0470 2607575.',
    });
  }
});

// Get recent enquiries (Devaswom counter / admin log)
app.get('/api/connect', async (req, res) => {
  try {
    if (isMongoConnected) {
      const enquiries = await Enquiry.find().sort({ createdAt: -1 }).limit(20);
      return res.json({ success: true, count: enquiries.length, data: enquiries });
    }
    res.json({ success: true, count: memoryEnquiries.length, data: memoryEnquiries });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Online Pooja / Vazhipadu Booking submission
app.post('/api/bookings', async (req, res) => {
  try {
    const { devoteeName, nakshatra, gotra, poojaId, poojaName, dateOfPooja, phone, email, prasadamDelivery, postalAddress, amount } = req.body;

    if (!devoteeName || !nakshatra || !poojaName || !dateOfPooja || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in Devotee Name, Nakshatra (Star), Pooja Type, Date, and Phone Number.',
      });
    }

    // Generate distinctive booking reference (e.g. VKL-829104)
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    const bookingReference = `VKL-${randomCode}`;

    let savedBooking = null;

    if (isMongoConnected) {
      const booking = new Booking({
        bookingReference,
        devoteeName,
        nakshatra,
        gotra: gotra || 'Not Specified',
        poojaId: poojaId || 'custom-pooja',
        poojaName,
        dateOfPooja: new Date(dateOfPooja),
        phone,
        email: email || '',
        prasadamDelivery: Boolean(prasadamDelivery),
        postalAddress: postalAddress || '',
        amount: Number(amount) || 150,
        paymentStatus: 'Confirmed',
      });
      savedBooking = await booking.save();
    } else {
      savedBooking = {
        _id: 'mem_book_' + Date.now(),
        bookingReference,
        devoteeName,
        nakshatra,
        gotra: gotra || 'Not Specified',
        poojaId: poojaId || 'custom-pooja',
        poojaName,
        dateOfPooja,
        phone,
        email: email || '',
        prasadamDelivery: Boolean(prasadamDelivery),
        postalAddress: postalAddress || '',
        amount: Number(amount) || 150,
        paymentStatus: 'Confirmed',
        createdAt: new Date().toISOString(),
      };
      memoryBookings.unshift(savedBooking);
    }

    res.status(201).json({
      success: true,
      message: 'Vazhipadu consecrated successfully! Your booking receipt has been recorded.',
      bookingReference,
      booking: savedBooking,
    });
  } catch (error) {
    console.error('Error in /api/bookings:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to record pooja booking. Please try again or visit temple counter.',
    });
  }
});

// Get bookings / verify by reference or phone
app.get('/api/bookings', async (req, res) => {
  try {
    const { ref, phone } = req.query;

    if (isMongoConnected) {
      const query = {};
      if (ref) query.bookingReference = ref.toUpperCase();
      if (phone) query.phone = phone;

      const bookings = await Booking.find(query).sort({ createdAt: -1 }).limit(25);
      return res.json({ success: true, count: bookings.length, data: bookings });
    }

    let filtered = memoryBookings;
    if (ref) {
      filtered = filtered.filter((b) => b.bookingReference.toLowerCase() === ref.toLowerCase());
    }
    if (phone) {
      filtered = filtered.filter((b) => b.phone.includes(phone));
    }
    res.json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🛕 Temple Express Server running on http://localhost:${PORT}`);
});
