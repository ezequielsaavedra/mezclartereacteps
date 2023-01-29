import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ItemCategory = ({ listaProductos }) => {

    const { categoria } = useParams();

    const category = listaProductos.filter((p) => p.categoria === categoria)

    return (
        <>
            {category.map((p) => (
                <Col sm = "auto" className="justify-content-center products-cards" key={p.id}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={p.imagen}
                            alt={p.name}
                        />
                        <Card.Body>
                            <Card.Title>{p.name}</Card.Title>
                            <Link to={`/item/${p.id}`}><button className="details-button">Ver detalles</button></Link>
                        </Card.Body>
                        <ListGroup className="list-group-flush">    
                            <ListGroup.Item>Precio: ${p.precio}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            ))}
        </>
    );
};

export default ItemCategory;