import axios from "axios";

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/',
  publicKey: '798484f909a832aadb41f2d0216867aa'
})

export default api;