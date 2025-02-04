import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors" // Import cors
import taskRoutes from "./routes/taskRoutes.js"

dotenv.config()

const app = express()

app.use(cors()) // Use cors middleware
app.use(express.json())

app.use("/api/tasks", taskRoutes)

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err)
  })
