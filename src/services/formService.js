import axios from "axios";

const formService = {
  getCharacter: (searchTerm) => {
    return axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${searchTerm}&apikey=798484f909a832aadb41f2d0216867aa`);
  },
  getComics: (searchTerm) => {
    return axios.get(`https://gateway.marvel.com:443/v1/public/comics?title=${searchTerm}&apikey=798484f909a832aadb41f2d0216867aa`);
  }
}

export default formService;