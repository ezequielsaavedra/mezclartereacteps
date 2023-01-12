import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import NavBarDos from './components/NavBarDos/NavBarDos';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
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
          <Route path="/" element={<ItemListContainer/>} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
