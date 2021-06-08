import './App.css';
import Card from './Components/Card'
import { useState, useEffect } from 'react'

function App() {

  const [titles, setTitles] = useState([['Alpha', 'α'], ['Beta', 'β'], ['Gamma', 'γ'], ['Delta', 'δ'], ['Epsilon', 'ε'], ['Zeta', 'ζ'],  ['Eta', 'η'], ['Theta', 'θ'],  ['Iota', 'ι'], ['Kappa', 'κ'], ['Lambda', 'λ'], ['Mu', 'μ']]);
  const [scoreArray, setScoreArray] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore])

  const shuffle = (array) => {
    let m = array.length, t, i;

  // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  } 

  const cardClick = (e, el) => {
    let shuffledTitles = shuffle([['Alpha', 'α'], ['Beta', 'β'], 
                                  ['Gamma', 'γ'], ['Delta', 'δ'], 
                                  ['Epsilon', 'ε'], ['Zeta', 'ζ'],  
                                  ['Eta', 'η'], ['Theta', 'θ'],  
                                  ['Iota', 'ι'], ['Kappa', 'κ'], 
                                  ['Lambda', 'λ'], ['Mu', 'μ']]);
    setTitles(shuffledTitles);
    let editableScore = scoreArray;
    console.log(editableScore, el);
    if (editableScore.indexOf(el[0]) === -1) {
      setCurrentScore(currentScore + 1);
      editableScore.push(el[0]);
      setScoreArray(editableScore);
    } else {
      setScoreArray([]);
      setCurrentScore(0);
    }
    
  }

  return (
    <div className="App">
      <header className='header'>Memory Card Game</header>
      <h3>Score: {currentScore}</h3>
      <h3>Best Score: {bestScore}</h3>
      <div className='content-container'>
        {titles.map((el, ind) => <Card onClick={(e) => {cardClick(e, el)}} name={el[0]} letter={el[1]} key={ind}/>)}
      </div>
    </div>
  );
}

export default App;
