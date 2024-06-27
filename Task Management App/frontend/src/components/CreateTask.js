import React, { useState } from "react"
import axios from "../axios"
import "../styles/App.css"

const CreateTask = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/", { title, description })
      console.log("Task created:", response.data)
      // Optionally, you can clear the form fields after successful submission
      setTitle("")
      setDescription("")
    } catch (error) {
      console.error("Error creating task:", error)
    }
  }

  return (
    <form className="create-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Create Task</button>
    </form>
  )
}

export default CreateTask
