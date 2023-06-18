import React from "react";
import { setPage } from "../../store";
import Nav from 'react-bootstrap/Nav';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { setAvengers } from "../../store";
import Navbar from 'react-bootstrap/Navbar';
import { setSearchTerm } from "../../store";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import formService from "../../services/formService";
import { useDispatch, useSelector  } from "react-redux";

const NavbarContainer = styled(Navbar)`
  display: flex;
  justify-content: start;
  align-items: center;
  color: var(--white);
  background-color: var(--primaryColor);
  padding: 2rem;
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
  color: var(--headline);
  &:hover {
    color: var(--headline);
  }
`;

const StyledNavbarToggle = styled(Navbar.Toggle)`
  background-color: var(--primaryColor);
  span.navbar-toggler-icon {
    background-color: var(--primaryColor);
  }
`;

const StyledNavbarCollapse = styled(Navbar.Collapse)`
  margin-top: 10px;
  && .sc-iVCKna {
    margin-top: 10px;
  }
`;

const StyledButton = styled(Button)`
  color: var(--headline);
  border: var(--bs-btn-border-width) solid var(--headline);
  &:hover,
  &:active {
    background-color: var(--headline)!important;
    border: var(--bs-btn-border-width) solid var(--headline)!important;
  }
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
  const dispatch = useDispatch();
  const searchTerm = useSelector( (state) => state.form.searchTerm);

  const handleSearch = async() => {
    try {
      const response = await formService.getData(searchTerm);
      console.log(response);
      if(response.data.data.results == '') {
        alert('Não encontrado');
      }
      // const searchCharacter = {
      //   image: response.data.data.results[0].thumbnail.path + '.' + response.data.data.results[0].thumbnail.extension,
      //   name: response.data.data.results[0].name,
      //   description: response.data.data.results[0].description
      // };
      
      // dispatch(setAvengers(searchCharacter));
    } catch {
      alert('Não encontrado');
    }
  };

  return(
    <NavbarContainer expand="lg">
      <Container fluid style={{ backgroundColor: 'var(--primaryColor)' }}>
        <StyledNavbarBrand href="/" style={{ backgroundColor: 'var(--primaryColor)', fontSize: '40px' }}>Marvel App</StyledNavbarBrand>
        <StyledNavbarToggle aria-controls="navbarScroll" style={{ backgroundColor: 'var(--primaryColor)' }} />
        <StyledNavbarCollapse id="navbarScroll" style={{ backgroundColor: 'var(--primaryColor)' }}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', backgroundColor: 'var(--primaryColor)' }}
            navbarScroll
          >
            <StyledLink to="/" onClick={dispatch(setPage(1))}>
              Comics
            </StyledLink>
            <StyledLink to="/avengers" onClick={dispatch(setPage(1))}>
              Vingadores
            </StyledLink>
          </Nav>
          <Form className="d-flex" style={{ backgroundColor: 'var(--primaryColor)' }}>
            <Form.Control
              type="search"
              placeholder="Digite aqui"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={ e => dispatch(setSearchTerm(e.target.value)) }
            />
            <StyledButton variant="outline-success" onClick={handleSearch}>Pesquisar</StyledButton>
          </Form>
        </StyledNavbarCollapse>
      </Container>
    </NavbarContainer>
  );
}

export default NavbarComponent;