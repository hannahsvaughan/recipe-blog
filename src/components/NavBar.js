import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#ECC1A1"}}>
      <Container>
        <Navbar.Brand href="#home">Hannie's Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact Me</Nav.Link>

            <NavDropdown title="Recipes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Recipe</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Recipe </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Recipe</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">View All</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
