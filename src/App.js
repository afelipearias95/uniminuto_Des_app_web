import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login.jsx'; // Asegúrate de que la ruta y la extensión sean correctas
import Footer from './components/footer.jsx'; // Importa el componente Footer
import HomePage from './components/menu.jsx'; // Importa la página de menú principal
import RegisterActivity from './components/registro.jsx'; // Importa la página de registro de actividades
import ConsultActivities from './components/consultar.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<HomePage />} />
          <Route path="/registro" element={<RegisterActivity />} />
          <Route path="/consulta" element={<ConsultActivities />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;