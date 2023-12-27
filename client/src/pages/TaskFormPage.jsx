import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { createTask } from '../api/tasks.api'

export default function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()

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
    </div>
  )
}
