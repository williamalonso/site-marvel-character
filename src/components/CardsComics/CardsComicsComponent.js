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
    isLoading: true,
    itemsPerPage: 16,
  }

  async componentDidMount() {
    const marvel_comics = await api.get(`v1/public/comics?limit=32&apikey=798484f909a832aadb41f2d0216867aa`);

    this.setState({
      comics: marvel_comics.data.data.results,
      isLoading: false,
    });
  }

  render() {

    const { comics, itemsPerPage } = this.state;
    const { currentPage } = this.props;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const itemsToShow = comics.slice(indexOfFirstItem, indexOfLastItem);
    
    return(
      <>
      {
        this.state.isLoading ? 
        (
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}><i className="fas fa-spinner fa-spin fa-3x"></i></div> 
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', flexWrap: 'wrap' }}>
            {
              itemsToShow.map( (item, index) => {
                const image = item.thumbnail ? item.thumbnail.path + '.' + item.thumbnail.extension : null;
                const title = item.title;
                return(
                  <CardsCharactersContainer key={index}>
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
              })
            }
          </div>
        )
      }
      </>
    );
  }
}

export default CardsComicsComponent;