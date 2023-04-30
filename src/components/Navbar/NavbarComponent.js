import styled from "styled-components";
import React from "react";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background-color: var(--primaryColor);
  padding: 2rem;
`;

const NavbarComponent = () => {
  return(
    <NavbarContainer>
      Meu navbar
    </NavbarContainer>
  );
}

export default NavbarComponent;