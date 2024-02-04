// EditarAlumno.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditarAlumno = ({ alumnoId, onClose, onUpdate }) => {
  const [alumno, setAlumno] = useState({
    id: '',
    name: '',
    idBanner: '' // Corrected property name
  });

  useEffect(() => {
    fetchAlumno();
  }, [alumnoId]);

  const fetchAlumno = async () => {
    try {
      const response = await axios.get(`http://localhost:5037/api/students/${alumnoId}`);
      setAlumno(response.data);
    } catch (error) {
      console.error('Error fetching alumno:', error);
    }
  };

  const handleInputChange = (e) => {
    setAlumno({
      ...alumno,
      [e.target.name]: e.target.value
    });
  };

  const handleActualizarAlumno = async () => {
    try {
      await axios.put(`https://localhost:7233/api/Alumno/${alumno.idBanner}`, alumno); // Corrected variable name
      onUpdate();
      onClose();
    } catch (error) {
      console.error('Error updating alumno:', error);
      console.error('Error details:', error.response);
    }
  };

  return (
    <div>
      <h2>Editar Alumno</h2>

      <label>Código</label>
      <input
        type="text"
        name="id" // Corrected input field name
        value={alumno.id}
        onChange={handleInputChange}
      />
      <label>Nombre del Alumno</label>
      <input
        type="text"
        name="name" // Corrected input field name
        value={alumno.name}
        onChange={handleInputChange}
      />
      <button onClick={handleActualizarAlumno}>Actualizar</button>
      <button onClick={onClose}>Cancelar</button>
    </div>
  );
};

export default EditarAlumno;
