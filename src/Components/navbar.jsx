import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./logo";
import "./navbar.scss";

function Anavbar() {
  return (
    <>
      <Navbar>
        <Container className="">
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end ">
            <Nav>
              <Nav.Link className="text-white" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Anavbar;

// <Navbar collapseOnSelect expand="lg" className="MyNav " sticky="top">
//   <Container>
//     <Navbar.Brand href="#home">
//       <Logo />
//     </Navbar.Brand>

//     <Nav className="me-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#about">About</Nav.Link>
//       <Nav.Link href="#service">Services</Nav.Link>
//       <Nav.Link href="#projects">Projects</Nav.Link>

//       <Nav.Link href="#contact">Contact</Nav.Link>
//     </Nav>
//   </Container>
// </Navbar>
