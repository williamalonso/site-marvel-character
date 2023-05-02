import CardsCharactersComponent from "../CardsCharacters/CardsCharactersComponent";
import React from "react";
import NavbarComponent from "../Navbar/NavbarComponent";
import FooterComponent from "../Footer/FooterComponent";

const ContentComponent = () => {
  return(
    <>
      <NavbarComponent></NavbarComponent>
      <CardsCharactersComponent></CardsCharactersComponent>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default ContentComponent;