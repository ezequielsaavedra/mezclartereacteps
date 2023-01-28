import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <Link to="/cart" className="fa-2x carrito">
            <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faCartShopping}/>
                <span className="fa-layers-counter">0</span>
            </span>
        </Link>
    )
}

export default CartWidget