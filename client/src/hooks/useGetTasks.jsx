import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

import { getAllTasks } from '../api/tasks.api'

export const useGetTasks = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function loadTasks() {
      try {
        const res = await getAllTasks()
        if (res.status === 200) {
          setTasks(res.data)
        } else {
          toast.error('Request error: ', res.status, res.statusText, {
            position: 'bottom-right',
            style: {
              background: '#101010',
              color: 'red'
            }
          })
        }
      } catch (error) {
        toast.error('Request error: ', error, {
          position: 'bottom-right',
          style: {
            background: '#101010',
            color: 'red'
          }
        })
      }
    }

    loadTasks()
  }, [])

  return tasks
}
