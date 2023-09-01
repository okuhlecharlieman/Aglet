import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./logo";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Anavbar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">
                Contact
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Anavbar;
