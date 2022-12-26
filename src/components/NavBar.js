import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button"
import Image from 'react-bootstrap/Image'
import "./NavBar.css"

{/* <img src="https://i.ibb.co/X56vc7q/logo-completo.jpg" alt="logo" className="d-inline-block align-top brand-img"/> */ }

function NavBar() {
    return (
        <Navbar expanded className="nav">
            <Container>
                <Navbar.Brand href="#">
                <Image src="https://i.ibb.co/X56vc7q/logo-completo.jpg" alt="logo" className="d-inline-block align-top brand-img" roundedCircle/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">
                            <Button variant="light">Iniciar Sesion</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;