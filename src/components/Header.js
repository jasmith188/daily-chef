import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="#home">Daily Chef</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Prep List</Nav.Link>
            <Nav.Link href="#link">Schedule</Nav.Link>
            <Nav.Link href="#link">Another Link</Nav.Link>
            <NavDropdown title="Order Guides" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Produce</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Red Meat/Poultry
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Seafood</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dry Goods</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
