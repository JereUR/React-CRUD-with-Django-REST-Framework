import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export default function TaskCard({ task }) {
  const navigate = useNavigate()
  return (
    <div
      style={{ background: '#101010' }}
      onClick={() => navigate('/tasks/' + task.id)}
    >
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <hr />
    </div>
  )
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}
