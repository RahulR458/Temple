import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Devotee name is required'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      enum: [
        'Darshan Timings Enquiry',
        'Pooja / Vazhipadu Booking',
        'Annadanam Contribution',
        'Guest House / Accommodation',
        'Pithru Tharpanam Rituals',
        'General Temple Information',
        'Special Seva / Sponsorship',
      ],
      default: 'General Temple Information',
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['New', 'In Progress', 'Responded'],
      default: 'New',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Enquiry', enquirySchema);
