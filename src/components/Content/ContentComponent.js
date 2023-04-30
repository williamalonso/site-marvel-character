import styled from "styled-components";
import CardsCharactersComponent from "../CardsCharacters/CardsCharactersComponent";
import React from "react";

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ContentComponent = () => {
  return(
    <ContentContainer>
      <CardsCharactersComponent></CardsCharactersComponent>
    </ContentContainer>
  );
}

export default ContentComponent;