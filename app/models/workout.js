const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
  exercises: [exerciseSchema]
}, {
  timestamps: true
})

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

module.exports = mongoose.model('Workout', workoutSchema)