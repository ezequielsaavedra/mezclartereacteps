import "./ItemDetailContainer.css"
import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loader from "../../components/Loader/Loader";
import { collection, getDocs, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {

    const [prods, setProds] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProds = () => {
        const dataBase = getFirestore();
        const queryFirestore = collection(dataBase, "products")
        getDocs(queryFirestore).then((response) => {  
            const info = response.docs.map ((prod) => {
                return {id: prod.id, ...prod.data()}
            });
            setLoading(false)
            setProds(info)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        getProds()
    }, [])


    return (
        <div className="single-prod">
            {loading ? <Loader /> : <ItemDetail listaProds={prods} />}
        </div>
    )
}

export default ItemDetailContainer