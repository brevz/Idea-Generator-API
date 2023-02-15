const express = require('express')

const router = express.Router()

const Workout = require('../models/workout')

router.get('/workouts', (req, res, next) => {
  Workout.find({})
  .then((workouts) => {
    return workouts.map((workout) => workout.toObject())
  })
  .then((workouts) => res.status(200).json({ workouts: workouts }))
  .catch(next)
})

router.get('/workouts/:id', (req, res, next) => {
  Workout.findById(req.params.id)
  .then((workout) => res.status(200).json({ workout: workout.toObject() }))
  .catch(next)
})

router.post('/workouts', (req, res, next) => {
  // Uncomment this when I have users set up
  // req.body.workout.owner = req.user.id
  Workout.create(req.body.workout)
  .then((workout) => res.status(201).json({ workout: workout.toObject() }))
  .catch(next)
})

module.exports = router