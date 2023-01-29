import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import NavBarDos from './components/NavBarDos/NavBarDos';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from "./context/CartProvider"

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
        <div className="App">
          <header className='App-header'>
            <NavBar />
            <NavBarDos />
          </header>
          <main>
            <Routes>
              <Route path='/*' element={<div>Error 404: not found</div>} />
              <Route path="/" element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path="/category/:categoria" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
        </CartProvider>
    </BrowserRouter>
  );
}

export default App;
