import express from "express"
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js"

const router = express.Router()

router.route("/").get(getAllTasks).post(createTask)

router.route("/:id").get(getTaskById).put(updateTask).delete(deleteTask)

export default router
