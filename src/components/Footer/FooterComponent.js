import styled from "styled-components";
import React from "react";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background-color: var(--primaryColor);
  padding: 2rem;
  margin-top: 5rem;
`;

const FooterComponent = ( {onPageChange} ) => {
  return(
    <FooterContainer>
      <button onClick = { () => onPageChange(1) }>Página 1</button>
      <button onClick = { () => onPageChange(2) }>Página 2</button>
    </FooterContainer>
  );
}

export default FooterComponent;