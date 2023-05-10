import React, {Component} from "react";
import api from "../../services/api";
import CardsCharactersContainer from "../CardsCharacters/CardContainer/CardsCharactersContainer";
import CardsCharactersImage from "../CardsCharacters/CardImage/CardsCharactersImage";
import CardsCharactersName from "../CardsCharacters/CardName/CardsCharactersName";
import Flipper from "../CardsCharacters/Flipper/Flipper";
import Front from "../CardsCharacters/Front/Front";
import Back from "../CardsCharacters/Back/Back";

class CardsComicsComponent extends Component {

  state = {
    comics: [],
    isLoading: true
  }

  async componentDidMount() {
    const marvel_comics = await api.get(`v1/public/comics?apikey=798484f909a832aadb41f2d0216867aa`);

    this.setState({
      comics: marvel_comics.data.data.results,
      isLoading: false,
    });
  }

  render() {
    const comicsArr = [];
    for( let i = 0 ; i < this.state.comics.length; i++ ) {
      const image = this.state.comics[i].thumbnail ? this.state.comics[i].thumbnail.path + '.' + this.state.comics[i].thumbnail.extension : null;
      const title = this.state.comics[i].title;
      comicsArr.push(
        <CardsCharactersContainer key={i}>
          <Flipper>
            <Front>
              <CardsCharactersImage src={image} alt="Imagem do Comics"></CardsCharactersImage>
            </Front>
            <Back>
              <CardsCharactersName>{title}</CardsCharactersName>
            </Back>
          </Flipper>
        </CardsCharactersContainer>
      );
    }
    
    return(
      <>
      {
        this.state.isLoading ? 
        (
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}><i className="fas fa-spinner fa-spin fa-3x"></i></div> 
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', flexWrap: 'wrap' }}>
            {comicsArr}
          </div>
        )
      }
      </>
    );
  }
}

export default CardsComicsComponent;