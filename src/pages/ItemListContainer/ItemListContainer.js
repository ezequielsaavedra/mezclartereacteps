import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Container from 'react-bootstrap/Container';
import Loader from "../../components/Loader/Loader";

function ItemListContainer() {

    return (
        <>
        <Container fluid className="home">
            <ItemList />
            <Loader />
        </Container>
        </>
    );
}

export default ItemListContainer;