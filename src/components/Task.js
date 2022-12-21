
import PropTypes from 'prop-types'

const Task = ({task}) => {
  return (
    <div className='event'>
        <h3>{task.text}</h3>

    </div>
  )
}

Task.propTypes = {}

export default Task