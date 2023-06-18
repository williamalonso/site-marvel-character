import './index.css';
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar/NavbarComponent';
import FooterComponent from './components/Footer/FooterComponent';
import HeadlineComponent from './components/Headline/HeadlineComponent';
import CardsComicsComponent from './components/CardsComics/CardsComicsComponent';

function App() {

  return (
    <Provider store={store}>
      <NavbarComponent />
      <HeadlineComponent 
        txt="comics" 
        static="Você está na área"
      />
      <CardsComicsComponent />
      <FooterComponent
        itemsPerPage={16}
      />
    </Provider>
  );
}

export default App;
