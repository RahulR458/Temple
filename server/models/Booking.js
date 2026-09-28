import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    bookingReference: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    devoteeName: {
      type: String,
      required: [true, 'Devotee name is required'],
      trim: true,
    },
    nakshatra: {
      type: String,
      required: [true, 'Birth star (Nakshatra) is required'],
      trim: true,
    },
    gotra: {
      type: String,
      default: 'Kashyapa / Not Specified',
      trim: true,
    },
    poojaId: {
      type: String,
      required: true,
    },
    poojaName: {
      type: String,
      required: true,
    },
    dateOfPooja: {
      type: Date,
      required: [true, 'Pooja date is required'],
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
    prasadamDelivery: {
      type: Boolean,
      default: false,
    },
    postalAddress: {
      type: String,
      default: '',
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['Confirmed', 'Pending Online Devotee Counter', 'Completed'],
      default: 'Confirmed',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Booking', bookingSchema);
