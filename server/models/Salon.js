const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  salonName: { type: String, required: true },
  location: { type: String, required: true },
  services: [{ type: String }], // যেমন: ["Haircut", "Shave"]
  price: { type: Number, required: true },
  timing: { type: String, default: "10:00 AM - 08:00 PM" },
  rating: { type: Number, default: 0 },
  description: { type: String },
  images: [{ type: String }] // সেলুনের ছবির URL
});

module.exports = mongoose.model('Salon', salonSchema);