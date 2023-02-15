const mongoose = require('mongoose')

const currentDb = require('./dbConfig.js')

const Workout = require('./app/models/workout.js')
const Exercise = require('./app/models/exercise.js')

mongoose.connect(currentDb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connection successful'))
.catch(() => console.log('Error: Connection unsucessful'))

const clearDb = async () => {
  await Workout.deleteMany({})
  await Exercise.deleteMany({})
}

clearDb()
.then(() => mongoose.connection.close())
.then(() => console.log('Finished'))
.catch((error) => console.log(error))