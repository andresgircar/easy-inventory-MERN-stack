import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/">
            <img src="logoeasy.svg" alt="logo-easy-inventory"></img>
          </Link>
          <ul>
            <li><Link to="/"><i className="fa-solid fa-house"></i>Inicio</Link></li>
            <li><Link to="/my-inventory"><i className="fa-solid fa-cart-flatbed"></i>Mi Iventario</Link></li>
            <li><Link to="/my-inventory/new-item"><i className="fa-solid fa-puzzle-piece"></i>Nuevo Item</Link></li>
            <li><Link to="/my-inventory/update"><i className="fa-regular fa-pen-to-square"></i>Actualizar</Link></li>
          </ul>
          <div className='close-btn-container'>
            <Link to='/'><i className="fa-solid fa-rectangle-xmark"></i>Cerrar sesión</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path='/' element={ <Home/> }></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
