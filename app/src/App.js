import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
