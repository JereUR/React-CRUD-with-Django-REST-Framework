import { useGetTasks } from '../hooks/useGetTasks'
import TaskCard from './TaskCard'

export default function TasksList() {
  const tasks = useGetTasks()

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}
