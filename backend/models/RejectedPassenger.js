// models/RejectedPassenger.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RejectedPassengerSchema = new Schema({
  passengerId: { type: String, required: true, unique: true },
  type: { type: String, enum: ['student', 'staff'], required: true },
  basicDetails: {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    address: { type: String, required: true },
    emergencyContact: {
      name: { type: String, required: true },
      relationship: { type: String, required: true },
      phone: { type: String, required: true },
    },
  },
  studentDetails: {
    rollNo: { type: String, default: null },
    regNo: { type: String, default: null },
    instituteName: { type: String, default: null },
    department: { type: String, default: null },
    year: { type: String, default: null },
    section: { type: String, default: null },
  },
  staffDetails: {
    staffId: { type: String, default: null },
    instituteName: { type: String, default: null },
    department: { type: String, default: null },
    designation: { type: String, default: null },
  },
  locationDetails: {
    district: { type: String, required: true },
    city: { type: String, required: true },
    stopName: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('RejectedPassenger', RejectedPassengerSchema);