import React, { Component } from "react";
import styled from "styled-components";
import api from '../../services/api';

const CardsCharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blue;
  height: 300px;
  width: 300px;
  margin: 0 auto;
`;

const CardsCharactersName = styled.div`
  /* Code here */
`;

const CardsCharactersDetail = styled.div`
  /* Code here */
`;

class CardsCharactersComponent extends Component {

  state = {
    characters: [
      {}
    ]
  }

  async componentDidMount() {
    const characters_api = await api.get('v1/public/characters?name=Iron%20Man&apikey=798484f909a832aadb41f2d0216867aa');
    this.setState({characters:characters_api});
    console.log(this.state.characters);
  }

  render(props) {
    return(
      <CardsCharactersContainer>
        {/* <img src={props.image} alt="Imagem do Personagem"/> */}
        <CardsCharactersName>Aqui entra o Nome</CardsCharactersName>
        <CardsCharactersDetail>Aqui entra características do personagem</CardsCharactersDetail>
      </CardsCharactersContainer>
    );
  }
}

export default CardsCharactersComponent;