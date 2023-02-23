import React from 'react';
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


const NavBar = () => {
  return (
    <Navbar bg="info" expand="lg">
      <Container>

        <Navbar.Brand>
          <Link to={"/"} style={{ textDecoration: 'none' }}><h1>BasStore</h1></Link>
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Link to={"/catalogue"}><Button variant="outline-dark">Catalogo</Button>{' '}</Link>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cantidad de Cuerdas" id="basic-nav-dropdown">
              
                <NavDropdown.Item><Link to={`/category/${"4 cuerdas"}`} style={{ textDecoration: 'none' }}>4 cuerdas</Link></NavDropdown.Item>
              
              
                <NavDropdown.Item><Link to={`/category/${"5 cuerdas"}`} style={{ textDecoration: 'none' }}>5 cuerdas</Link></NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Link to={"/cart"}>
          <CartWidget />
        </Link>

      </Container>
    </Navbar>
  )
}

export default NavBar