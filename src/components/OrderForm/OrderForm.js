import "./OrderForm.css"
import { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { cartContext } from "../../context/cartContext";
import { collection, addDoc, getFirestore, updateDoc, doc } from "firebase/firestore"
import Swal from "sweetalert2";

function OrderForm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [order, setOrder] = useState({});
    const { cart, total, vaciarCarrito } = useContext(cartContext);
    const db = getFirestore();
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")

    const getNombre = (event) => {
        setNombre(event.target.value)
    }
    const getApellido = (event) => {
        setApellido(event.target.value)
    }
    const getEmail = (event) => {
        setEmail(event.target.value)
    }
    const getTelefono = (event) => {
        setTelefono(event.target.value)
    }

    useEffect(() => {
        setOrder({
            buyer: {
                name: nombre,
                apellido: apellido,
                emial: email,
                telefono: telefono,
            },
            productos: cart.map((prod) => {
                const { name, precio, id, cantidad } = prod
                return { name, precio, id, cantidad }
            }),
            total: total
        })
    }, [cart, nombre, apellido, email, telefono])

    const crearOrder = () => {
        const querySnapshot = collection(db, "orders")
        addDoc(querySnapshot, order)
            .then((response) => {
                updateStock()
                // Swal.fire(`Su compra se ha realizado con exito! Codigo de seguimiento: ${response.id}`)
                Swal.fire({
                    title: "Felicitaciones!",
                    icon: "success",
                    text: `Su compra se ha realizado con exito! Codigo de seguimiento: ${response.id}`,
                    confirmButtonColor: " rgb(212, 167, 212)",
                    toast: true
                })
                handleClose()
                vaciarCarrito()
            }).catch(error => console.log(error))
    }

    const updateStock = () => {
        cart.forEach((prod) => {
            const querySnapshot = doc(db, "products", prod.id)
            updateDoc(querySnapshot, {
                stock: prod.stock - prod.cantidad,
            })
        })
    }

    return (
        <>
            <Button variant="light" onClick={handleShow} className="btn-finalizar">
                Finalizar compra
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingrese sus datos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="Nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control onChange={getNombre} type="text" placeholder="Nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Apellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control onChange={getApellido} type="text" placeholder="Apellido" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={getEmail} type="email" placeholder="Email" />
                            <Form.Group className="mb-3" controlId="Telefono">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control onChange={getTelefono} type="text" placeholder="Telefono" />
                            </Form.Group>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" className="btn-finalizar" onClick={crearOrder}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default OrderForm