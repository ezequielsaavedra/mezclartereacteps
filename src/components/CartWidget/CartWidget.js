import "./CartWidget.css"
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useContext} from "react";
import { cartContext } from "../../context/cartContext";

const CartWidget = () => {

    const {counter} = useContext(cartContext);

    return (
        <Link to="/cart" className="fa-2x carrito">
            <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faCartShopping}/>
                <span className="fa-layers-counter">{counter}</span>
            </span>
        </Link>
    )
}

export default CartWidget