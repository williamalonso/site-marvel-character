import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ContentComponent from "./components/Content/ContentComponent";

const Rota = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/avengers" element={<ContentComponent />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Rota;