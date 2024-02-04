// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Componente/Menu';
import Home from './Componente/Home';
import Alumno from './Componente/Alumno';
import Calificaciones from './Componente/Calificaciones';
import Progresos from './Componente/Progresos';
import Reporte from './Componente/Reporte';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Menu />
        <div style={{ marginLeft: '200px', padding: '20px', flexGrow: 1 }}>
          {/* Reemplaza Switch con Routes */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/alumno" element={<Alumno />} />
            <Route path="/calificaciones" element={<Calificaciones />} />
            <Route path="/progresos" element={<Progresos />} />
            <Route path="/reporte" element={<Reporte />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
