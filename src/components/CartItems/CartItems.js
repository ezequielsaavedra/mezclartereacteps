import "./CartItem.css"
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";

const CartItems = () => {
    const { cart, elimnarProd } = useContext(cartContext);

    return (
        <>
            <Row>
                {cart.map((p) => (
                    <Col sm="auto" className="justify-content-center products-cards" key={p.id}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src={p.imagen}
                                alt={p.name}
                            />
                            <Card.Body>
                                <Card.Title>{p.name}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Precio: ${p.precio}</ListGroup.Item>
                                <ListGroup.Item>Cantidad: x{p.cantidad}</ListGroup.Item>
                            </ListGroup>
                            <Button className="btn-eliminar" variant="light" onClick={() => elimnarProd(p.id)}>Eliminar</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default CartItems