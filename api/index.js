const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const Query = require('../app/models/query.js')

const currentDb = require('../dbConfig.js')

mongoose.connect(currentDb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()
const port = 8080

app.use(cors({
  origin: "*"
}))

// parse JSON requests, put them on req.body
app.use(express.json())

// POST
// Create query
app.post('/query', (req, res, next) => {
  Query.create(req.body.query)
  .then((query) => res.status(201).json({ query: query.toObject() }))
  .catch(next)
})

// GET
// Retrieve queries
app.get('/query', (req, res, next) => {
  Query.find({})
  .then((queries) => {
    return queries.map((query) => query.toObject())
  })
  .then((queries) => res.status(200).json({ queries: queries }))
  .catch(next)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

module.exports = app