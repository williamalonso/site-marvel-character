import './index.css';
import React from 'react';
import NavbarComponent from './components/Navbar/NavbarComponent';
import FooterComponent from './components/Footer/FooterComponent';
import HeadlineComponent from './components/Headline/HeadlineComponent';
import CardsComicsComponent from './components/CardsComics/CardsComicsComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <HeadlineComponent txt="comics" static="Você está na área"></HeadlineComponent>
      <CardsComicsComponent></CardsComicsComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
