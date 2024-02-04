import React, { useState } from 'react';

const Calificaciones = () => {
  const [alumnoId, setAlumnoId] = useState('');

  // Datos quemados de calificaciones, asumiendo que el 'alumnoId' se corresponde con el índice + 1
  const calificacionesDePrueba = {
    '1': [
      { codigo: '17072', calificacion: 6, progreso: 1, fecha: '2023-11-25' },
      { codigo: '17072', calificacion: 8, progreso: 2, fecha: '2024-01-06' },
    ],
    '2': [
      // Supongamos que este es otro alumno con diferentes calificaciones
      { codigo: '17075', calificacion: 7, progreso: 1, fecha: '2023-12-15' },
      { codigo: '17075', calificacion: 9, progreso: 2, fecha: '2024-01-10' },
    ],
    '3': [
      // Supongamos que este es otro alumno con diferentes calificaciones
      { codigo: '17078', calificacion: 7, progreso: 1, fecha: '2023-11-25' },
      { codigo: '17078', calificacion: 7, progreso: 2, fecha: '2024-01-10' },
    ],

    '3': [
      // Supongamos que este es otro alumno con diferentes calificaciones
      { codigo: '17081', calificacion: 5, progreso: 1, fecha: '2023-11-15' },
      { codigo: '17081', calificacion: 6, progreso: 2, fecha: '2024-01-07' },
    ],
    // Agrega más datos según sea necesario
  };

  const handleAlumnoChange = (e) => {
    setAlumnoId(e.target.value);
  };

  // Obtener calificaciones para el alumno seleccionado
  const calificaciones = calificacionesDePrueba[alumnoId] || [];

  return (
    <div>
      <h2>Calificaciones de alumnos</h2>

      <div>
        <label htmlFor="alumno">Buscar Estudiante</label>
        <select onChange={handleAlumnoChange} value={alumnoId}>
          <option value="">Selecciona un estudiante</option>
          <option value="1">Angel Macias</option>
          <option value="2">Daniel Cardenas</option>
          <option value="3">Nico Herbas</option>
          <option value="4">Galo Hernandez</option>

          {/* Agrega más opciones según sea necesario */}
        </select>
      </div>

      {calificaciones.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Calificación</th>
              <th>Progreso</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {calificaciones.map((calificacion, index) => (
              <tr key={index}>
                <td>{calificacion.codigo}</td>
                <td>{calificacion.calificacion}</td>
                <td>{calificacion.progreso}</td>
                <td>{calificacion.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Calificaciones;
