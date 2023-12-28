import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { createTask, deleteTask, getTask, updateTask } from '../api/tasks.api'
import { useEffect } from 'react'

export default function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm()

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getTask(params.id)
        setValue('title', data.title)
        setValue('description', data.description)
      }
    }

    loadTask()
  }, [])

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      try {
        const res = await updateTask(params.id, data)
        if (res.status === 200) {
          navigate('/tasks')
          toast.success('Task updated.', {
            position: 'bottom-right',
            style: {
              background: '#101010',
              color: 'white'
            }
          })
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
    } else {
      try {
        const res = await createTask(data)
        if (res.status === 201) {
          navigate('/tasks')
          toast.success('Task created.', {
            position: 'bottom-right',
            style: {
              background: '#101010',
              color: 'white'
            }
          })
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
          toast.success('Task deleted.', {
            position: 'bottom-right',
            style: {
              background: '#101010',
              color: 'white'
            }
          })
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
  }

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          type="text"
          placeholder="Title"
          {...register('title', { required: true })}
        />
        {errors.title && <span>Title is required.</span>}
        <textarea
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          rows="3"
          placeholder="Description"
          {...register('description', { required: true })}
        ></textarea>
        {errors.description && <span>Description is required.</span>}
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>
      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}
