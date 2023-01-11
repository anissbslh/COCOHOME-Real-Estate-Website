import logo from './logo.svg';
import background from './assets/backgroundPhoto.png'

import { useState } from 'react';

//YO ANISS TAS QUOI FRERE
//encore

import Navbar from './components/Navbar'
import Home from './components/Home'
import Header from './components/Header';
import Tasks from './components/Tasks';
import MainText from './components/MainText';

function App() {
  //on peut mettre de variables ici
  const title = "welcome to new blog";
  const lokes = 50;
  const link ="http://www.google.com"
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Dosctos Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meeting at School',
        day: 'Feb 5th at 1:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
])

  return (
    <div >
{/*  
      <Header></Header>
      <Tasks tasks={tasks}/>
*/}

      <div className='homepage-bgimage'>
        <div className='big-container'>
          <Navbar/>
          <MainText/>
        </div>
        
      </div>

    </div>
  );
}

export default App;
