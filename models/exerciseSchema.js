const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  exerciseName: {
    type: String,
    required: true,
  },
  primeMover: {
    type: String
  },
  agonists: {
    type: [String],
  },
  synergists: {
    type: [String],
  },
  antagonists: {
    type: [String],
  },
  tempo: {
    type: [Number],
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Exercise", exerciseSchema);
