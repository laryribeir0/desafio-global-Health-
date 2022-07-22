const mongoose = require('mongoose');

const model = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  healthInsuranceCardId: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
}, {
  versionKey: false,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: false,
  },
});

const patient = mongoose.model('patients', model);

module.exports = patient;