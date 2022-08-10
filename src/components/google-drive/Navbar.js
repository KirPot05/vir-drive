import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="sm"
      style={{
        position: "sticky",
        top: "0",
        zIndex: "10",
      }}
    >
      <Navbar.Brand as={Link} to="/">
        Vir Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
