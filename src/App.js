import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import NavBarDos from './components/NavBarDos/NavBarDos';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className='App-header'>
      <NavBar/>
      <NavBarDos/>
      </header>
      <main>
        <Routes>
          <Route path='/*' element= {<div>Error 404: not found</div>} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path='/item/:id' element= {<ItemDetailContainer />} />
          <Route path="/category/:categoria" element={<ItemListContainer />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
