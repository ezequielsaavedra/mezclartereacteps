import "./ItemListContainer.css";
import Container from 'react-bootstrap/Container';
import ItemList from "../../components/ItemList/ItemList";
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore"

function ItemListContainer() {

    const [productos, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    const getProducts = () => {
        const dataBase = getFirestore();
        const queryBase = collection(dataBase, "products");
        const querySnapshot = categoria ? query(queryBase, where("categoria", "==", categoria)) : queryBase;
        getDocs(querySnapshot).then((response) => {
            const info = response.docs.map((prod) => {
                return { id: prod.id, ...prod.data() }
            });
            setLoading(false)
            setProducts(info)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        getProducts();
    }, [categoria])

    return (
        <Container fluid className="home">
            <Row className="justify-content-center">
                {loading ? <Loader /> : <ItemList listaProductos={productos} />}
            </Row>
        </Container>
    )
}

export default ItemListContainer;