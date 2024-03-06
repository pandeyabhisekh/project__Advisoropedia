/* eslint-disable no-undef */
// models/User.js
// eslint-disable-next-line no-undef
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);
