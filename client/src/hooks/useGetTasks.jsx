import { useEffect, useState } from 'react'
import { getAllTasks } from '../api/tasks.api'

export const useGetTasks = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks()
      setTasks(res.data)
    }

    loadTasks()
  }, [])

  return tasks
}
