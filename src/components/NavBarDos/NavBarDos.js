import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';
import "./NavBarDos.css"

function NavBarDos() {
    return (
        <Navbar expanded className='products-navbar'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto justify-content-center products-nav">
                        <Button variant="light" className='products-button'><NavLink className={`filtro-button ${({ isActive }) => isActive ? "active" : "inactive"}`} to="/">Todo</NavLink></Button>
                        <Button variant="light" className='products-button'><NavLink className={`filtro-button ${({ isActive }) => isActive ? "active" : "inactive"}`} to="/category/macetas">Macetas</NavLink></Button>
                        <Button variant="light" className='products-button'><NavLink className={`filtro-button ${({ isActive }) => isActive ? "active" : "inactive"}`} to="/category/velas">Velas</NavLink></Button>
                        <Button variant="light" className='products-button'><NavLink className={`filtro-button ${({ isActive }) => isActive ? "active" : "inactive"}`} to="/category/decoraciones">Decoraciones</NavLink></Button> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarDos;