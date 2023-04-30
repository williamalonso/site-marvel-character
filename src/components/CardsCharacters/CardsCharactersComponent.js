import React, { Component } from "react";
import api from '../../services/api';
import CardsCharactersName from "./CardName/CardsCharactersName";
import CardsCharactersDetail from "./CardDetail/CardsCharactersDetail";
import CardsCharactersContainer from "./CardContainer/CardsCharactersContainer";
import CardsCharactersImage from "./CardImage/CardsCharactersImage";

class CardsCharactersComponent extends Component {

  state = {
    characters: [
      {}
    ]
  }

  async componentDidMount() {

    const characters_api = await api.get('v1/public/characters?name=Iron%20Man&apikey=798484f909a832aadb41f2d0216867aa');

    const image = characters_api.data.data.results[0].thumbnail.path + '.' + characters_api.data.data.results[0].thumbnail.extension;
    const name = characters_api.data.data.results[0].name;
    const description = characters_api.data.data.results[0].description;
    
    this.setState({ characters: {image, name, description} });

  }

  render() {

    const name = this.state.characters.name;
    const image = this.state.characters.image;
    const description = this.state.characters.description;

    return(
      <CardsCharactersContainer>
        <CardsCharactersImage src={image} alt="Imagem do Personagem"></CardsCharactersImage>
        <CardsCharactersName>{name}</CardsCharactersName>
        <CardsCharactersDetail>{description}</CardsCharactersDetail>
      </CardsCharactersContainer>
    );

  }
}

export default CardsCharactersComponent;