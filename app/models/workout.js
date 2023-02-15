const mongoose = require('mongoose')

const setSchema = new mongoose.Schema({
  exercise: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    default: 0
  },
  weight: {
    type: Number,
    default: 0
  },
  note: {
    type: String
  }
})

const workoutSchema = new mongoose.Schema({
  exercises: [setSchema],
  date: {
    type: Date,
    required: true
  }
  // I will need to add an owner to this, once I get user stuff set up
}, {
  timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema)