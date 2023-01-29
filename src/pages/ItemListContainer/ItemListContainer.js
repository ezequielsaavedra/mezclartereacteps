import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import Container from 'react-bootstrap/Container';

function ItemListContainer() {

    return (
        <>
        <Container fluid className="home">
            <ItemList />
        </Container>
        </>
    );
}

export default ItemListContainer;