import React from "react"
import CreateTask from "../components/CreateTask"
import TaskList from "../components/TaskList"
import "../styles/Homepage.css" // Make sure to create this CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Task Management App</h1>
      <CreateTask />
      <TaskList />
    </div>
  )
}

export default HomePage
