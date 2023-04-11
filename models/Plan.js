const mongoose = require('mongoose');

const planSchema = mongoose.Schema({
  name: {
    type: String, required: true,
  },
  // description: {
  //   type: String, required: true,
  // },
  // location: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Location', required: true,
  // },
  startDate: {
    type: Date, required: true,
  },
  endDate: {
    type: Date, required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan
