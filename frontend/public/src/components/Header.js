//PropTypes
import PropTypes from 'prop-types'
import Button from './Button.js'


const Header = (props) => {
    
    const onClick = () => {
        alert('click');
    }

  return (
    <header className='header'>
        <h1>{props.title}</h1>
        <Button color='green' text='Add' onClick={onClick}></Button>
    </header>
  )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.propTypes = {
    title : PropTypes.string,
}

//css ici possible
const headingStyling = {
    color : 'red',
    backgroundColor: 'black'
}

export default Header;