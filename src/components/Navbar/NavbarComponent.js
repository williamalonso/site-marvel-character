import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: var(--white);
  background-color: var(--primaryColor);
  padding: 2rem;
`;

const StyledLink = styled(Link)`
  background-color: var(--white);
  color: var(--primaryColor);
  border: none;
  text-decoration: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    color: var(--primaryColor);
    background-color: var(--lightGrey);
  }
`;

const NavbarComponent = () => {
  return(
    <NavbarContainer>
      <StyledLink to="/">
        Início
      </StyledLink>
      <StyledLink to="/avengers">
        Vingadores
      </StyledLink>
    </NavbarContainer>
  );
}

export default NavbarComponent;