import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import NavBarDos from './components/NavBarDos';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <NavBar/>
      <NavBarDos/>
      </header>
      <ItemListContainer greeting="Bienvenid@ a nuestra tienda."/>
    </div>
  );
}

export default App;
