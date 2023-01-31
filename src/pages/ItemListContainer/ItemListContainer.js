import "./ItemListContainer.css";
import Container from 'react-bootstrap/Container';
import ItemList from "../../components/ItemList/ItemList";
import ItemCategory from "../../components/ItemCategory/ItemCategory";
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { collection, getDocs, getFirestore} from "firebase/firestore"

function ItemListContainer() {

    const [productos, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    if(categoria) {

    }
    const getProducts = () => {
        const dataBase = getFirestore();
        const queryFirestore = collection(dataBase, "products")
        getDocs(queryFirestore).then((response) => {  
            const info = response.docs.map ((prod) => {
                return {id: prod.id, ...prod.data()}
            });
            setLoading(false)
            setProducts(info)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        getProducts()
    }, [])

    if (loading) {
        return (
            <Container fluid className="home">
                <Row className="justify-content-center">
                    <Loader />
                </Row>
            </Container>
        )
    } else {
        if (categoria) {
            return (
                <Container fluid className="home">
                    <Row className="justify-content-center">
                        <ItemCategory listaProductos={productos} />
                    </Row>
                </Container>
            )
        } else {
            return (
                <Container fluid className="home">
                    <Row className="justify-content-center">
                        <ItemList listaProductos={productos} />
                    </Row>
                </Container>
            )
        }
    }
}


export default ItemListContainer;