import React from 'react'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="#home">BasStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bajos eléctricos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bajos acústicos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Amplificación y accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <CartWidget />

      </Container>
    </Navbar>
  )
}

export default NavBar