import Item from "../Item/Item";
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";

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
const producto1 = new Productos(1, "Vela Harry Potter", "", "https://i.ibb.co/SPY9Drt/vela-harry-potter.png", "Velas", 600, 7);
const producto2 = new Productos(2, "Maceta Pikachu", "", "https://i.ibb.co/zr3vxxH/maceta-pikachu.png", "Macetas", 550, 5);
const producto3 = new Productos(3, "Maceta Mafalda", "", "https://i.ibb.co/q97knj4/maceta-mafalda.png", "Macetas", 400, 3);
const producto4 = new Productos(4, "Maceta Bulbasaur", "", "https://i.ibb.co/1bF0QQb/maceta-bulbasaur.png", "Macetas", 550, 5);
const producto5 = new Productos(5, "Porta-Bob-Esponja", "", "https://i.ibb.co/JyDLfSX/deco-bob-esponja.png", "Decoraciones", 600, 2);
const producto6 = new Productos(6, "Vela Homero", "", "https://i.ibb.co/DCtXXSv/vela-homero.png", "Velas", 550, 9);
const producto7 = new Productos(7, "Cascada de Humo", "", "https://i.ibb.co/xCGvXR4/cascada-de-humo-buda.png", "Decoraciones", 550, 4);
const producto8 = new Productos(8, "Lapicero Vader", "", "https://i.ibb.co/X7smmvp/lapicero-darth-vader.png", "Decoraciones", 600, 5);
const producto9 = new Productos(9, "Vela Papá Noel", "", "https://i.ibb.co/M1PSTCX/vela-papa-noel.png", "Velas", 500, 7);

const ItemList = () => {
    
    const [productos, setProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9,
            ]);
        }, 2000)
    });

    useEffect(() => {
        getProducts.then((response) => {
            setProducts(response)
        }).catch(error => console.log(error))
    })

    return (
        <>
            <Row className="justify-content-center">
                <Item listaProductos={productos} />
            </Row>
        </>
    )
}

export default ItemList