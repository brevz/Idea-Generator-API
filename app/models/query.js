const mongoose = require('mongoose')

const querySchema = new mongoose.Schema({
  age: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    required: true
  },
  interests: {
    type: [String],
    required: true
  }
})

module.exports = mongoose.model('Query', querySchema)