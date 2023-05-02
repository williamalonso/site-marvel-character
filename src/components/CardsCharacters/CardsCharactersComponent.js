import React, { Component } from "react";
import api from '../../services/api';
import CardsCharactersName from "./CardName/CardsCharactersName";
import CardsCharactersDetail from "./CardDetail/CardsCharactersDetail";
import CardsCharactersContainer from "./CardContainer/CardsCharactersContainer";
import CardsCharactersImage from "./CardImage/CardsCharactersImage";

class CardsCharactersComponent extends Component {

  state = {
    characters: [],
    isLoading: true
  }

  async componentDidMount() {

    const ironMan_api = await api.get('v1/public/characters?name=Iron%20Man&apikey=798484f909a832aadb41f2d0216867aa');
    const captainAmerica_api = await api.get('v1/public/characters?name=Captain%20America&apikey=798484f909a832aadb41f2d0216867aa');
    const thor_api = await api.get('v1/public/characters?name=Thor&apikey=798484f909a832aadb41f2d0216867aa');

    const ironMan = {
      image: ironMan_api.data.data.results[0].thumbnail.path + '.' + ironMan_api.data.data.results[0].thumbnail.extension,
      name: ironMan_api.data.data.results[0].name,
      description: ironMan_api.data.data.results[0].description
    }

    const captainAmerica = {
      image: captainAmerica_api.data.data.results[0].thumbnail.path + '.' + captainAmerica_api.data.data.results[0].thumbnail.extension,
      name: captainAmerica_api.data.data.results[0].name,
      description: captainAmerica_api.data.data.results[0].description
    };

    const Thor = {
      image: thor_api.data.data.results[0].thumbnail.path + '.' + thor_api.data.data.results[0].thumbnail.extension,
      name: thor_api.data.data.results[0].name,
      description: thor_api.data.data.results[0].description
    };

    const characters = [
      { id: 0, character: ironMan },
      { id: 1, character: captainAmerica },
      { id: 2, character: Thor }
    ];
    
    this.setState({ characters, isLoading: false });

  }

  render() {

    const characters = this.state.characters;
    const characterCards = [];

    for(let i=0; i< characters.length; i++) {
      characterCards.push(
        <CardsCharactersContainer key={i}>
          <CardsCharactersImage src={characters[i].character.image} alt="Imagem do Personagem"></CardsCharactersImage>
          <CardsCharactersName>{characters[i].character.name}</CardsCharactersName>
          <CardsCharactersDetail>{characters[i].character.description}</CardsCharactersDetail>
        </CardsCharactersContainer>
      );
    }
  
    return (
      <>
      {
        this.state.isLoading ? 
        (
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}><i className="fas fa-spinner fa-spin fa-3x"></i></div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          {characterCards}
          </div>
        )
      }
      </>
    );
      
  }
}

export default CardsCharactersComponent;