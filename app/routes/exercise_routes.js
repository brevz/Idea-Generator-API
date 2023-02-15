const express = require('express')

const router = express.Router()

const Exercise = require('../models/exercise.js')

router.get('/exercises', (req, res, next) => {
  Exercise.find({})
  .then((exercises) => {
    return exercises.map((exercise) => exercise.toObject())
  })
  .then((exercises) => res.sendStatus(200).json({ exercises: exercises }))
  .catch(next)
})

router.post('/exercises', (req, res, next) => {
  console.log(req.body.exercise)
  Exercise.create(req.body.exercise)
  .then((exercise) => res.status(201).json({ exercise: exercise.toObject() }))
  .catch(next)
})

module.exports = router