import React, { useEffect, useState } from "react"
import axios from "axios"
import "../styles/App.css" // Make sure to style your component

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/api/tasks")
        setTasks(response.data)
      } catch (error) {
        console.error("Error fetching tasks", error)
      }
    }

    fetchTasks()
  }, [])

  if (!tasks.length) {
    return <div>No tasks available</div>
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task._id} className="task-item">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default TaskList
