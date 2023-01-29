import { cartContext } from "./cartContext";
import { useState, useEffect } from "react";

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const agregarCarrito = (prod, cantidad) => {
        let productoAgregado;
        let product = cart.find((p) => p.id === prod.id)
        if (product) {
            if(product.cantidad >= product.stock) {
                alert("No hay mas unidades disponibles")
                return
            }
                product.cantidad += cantidad;
                productoAgregado = [...cart]
        } else {
            product = {
                name: prod.name,
                id: prod.id,
                precio: prod.precio,
                cantidad: cantidad,
                imagen: prod.imagen,
                stock: prod.stock
            };
            productoAgregado = [...cart, product]
        }

        setCart(productoAgregado)
    }


    const [total, setTotal] = useState(0)

    const totalCarrito = () => {
        setTotal(cart.reduce((precio, p) => precio + p.precio * p.cantidad, 0))
    }

    useEffect(() => {
        totalCarrito()
    }, [cart])

    const [counter, setCounter] = useState(0)

    const contadorCarrito = () => {
        setCounter(cart.reduce((cant, p) => cant + p.cantidad, 0))
    }

    useEffect(() => {
        contadorCarrito()
    }, [cart])

    const vaciarCarrito = () => {
        setCart([])
        console.log(cart)
    }

    const elimnarProd = (id) => {
        setCart(cart.filter((p) => p.id !== id))
    }


    return (
        <cartContext.Provider value={{ cart, agregarCarrito, vaciarCarrito, total, counter, elimnarProd }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider