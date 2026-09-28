export const templeInfo = {
  name: "Varkala Sree Kshethram",
  subName: "Sree Dharma Sastha & Bhadrakali Temple",
  malayalamName: "വർക്കല ശ്രീ ധർമ്മശാസ്താ ഭദ്രകാളി ക്ഷേത്രം",
  tagline: "A peaceful coastal village shrine nestled amidst lush palms in Varkala",
  deities: ["Lord Dharma Sastha", "Bhadrakali Devi", "Lord Ganapathi", "Nagaraja"],
  
  about: {
    lead: "A traditional Kerala village temple offering peaceful solace and spiritual harmony to devotees and visitors in Varkala.",
    paragraphs: [
      "Situated in a tranquil coastal neighborhood of Varkala, this revered local shrine is maintained with warm devotion by the local community. Surrounded by sacred trees and traditional oil-lit courtyards, the temple preserves the authentic sanctity of ancient Kerala temple rituals.",
      "The temple is revered for the divine grace of Lord Dharma Sastha and Bhadrakali Devi, along with shrines for Vigneshwara and Naga deities. Devotees visit for peaceful morning meditation, daily oil lamp offerings, and personal blessings for family health and prosperity.",
    ],
  },

  timings: {
    morning: {
      time: "05:30 AM – 09:30 AM",
      label: "Morning Darshan",
      schedule: [
        { time: "05:30 AM", title: "Palli Unarthal & Nirmalyam", desc: "First sacred glimpse of the deity after opening" },
        { time: "06:30 AM", title: "Usha Pooja & Abhishekam", desc: "Morning holy bath and naivedyam" },
        { time: "08:45 AM", title: "Pantheeradi / Ucha Pooja", desc: "Noon offering and floral pushpanjali" },
        { time: "09:30 AM", title: "Nada Adappu", desc: "Morning sanctum closure" },
      ],
    },
    evening: {
      time: "05:00 PM – 07:45 PM",
      label: "Evening Darshan",
      schedule: [
        { time: "05:00 PM", title: "Nada Thurakkal", desc: "Sanctum doors reopen for evening prayer" },
        { time: "06:30 PM", title: "Deeparadhana", desc: "Evening lighting of brass oil lamps and aarti" },
        { time: "07:15 PM", title: "Athazha Pooja", desc: "Night offering before repose" },
        { time: "07:45 PM", title: "Nada Adappu", desc: "Sanctum closure for the night" },
      ],
    },
    specialNote: "On Tuesdays, Fridays, and first of every Malayalam month (Muppattu Chovva/Velli), the sanctum remains open with special floral decorations and deeparadhana.",
  },

  dressCode: {
    men: "Traditional Mundu (Dhoti). Upper shirts should be removed before entering the inner courtyard (Chuttambalam).",
    women: "Saree, Set-Mundu, Salwar Kameez, or traditional modest attire.",
    note: "Please deposit footwear outside and maintain silence in the courtyard.",
  },

  offerings: [
    {
      id: "off-1",
      name: "Pushpanjali",
      malayalam: "പുഷ്പാഞ്ജലി",
      price: 30,
      desc: "Sacred floral offering with holy chanting for health and obstacle removal.",
    },
    {
      id: "off-2",
      name: "Neyvilakku (Ghee Lamp)",
      malayalam: "നെയ്‌വിളക്ക്",
      price: 50,
      desc: "Lighting pure cow ghee lamp in front of the sanctum for clarity and peace.",
    },
    {
      id: "off-3",
      name: "Bhagya Sooktha Pushpanjali",
      malayalam: "ഭാഗ്യസൂക്ത പുഷ്പാഞ്ജലി",
      price: 60,
      desc: "Chanting of Bhagya Sooktham for prosperity and auspicious beginnings.",
    },
    {
      id: "off-4",
      name: "Ganapathi Homam",
      malayalam: "ഗണപതി ഹോമം",
      price: 250,
      desc: "Early morning sacred fire ritual to remove all obstacles from family and career.",
    },
    {
      id: "off-5",
      name: "Paal Payasam",
      malayalam: "പാൽപായസം",
      price: 100,
      desc: "Sweet milk porridge prasadam offering dedicated to the deities.",
    },
    {
      id: "off-6",
      name: "Thrimadhuram Offering",
      malayalam: "ത്രിമധുരം",
      price: 40,
      desc: "Sweet offering made of honey, banana, and sugar candy.",
    },
  ],

  contact: {
    phonePrimary: "+91 94473 12890",
    phoneSecondary: "+91 98470 12345",
    whatsapp: "919447312890",
    priestName: "Sreejith Namboothiri (Melsanthi)",
    secretaryName: "S. Radhakrishnan (Temple Committee)",
    email: "contact@varkalakshethram.org",
    address: {
      temple: "Varkala Sree Kshethram",
      locality: "Temple Junction, Near Papanasam Beach Road",
      city: "Varkala",
      district: "Thiruvananthapuram",
      state: "Kerala",
      pinCode: "695141",
    },
  },

  location: {
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3857319985925!2d76.71183357597148!3d8.730833291319223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05efa61eaebce5%3A0xe9f75ec30e008aa2!2sJanardhanaswamy%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Varkala+Temple+Kerala",
    nearbyLandmarks: [
      { name: "Varkala Cliff / North Cliff", distance: "1.5 km (5 mins)" },
      { name: "Papanasam Beach", distance: "800 meters (2 mins)" },
      { name: "Varkala Sivagiri Railway Station", distance: "2.8 km (7 mins)" },
      { name: "Varkala KSRTC Bus Stand", distance: "2.2 km (5 mins)" },
    ],
  },
};
