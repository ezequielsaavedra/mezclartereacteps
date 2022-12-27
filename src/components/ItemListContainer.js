import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/esm/Container';
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
    return (
        <>
            {['danger',].map((variant) => (
                <Container className="bienvenida">
                    <Alert key={variant} variant={variant}>
                        <h1>{greeting}</h1>
                    </Alert>
                </Container>
            ))}
        </>
    );
}

export default ItemListContainer;