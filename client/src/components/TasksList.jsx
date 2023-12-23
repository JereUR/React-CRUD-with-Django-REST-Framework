import { useGetTasks } from '../hooks/useGetTasks'
import TaskCard from './TaskCard'

export default function TasksList() {
  const tasks = useGetTasks()

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}
