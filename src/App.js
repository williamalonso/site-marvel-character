import CardsComicsComponent from './components/CardsComics/CardsComicsComponent';
import FooterComponent from './components/Footer/FooterComponent';
import NavbarComponent from './components/Navbar/NavbarComponent';
import './index.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <CardsComicsComponent></CardsComicsComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
