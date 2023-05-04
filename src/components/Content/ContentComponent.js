import React from "react";
import CardsCharactersComponent from "../CardsCharacters/CardsCharactersComponent";
import NavbarComponent from "../Navbar/NavbarComponent";
import FooterComponent from "../Footer/FooterComponent";
import HeadlineComponent from "../Headline/HeadlineComponent";

const ContentComponent = () => {
  return(
    <>
      <NavbarComponent></NavbarComponent>
      <HeadlineComponent txt="vingadores" static="Você está na área"></HeadlineComponent>
      <CardsCharactersComponent></CardsCharactersComponent>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default ContentComponent;