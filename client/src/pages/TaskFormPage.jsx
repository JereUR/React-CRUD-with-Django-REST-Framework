import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { createTask, deleteTask } from '../api/tasks.api'

export default function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await createTask(data)
      if (res.status === 201) {
        navigate('/tasks')
      } else {
        console.error('Error en la solicitud:', res.status, res.statusText)
      }
    } catch (error) {
      console.error('Error en la solicitud:', error)
    }
  })

  const handleDelete = async () => {
    const accepted = window.confirm(
      'You are going to delete this task. Are you sure?'
    )
    if (accepted) {
      try {
        const res = await deleteTask(params.id)
        if (res.status === 204) {
          navigate('/tasks')
        } else {
          console.error('Error en la solicitud:', res.status, res.statusText)
        }
      } catch (error) {
        console.error('Error en la solicitud:', error)
      }
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register('title', { required: true })}
        />
        {errors.title && <span>Title is required.</span>}
        <textarea
          rows="3"
          placeholder="Description"
          {...register('description', { required: true })}
        ></textarea>
        {errors.description && <span>Description is required.</span>}
        <button>Save</button>
      </form>
      {params.id && <button onClick={handleDelete}>Delete</button>}
    </div>
  )
}
