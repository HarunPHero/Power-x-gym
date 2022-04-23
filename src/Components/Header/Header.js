
import React, {useState} from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Form,
  Button,
  FormControl,
  CardGroup, Card
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Home from "../Home/Home";
import HText from "../HeaderText/HText";


const Header = () => {
 
  return (
    <>
      <div>
        <header>
          <Navbar
          bg="dark"
            className="navbar navbar-expand-lg navbar-light fixed-top"
            expand={false}
          >
            <Container fluid>
              <Navbar.Brand href="/">
                <h2 className="text-light">
                  Power <span className="X-style">X</span>
                </h2>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/service">Services</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/className">className</Nav.Link>
                    <Nav.Link href="/#about">About us</Nav.Link>
                    <Nav.Link href="/price">Pricing</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        
        </header>
      </div>
     
    </>
  );
};

export default Header;
