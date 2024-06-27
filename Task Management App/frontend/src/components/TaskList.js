import React, { useEffect, useState } from "react"
import axios from "axios"
import "../styles/App.css"

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks")
        setTasks(response.data)
      } catch (error) {
        console.error("Error fetching tasks", error)
      }
    }

    fetchTasks()
  }, [])

  return (
    <div className="task-list">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TaskList
