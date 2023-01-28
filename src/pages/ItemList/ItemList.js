import Item from "../../components/Item/Item";
import ItemCategory from "../ItemCategory/ItemCategory";
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";


class Productos {
    constructor(id, name, descripcion, imagen, categoria, precio, stock) {
        this.id = id;
        this.name = name;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}

const producto1 = new Productos(1, "Vela Harry Potter", "El Elegido en forma de vela!!", "https://i.ibb.co/SPY9Drt/vela-harry-potter.png", "velas", 600, 7);
const producto2 = new Productos(2, "Maceta Pikachu", "Una maceta en forma del pokemon favotiro de todos!!", "https://i.ibb.co/zr3vxxH/maceta-pikachu.png", "macetas", 550, 5);
const producto3 = new Productos(3, "Maceta Mafalda", "Maceta de la caricatura mas argenta que hay, qué estás esperando para llevarla?", "https://i.ibb.co/q97knj4/maceta-mafalda.png", "macetas", 400, 3);
const producto4 = new Productos(4, "Maceta Bulbasaur", "Que mejor que una maceta del mejor pokemon tipo planta que existe??", "https://i.ibb.co/1bF0QQb/maceta-bulbasaur.png", "macetas", 550, 5);
const producto5 = new Productos(5, "Porta-Bob-Esponja", "Bob Esponja con una esponja dentro. No hace falta decir mas nada.", "https://i.ibb.co/JyDLfSX/deco-bob-esponja.png", "decoraciones", 600, 2);
const producto6 = new Productos(6, "Vela Homero", "El simple esfuerzo que hace Homero al pensar es suficiente para mantener la vela encendida...", "https://i.ibb.co/DCtXXSv/vela-homero.png", "velas", 550, 9);
const producto7 = new Productos(7, "Cascada de Humo", "Nada como una cascada de humo en forma de buda para la armonización del hogar", "https://i.ibb.co/xCGvXR4/cascada-de-humo-buda.png", "decoraciones", 550, 4);
const producto8 = new Productos(8, "Lapicero Vader", "Tranquilos, los lapices no se pasarán al lado oscuro... o si??", "https://i.ibb.co/X7smmvp/lapicero-darth-vader.png", "decoraciones", 600, 5);
const producto9 = new Productos(9, "Vela Papá Noel", "Esplendida para pasar las Fiestas con tus seres queridos", "https://i.ibb.co/M1PSTCX/vela-papa-noel.png", "velas", 500, 7);

const ItemList = () => {

    const [productos, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    const getProducts = new Promise((resolve, reject) => {
            resolve([
                producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9,
            ]);
    });

    useEffect(() => {
        setTimeout(() => {
            getProducts
            .then((response) => {
                setLoading(false)
                setProducts(response);
            }).catch(error => console.log(error))
        }, 2000)
    }, []);

    if (loading) {
        return (
            <>
                <Row className="justify-content-center">
                    <Loader />
                </Row>
            </>
        )
    } else {
        if (categoria) {
            return (
                <>
                    <Row className="justify-content-center">
                        <ItemCategory listaProductos={productos} />
                    </Row>
                </>
            )
        } else {
            return (
                <>
                    <Row className="justify-content-center">
                        <Item listaProductos={productos} />
                    </Row>
                </>
            )
        }
    }
}

export default ItemList