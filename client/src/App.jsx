import { BrowserRouter, Routes, Route } from 'react-router-dom'

import TasksPage from './pages/TasksPage'
import TaskFormPage from './pages/TaskFormPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks-create" element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}
