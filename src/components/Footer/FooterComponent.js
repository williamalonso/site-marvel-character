import styled from "styled-components";
import React from "react";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background-color: var(--primaryColor);
  padding: 2rem;
`;

const FooterComponent = () => {
  return(
    <FooterContainer>
      Meu Footer
    </FooterContainer>
  );
}

export default FooterComponent;