import React from "react";
import store from "../../store";
import { Provider } from 'react-redux';
import FooterComponent from "../Footer/FooterComponent";
import NavbarComponent from "../Navbar/NavbarComponent";
import HeadlineComponent from "../Headline/HeadlineComponent";
import CardsCharactersComponent from "../CardsCharacters/CardsCharactersComponent";

const ContentComponent = () => {
  
  return(
    <Provider store={store}>
      <NavbarComponent/>
      <HeadlineComponent 
        txt="vingadores" 
        static="Você está na área"
      />
      <CardsCharactersComponent/>
      <FooterComponent/>
    </Provider>
  );
}

export default ContentComponent;