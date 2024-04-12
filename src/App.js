import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FooterX } from './componentes/ComponentesPrincipales';
import PaginaInicio  from './secciones/Paginas/PaginaPrincipal';
import  PaginaNoDisponible  from './secciones/Paginas/PaginaNoDisponible';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" index element={<PaginaInicio />} />
          <Route path='404' element={<PaginaNoDisponible />} />
        </Routes>
      </Router>
      <FooterX />
    </div>

  );
}

export default App;
