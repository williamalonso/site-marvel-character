import './index.css';
import React, {useState} from 'react';
import NavbarComponent from './components/Navbar/NavbarComponent';
import FooterComponent from './components/Footer/FooterComponent';
import HeadlineComponent from './components/Headline/HeadlineComponent';
import CardsComicsComponent from './components/CardsComics/CardsComicsComponent';

function App() {

  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  
  return (
    <div className="App">
      <NavbarComponent />
      <HeadlineComponent 
        txt="comics" 
        static="Você está na área"
      />
      <CardsComicsComponent 
        currentPage={currentPage} 
        onPageChange={handleChangePage}
      />
      <FooterComponent 
        currentPage={currentPage} 
        onPageChange={handleChangePage} 
      />
    </div>
  );
}

export default App;
