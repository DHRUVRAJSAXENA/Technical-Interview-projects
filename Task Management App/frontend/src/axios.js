import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:8000/api/tasks", // Adjust the baseURL to match your backend URL
})

export default instance
