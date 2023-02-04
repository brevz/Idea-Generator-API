import express from 'express'
import cors from 'cors'

import { userRoutes } from './app/routes/user_routes.js'

const app = express()
const port = 8080

app.use(cors({
  origin: `http://localhost:3000`
}))

app.use(userRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})