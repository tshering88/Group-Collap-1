import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href='#home'>Home</Navbar.Brand>
        <Nav className='ml-auto'>
        <Navbar.Link href='#about'>About</Navbar.Link>
        <Navbar.Link href='#services'>Services</Navbar.Link>
        <Navbar.Link href='#contact'>Contacts</Navbar.Link>
        <Navbar.Link href='#login'>Login</Navbar.Link>
        <Navbar.Link href='#signup'>Signup</Navbar.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar

