import './App.css';
import Card from './Components/Card'
import { useState, useEffect } from 'react'

function App() {

  const [names, setNames] = useState([
    'Timmy',
    'Chimbles',
    'Fred',
    'Griswold',
    'Stew',
    'Mud', 
    'Jessica',
    'Pitts', 
    'Andy',
    'Snoopy',
    'Bobo',
    'Skippy'
  ]);


  return (
    <div className="App">
      <header className='header'>Memory Card Game</header>
      <div className='content-container'>
        {names.map((el, ind) => <Card name={names[ind]}/>)}
      </div>
    </div>
  );
}

export default App;
