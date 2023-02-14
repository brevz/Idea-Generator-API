const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number
  },
  weight: {
    type: Number
  }
})

const workoutSchema = new mongoose.Schema({
  exercises: [exerciseSchema],
  date: {
    type: Date,
    required: true
  }
  // I will need to add an owner to this, once I get user stuff set up
}, {
  timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema)