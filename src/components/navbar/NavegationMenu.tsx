import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Logo from '../../assets/logo.svg'

function NavegationMenu() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top" >

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Brand href="#">
          <img
            alt="RBLogo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          GFilenga
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">Sobre</Nav.Link>
            <Nav.Link href="#social">Redes Sociais</Nav.Link>
            <Nav.Link href="#projects">Repositórios</Nav.Link>
          </Nav>

          <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1pKp_fLo9icPxvp9wiTwsbKt9iR-srKn7/view?usp=sharing">
            <Button variant="outline-success">Download - cv</Button>
          </a>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavegationMenu
