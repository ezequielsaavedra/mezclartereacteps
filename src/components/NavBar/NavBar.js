import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css"

function NavBar() {
    return (
        <Navbar expanded >
            <Container >
                <Navbar.Brand href="/">
                <Image src="https://i.ibb.co/X56vc7q/logo-completo.jpg" alt="logo" className="d-inline-block align-top brand-img" roundedCircle/>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav>
                            <Button variant="light">Iniciar Sesion</Button>
                    </Nav>
                    <CartWidget></CartWidget>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;