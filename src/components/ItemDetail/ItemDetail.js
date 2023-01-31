import "./ItemDetail.css";
import ItemCount from "../../components/ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from "react-router-dom";
import { useState, useContext } from 'react';
import { cartContext } from "../../context/cartContext";

const ItemDetail = ({ listaProds }) => {
    const { agregarCarrito } = useContext(cartContext);
    const { id } = useParams();
    const [contador, setContador] = useState(1);


    const prod = listaProds.filter((p) => p.id === id)

    return (
        <>
            {prod.map((p) => (
                <div key={p.id}>
                    <Card className="single-card">
                        <Card.Img variant="top" src={p.imagen} />
                        <Card.Body>
                            <Card.Title>{p.name}</Card.Title>
                            <Card.Text>
                                {p.descripcion}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Precio: ${p.precio}</ListGroup.Item>
                            <ListGroup.Item>Stock: x{p.stock}</ListGroup.Item>
                        </ListGroup>
                        <span className="item-count">
                            <ItemCount stockProd={p.stock} contador={contador} setContador={setContador} />
                            <Button className='agregar-carrito' variant="danger" onClick={() => agregarCarrito(p, contador)}>Agregar al carrito</Button>
                        </span>
                    </Card>
                </div>
            ))}
        </>
    )
}

export default ItemDetail