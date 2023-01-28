import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css"
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar expanded >
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <Image src="https://i.ibb.co/X56vc7q/logo-completo.jpg" alt="logo" className="d-inline-block align-top brand-img" roundedCircle/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <CartWidget></CartWidget>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;