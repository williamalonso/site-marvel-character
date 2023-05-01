import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CardsCharactersComponent from "./components/CardsCharacters/CardsCharactersComponent";

const Rota = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/avengers" element={<CardsCharactersComponent />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Rota;