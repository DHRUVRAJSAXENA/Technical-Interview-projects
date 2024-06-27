import { Task } from "../models/task.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

// Create Task
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body
    const task = new Task({ title, description })
    await task.save()
    res
      .status(201)
      .json(new ApiResponse(201, task, "Task created successfully"))
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get All Tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get Task by ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if (!task) {
      throw new ApiError(404, "Task not found")
    }
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Update Task
export const updateTask = async (req, res) => {
  try {
    const { title, description, status } = req.body
    const task = await Task.findById(req.params.id)
    if (!task) {
      throw new ApiError(404, "Task not found")
    }
    task.title = title || task.title
    task.description = description || task.description
    task.status = status || task.status
    await task.save()
    res
      .status(200)
      .json(new ApiResponse(200, task, "Task updated successfully"))
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Delete Task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if (!task) {
      throw new ApiError(404, "Task not found")
    }
    await task.remove()
    res
      .status(200)
      .json(new ApiResponse(200, null, "Task deleted successfully"))
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
