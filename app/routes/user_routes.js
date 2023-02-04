import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json('Routes are working')
})

export { router as userRoutes }