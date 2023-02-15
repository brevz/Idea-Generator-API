const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  note: {
    type: String
  }
})

module.exports = mongoose.model('Exercise', exerciseSchema)