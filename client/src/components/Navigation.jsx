import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()

  const currentPath = location.pathname

  const pathParts = currentPath.split('/')
  const filteredPathParts = pathParts.filter((part) => part !== '')
  const lastPathPart = filteredPathParts[filteredPathParts.length - 1]

  return (
    <div>
      <h1>Tasks App</h1>
      <div className="navigator">
        <Link to="/tasks" className={lastPathPart === 'tasks' ? 'active' : ''}>
          Tasks Page
        </Link>
        <Link
          to="/tasks-create"
          className={lastPathPart === 'tasks-create' ? 'active' : ''}
        >
          Create Task
        </Link>
      </div>
    </div>
  )
}
