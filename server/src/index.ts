import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

// IMPORT ROUTES

// CONFIGURATIONS
dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(cors())

// ROUTES
app.get("/hello", (req, res) => {
  res.send("Hello World")
})

// SERVER
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
