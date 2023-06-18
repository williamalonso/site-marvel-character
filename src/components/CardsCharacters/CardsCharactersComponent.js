import Back from "./Back/Back";
import Front from "./Front/Front";
import api from '../../services/api';
import { connect } from 'react-redux';
import Flipper from "./Flipper/Flipper";
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import { setAvengers, setAvLoading } from "../../store";
import CardsCharactersName from "./CardName/CardsCharactersName";
import CardsCharactersImage from "./CardImage/CardsCharactersImage";
import CardsCharactersDetail from "./CardDetail/CardsCharactersDetail";
import CardsCharactersContainer from "./CardContainer/CardsCharactersContainer";

class CardsCharactersComponent extends Component {

  async componentDidMount() {

    const ironMan_api = await api.get('v1/public/characters?name=Iron%20Man&apikey=798484f909a832aadb41f2d0216867aa');
    const hulk_api = await api.get('v1/public/characters?name=hulk&apikey=798484f909a832aadb41f2d0216867aa');
    const captainAmerica_api = await api.get('v1/public/characters?name=Captain%20America&apikey=798484f909a832aadb41f2d0216867aa');
    const thor_api = await api.get('v1/public/characters?name=Thor&apikey=798484f909a832aadb41f2d0216867aa');
    const hawkeye_api = await api.get('v1/public/characters?name=hawkeye&apikey=798484f909a832aadb41f2d0216867aa');
    const blackWidow_api = await api.get('v1/public/characters?name=Black%20Widow&apikey=798484f909a832aadb41f2d0216867aa');


    const ironMan = {
      image: ironMan_api.data.data.results[0].thumbnail.path + '.' + ironMan_api.data.data.results[0].thumbnail.extension,
      name: ironMan_api.data.data.results[0].name,
      description: ironMan_api.data.data.results[0].description
    }

    const Hulk = {
      image: hulk_api.data.data.results[0].thumbnail.path + '.' + hulk_api.data.data.results[0].thumbnail.extension,
      name: hulk_api.data.data.results[0].name,
      description: hulk_api.data.data.results[0].description
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

    const Hawkeye = {
      image: hawkeye_api.data.data.results[0].thumbnail.path + '.' + hawkeye_api.data.data.results[0].thumbnail.extension,
      name: hawkeye_api.data.data.results[0].name,
      description: hawkeye_api.data.data.results[0].description
    };

    const BlackWidow = {
      image: blackWidow_api.data.data.results[0].thumbnail.path + '.' + blackWidow_api.data.data.results[0].thumbnail.extension,
      name: blackWidow_api.data.data.results[0].name,
      description: blackWidow_api.data.data.results[0].description
    };

    const characters = [
      { id: 0, character: ironMan },
      { id: 1, character: captainAmerica },
      { id: 2, character: Thor },
      { id: 3, character: Hulk },
      { id: 4, character: Hawkeye },
      { id: 5, character: BlackWidow },
    ];

    const { dispatch } = this.props;

    dispatch( setAvengers(characters) );
    dispatch( setAvLoading(false) );

  }

  render() {

    const {
      currentPage,
      itemsPerPage,
      characters,
      isLoading,
    } = this.props;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const itemsToShow = characters.slice(indexOfFirstItem, indexOfLastItem);
  
    return (
      <>
      {
        isLoading ? 
        (
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}><i className="fas fa-spinner fa-spin fa-3x"></i></div>
        ) : (
          <Container className="d-flex flex-wrap justify-content-evenly mt-5 ps-0 pe-0">
            {
              itemsToShow.map( (item, index) => {
                return(
                  <CardsCharactersContainer key={index}>
                    <Flipper>
                      <Front>
                        <CardsCharactersImage src={item.character.image} alt="Imagem do Personagem"></CardsCharactersImage>
                      </Front>
                      <Back>
                        <CardsCharactersName>{item.character.name}</CardsCharactersName>
                        <CardsCharactersDetail>{item.character.description}</CardsCharactersDetail>
                      </Back>
                    </Flipper>
                  </CardsCharactersContainer>
                )
              })
            }
          </Container>
        )
      }
      </>
    );
      
  }
}

const mapStateToProps = (state) => ({
  currentPage: state.footer.currentPage,
  itemsPerPage: state.cardsAvengers.itemsPerPage,
  characters: state.cardsAvengers.characters,
  isLoading: state.cardsAvengers.isLoading,
});

export default connect(mapStateToProps)(CardsCharactersComponent);