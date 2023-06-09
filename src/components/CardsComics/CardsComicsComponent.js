import api from "../../services/api";
import { connect } from 'react-redux';
import React, {Component} from "react";
import Back from "../CardsCharacters/Back/Back";
import Container from 'react-bootstrap/Container';
import Front from "../CardsCharacters/Front/Front";
import { setComics, setLoading } from '../../store';
import formService from '../../services/formService';
import Flipper from "../CardsCharacters/Flipper/Flipper";
import CardsCharactersName from "../CardsCharacters/CardName/CardsCharactersName";
import CardsCharactersImage from "../CardsCharacters/CardImage/CardsCharactersImage";
import CardsCharactersContainer from "../CardsCharacters/CardContainer/CardsCharactersContainer";

class CardsComicsComponent extends Component {

  async componentDidMount() {

    const {searchTerm, changeContent, dispatch} = this.props;

    if( searchTerm && changeContent ) {
      formService.getComics(searchTerm)
      .then( response => {
        const comicsData = response.data.data.results[0];
        dispatch(setComics([comicsData]));
        dispatch( setLoading(false) );
      }).catch( error => {
        console.error('Erro ao buscar personagem: ', error);
      });
    } else {
      const marvel_comics = await api.get(`v1/public/comics?limit=32&apikey=798484f909a832aadb41f2d0216867aa`);
      
      const { dispatch } = this.props;

      dispatch( setComics(marvel_comics.data.data.results) );
      dispatch( setLoading(false) );
    }

  }

  async componentDidUpdate(prevProps) {
    
    const { changeContent, searchTerm, dispatch } = this.props;
    
    if( changeContent && changeContent !==  prevProps.changeContent ) {
      formService.getComics(searchTerm)
      .then( response => {
        const comicsData = response.data.data.results[0];
        dispatch(setComics([comicsData]));
        dispatch( setLoading(false) );
      }).catch( error => {
        console.error('Erro ao buscar comics: ', error);
      });
    }
  }

  render() {

    const {
      currentPage,
      itemsPerPage,
      comics,
      isLoading,
    } = this.props;    

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const itemsToShow = comics.slice(indexOfFirstItem, indexOfLastItem);
    
    return(
      <>
      {
        isLoading ? 
        (
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}><i className="fas fa-spinner fa-spin fa-3x"></i></div>
        ) : (
          <Container className="d-flex flex-wrap justify-content-evenly mt-5 ps-0 pe-0">
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
          </Container>
        )
      }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPage: state.footer.currentPage,
  itemsPerPage: state.cardsComics.itemsPerPage,
  comics: state.cardsComics.comics,
  isLoading: state.cardsComics.isLoading,
  changeContent: state.form.changeContent,
  searchTerm: state.form.searchTerm,
});

export default connect(mapStateToProps)(CardsComicsComponent);