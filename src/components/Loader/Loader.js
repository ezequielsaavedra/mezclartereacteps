import Spinner from 'react-bootstrap/Spinner';
import "./Loader.css"

function Loader() {

    return (
        <>
        <div className='loader'>
            <Spinner animation="grow" className='spinner'/>
        </div>
        </>
    );
}

export default Loader;