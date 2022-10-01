
import './App.css';
import NavScroll from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavScroll/>
    <ItemListContainer greeting="Listado De Productos"/>
    </div>
  );
}

export default App;
