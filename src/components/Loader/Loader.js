import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect} from 'react';
import "./Loader.css"

function Loader() {
    const [loading, setLoading] = useState (true)

    useEffect (() => {
        setTimeout (() => {
            setLoading(false)
        }, 1999)
    })

    return (
        <>
        {loading ? (
        <div className='loader'>
            <Spinner animation="grow" className='spinner'/>
        </div>) : null}
        </>
    );
}

export default Loader;