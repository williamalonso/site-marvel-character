import CardsCharactersComponent from './components/CardsCharacters/CardsCharactersComponent';
import './index.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CardsCharactersComponent></CardsCharactersComponent>
    </div>
  );
}

export default App;
