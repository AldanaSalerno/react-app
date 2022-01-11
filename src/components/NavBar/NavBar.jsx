import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from './Logo';
import { CartWidget } from './CartWidget';
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <header className="menu">
        <Navbar bg="light" expand="lg">
          <Container>
            <NavLink to="/" className="col-md-4">
              {' '}
              <Logo />{' '}
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink
                  to="/"
                  activeClassName="currentCategory"
                  className="col-md-6"
                >
                  Inicio
                </NavLink>
                <NavLink
                  to="/categoria/cosmeticos"
                  activeClassName="currentCategory"
                  className="col-md-6"
                >
                  Cosmeticos
                </NavLink>
                <NavLink
                  to="/categoria/perfumes"
                  activeClassName="currentCategory"
                  className="col-md-6"
                >
                  Perfumes
                </NavLink>
                <NavLink
                  to="/cart"
                  activeClassName="currentCategory"
                  className="col-md-6"
                >
                  Carrito
                </NavLink>
              </Nav>

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Busca tu producto aqui"
                  className="me-2 search"
                  aria-label="Search"
                />
                <Button variant="outline-dark" className="searchButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5  0   0 1 11 0z" />
                  </svg>
                </Button>
              </Form>
            </Navbar.Collapse>
            <CartWidget />
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default NavBar;