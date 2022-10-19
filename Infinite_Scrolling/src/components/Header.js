import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from "react-router-dom"

const Header = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><NavLink to="/" className="text-decoration-none text-light">Home</NavLink></Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/addTodo" className="text-decoration-none text-light">Add Todo</NavLink >
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header