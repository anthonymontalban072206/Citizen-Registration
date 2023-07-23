import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import citizenRoute from "./02-Routes/citizen-routes.js"
import adminRoute from "./02-Routes/admin-routes.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 4001

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(() => {
   console.log('Connected to server.')
   app.use('/api', citizenRoute)
   app.use('/api', adminRoute)
   app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
   })
}).catch((error) => {
   console.log('Error connecting to server' || error)
})