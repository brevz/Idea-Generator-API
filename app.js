const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const testRoutes = require('./app/routes/test_routes')
const workoutRoutes = require('./app/routes/workout_routes')


const currentDb = require('./dbConfig.js')

mongoose.connect(currentDb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()
const port = 8080

app.use(cors({
  origin: `http://localhost:3000`
}))

// parse JSON requests, put them on req.body
app.use(express.json())


app.use(testRoutes)
app.use(workoutRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})