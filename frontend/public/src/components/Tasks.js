import PropTypes from 'prop-types'
import Task from './Task'



const Tasks = ({tasks}) => {

  return (
    //setTasks([...Tasks, {}]) we can add like this
    <div>
        {tasks.map((task)=>(
            <Task key={task.id}  task={task}/>
        ))}
    </div>
  )
}

Tasks.propTypes = {}

export default Tasks