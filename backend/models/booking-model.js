const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    enum: ['Fönstertvätt', 'Basic Städning', 'Topp Städning', 'Topp Städning'],
    default: 'Fönstertvätt',
    required: true,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
