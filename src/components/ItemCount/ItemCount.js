import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
import "./ItemCount.css";

function ItemCount() {
    const [contador, setContador] = useState(1);
    const stock = 5
    const sumar = () => {
        if (stock > contador) {
            setContador(contador + 1)
        }
    }
    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    return (
        <>
        <br />
        <ButtonGroup aria-label="Basic example" className='contador-prods'>
            <Button variant="outline-dark" className='add-rest-button' onClick={restar} >-</Button>
            <button className='cantidad-prods text-center border-start-0' disabled>{contador}</button >
            <Button variant="outline-dark" className='add-rest-button' onClick={sumar}>+</Button>
        </ButtonGroup>  
        <span> stock: {stock} </span>
        <Button className='agregar-carrito' variant="danger">Agregar al carrito</Button>
        </>
    );
}   

export default ItemCount;