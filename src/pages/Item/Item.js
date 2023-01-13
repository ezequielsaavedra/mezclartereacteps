import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from 'react-bootstrap/Col';
import "./Item.css"

const Item = ({ listaProductos }) => {
    return (
        <>
            {listaProductos.map((p) => (
                <Col sm = "auto" className="justify-content-center products-cards">
                    <Card>
                        <Card.Img
                            variant="top"
                            src={p.imagen}
                            alt={p.name}
                        />
                        <Card.Body>
                            <Card.Title>{p.name}</Card.Title>
                            <Button variant="primary">Ver detalles</Button>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Precio: {p.precio}</ListGroup.Item>
                            <ListGroup.Item>Stock: x{p.stock}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            ))}
        </>
    );
};

export default Item;
