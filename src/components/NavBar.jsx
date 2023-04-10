import React from 'react';
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


const NavBar = () => {
  return (
    <Navbar bg="info" expand="lg">
      <Container>

        <Navbar.Brand>
          <Link to={"/"} style={{ color:'black', textDecoration: 'none' }}><h1>BasStore</h1></Link>
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Button size="md" variant="light">
          <Link to={"/catalogue"} style={{ color: 'black', textDecoration: 'none' }}>Catalogo</Link>
          </Button>{' '}
          


        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">        
              <DropdownButton title="Categorias" id="bg-nested-dropdown" size="md" variant="light">
                <Dropdown.Item ><Link className="nav-link" id="RouterNavLink" to={`/category/${"4 cuerdas"}`} style={{ textDecoration: 'none' }}>4 cuerdas</Link></Dropdown.Item>
                <Dropdown.Item ><Link className="nav-link" id="RouterNavLink" to={`/category/${"5 cuerdas"}`} style={{ textDecoration: 'none' }}>5 cuerdas</Link></Dropdown.Item>
              </DropdownButton>            
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