import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
          <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                    </Nav>

                    <Badge color="primary">
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>

                </Container>
        </Navbar>
    </>
  )
}

export default Header
