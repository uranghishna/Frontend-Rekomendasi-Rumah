import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

const NavbarComp = () => {
    return (
        <Navbar bg="dark" expand="lg">
        <Container>
            <Navbar.Brand className="text-white">SPK Desain Rumah</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/" className="text-white">Home</Nav.Link>
                <Nav.Link href="/quiz" className="text-white">Quiz</Nav.Link>
                <Nav.Link href="/summary" className="text-white">History</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavbarComp
