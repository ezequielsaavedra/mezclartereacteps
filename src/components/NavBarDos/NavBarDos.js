import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import "./NavBarDos.css"

function NavBarDos() {
    return (
        <Navbar expanded className='products-navbar'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto justify-content-center products-nav">
                        <Button variant="light" className='products-button'><Nav.Link className='filtro-button'>Macetas</Nav.Link></Button>
                        <Button variant="light" className='products-button'><Nav.Link className='filtro-button'>Velas</Nav.Link></Button>
                        <Button variant="light" className='products-button'><Nav.Link className='filtro-button'>Decoraciones</Nav.Link></Button>
                        <Button variant="light" className='products-button'><Nav.Link className='filtro-button'>Ceniceros</Nav.Link></Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarDos;