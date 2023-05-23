import React, {useState} from "react";
import CardsCharactersComponent from "../CardsCharacters/CardsCharactersComponent";
import NavbarComponent from "../Navbar/NavbarComponent";
import FooterComponent from "../Footer/FooterComponent";
import HeadlineComponent from "../Headline/HeadlineComponent";

const ContentComponent = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  
  return(
    <>
      <NavbarComponent></NavbarComponent>
      <HeadlineComponent txt="vingadores" static="Você está na área"></HeadlineComponent>
      <CardsCharactersComponent
        currentPage={currentPage}
        onPageChange={handleChangePage}
      />
      <FooterComponent
        currentPage={currentPage}
        onPageChange={handleChangePage}
        itemsPerPage={3}
      />
    </>
  );
}

export default ContentComponent;