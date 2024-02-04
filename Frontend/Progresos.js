import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Progresos = () => {
  const [progresos, setProgresos] = useState([]);
  const [nuevoProgreso, setNuevoProgreso] = useState({
    nombre: '',
    fechaInicio: '',
    fechaFin: '',
    cantidadNotas: 0,
    porcentajeTotal: 0,
  });

  useEffect(() => {
    fetchProgresos();
  }, []);

  const fetchProgresos = async () => {
    try {
      const response = await axios.get('http://localhost:5037/api/period');
      setProgresos(response.data);
    } catch (error) {
      console.error('Error fetching progresos:', error);
    }
  };

  const handleInputChange = (e) => {
    setNuevoProgreso({
      ...nuevoProgreso,
      [e.target.name]: e.target.value,
    });
  };

  const handleCrearProgreso = async () => {
    try {
      await axios.post('http://localhost:5037/api/period', nuevoProgreso);
      // Después de crear, actualiza la lista de progresos
      fetchProgresos();
      // Limpia el formulario
      setNuevoProgreso({
        nombre: '',
        fechaInicio: '',
        fechaFin: '',
        cantidadNotas: 0,
        porcentajeTotal: 0,
      });
    } catch (error) {
      console.error('Error creating progreso:', error);
    }
  };

  return (
    <div>
      <h2>Progresos</h2>

      {/* Aquí iría la visualización de los progresos existentes */}

      <h3>Crear nuevo progreso</h3>
      <label>Nombre:</label>
      <input type="text" name="nombre" value={nuevoProgreso.nombre} onChange={handleInputChange} />
      {/* Agrega otros campos del nuevo progreso según tus necesidades */}
      <button onClick={handleCrearProgreso}>Crear Progreso</button>
    </div>
  );
};

export default Progresos;
