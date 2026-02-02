import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./navbar.css"
function AxisNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`py-3 shadow-sm transition-navbar ${
        scrolled ? "navbar-scrolled bg-white" : "navbar-top"
      }`}
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Axis
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="axis-navbar" />
        <Navbar.Collapse id="axis-navbar">
          <Nav className="ms-auto align-items-lg-center gap-lg-4">
            <Nav.Link href="#home" className="fw-medium">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>

            <NavDropdown title="Dropdown" id="axis-dropdown">
              <NavDropdown.Item href="#action1">Dropdown 1</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Dropdown 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Dropdown 3</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AxisNavbar;

