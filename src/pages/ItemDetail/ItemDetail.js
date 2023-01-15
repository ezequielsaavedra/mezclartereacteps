import ItemCount from "../../components/ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ listaProds }) => {

    const { id } = useParams();

    const prod = listaProds.filter((p) => p.id === parseInt(id))

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
                    </Card>
                    <ItemCount stockProd={p.stock} />
                </div>
            ))}
        </>
    )
}

export default ItemDetail