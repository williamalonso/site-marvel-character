import React, { useEffect } from "react";
import styled from "styled-components";
import { setCurrentPageURL, setPage } from '../../store';
import { useSelector, useDispatch } from 'react-redux';


const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background-color: var(--primaryColor);
  padding: 2rem;
  margin-top: 5rem;
`;

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  background-color: var(--secondaryColor);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 50%;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: var(--secondaryColor);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  font-size: 1rem;
`;

const FooterComponent = () => {
  
  const currentPage = useSelector( (state) => state.footer.currentPage );
  const currentPageURL = useSelector( (state) => state.footer.currentPageURL );
  const dispatch = useDispatch();

  const handleChangePage = (pageNumber) => {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if( pageNumber < 1 ) {
      pageNumber = 1;
    }

    if( currentPageURL === '/avengers' ) {
      return;
    }

    if( pageNumber > 2 ) {
      return;
    }

    dispatch(setPage(pageNumber));
  }

  useEffect( () => {
    dispatch(setCurrentPageURL(window.location.pathname));
  });

  return(
    <FooterContainer>
      <Arrow onClick = { () => handleChangePage(currentPage-1) }>&lt;</Arrow>
      <Circle>{currentPage}</Circle>
      <Arrow onClick = { () => handleChangePage(currentPage+1) }>&gt;</Arrow>
    </FooterContainer>
  );
}

export default FooterComponent;