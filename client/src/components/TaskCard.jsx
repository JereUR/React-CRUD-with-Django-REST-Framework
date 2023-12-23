import PropTypes from 'prop-types'

export default function TaskCard({ task }) {
  return (
    <div>
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