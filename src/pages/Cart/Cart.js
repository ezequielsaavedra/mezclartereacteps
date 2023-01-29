import "./Cart.css"
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Button } from 'react-bootstrap';
import CartItems from "../../components/CartItems/CartItems";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

const Cart = () => {
    const { vaciarCarrito, total, cart } = useContext(cartContext);

    if (cart.length === 0) {
        return (
            <>
                <h1>No hay productos en tu carrito</h1>
                <Link to={"/"}><Button variant="light" className="btn-cart"> Seguir comprando</Button></Link>
            </>
        )
    }

    return (
        <>
            <Container fluid className="home">
                <div className='cart-body'>
                    <CartItems />
                </div>
                <hr />
                <h3>Su total es de: ${total}</h3>
                <Button variant="light" className="btn-cart">Finalizar Compra</Button>
                <Button variant="light" className="btn-cart" onClick={vaciarCarrito}> Vaciar carrito</Button>
                <Link to={"/"}><Button variant="light" className="btn-cart"> Seguir comprando</Button></Link>
            </Container>
        </>
    )
}

export default Cart