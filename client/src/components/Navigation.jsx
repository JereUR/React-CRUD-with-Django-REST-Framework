import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()

  const currentPath = location.pathname

  const pathParts = currentPath.split('/')
  const filteredPathParts = pathParts.filter((part) => part !== '')
  const lastPathPart = filteredPathParts[filteredPathParts.length - 1]

  return (
    <div className="flex flex-col mb-10">
      <h1 className="font-bold text-3xl mb-4">Tasks App</h1>
      <div className="flex gap-3 py-3">
        <button className="bg-indigo-500 px-3 py-2 rounded-lg">
          <Link
            to="/tasks"
            className={lastPathPart === 'tasks' ? 'active' : ''}
          >
            Tasks Page
          </Link>
        </button>
        <button className="bg-indigo-500 px-3 py-2 rounded-lg">
          <Link
            to="/tasks-create"
            className={lastPathPart === 'tasks-create' ? 'active' : ''}
          >
            Create Task
          </Link>
        </button>
      </div>
    </div>
  )
}
