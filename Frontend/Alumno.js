import React, { useState, useEffect } from 'react';
import AlumnoList from './AlumnoList';

const Alumno = ({ onAlumnoSubmit }) => {
  const [name, setNombre] = useState('');
  const [idBanner, setIdBanner] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [alumnos, setAlumnos] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  
  const obtenerAlumnos = async () => {
    try {
      const response = await fetch(`https://localhost:7233/api/Alumno`);
      const data = await response.json();
  
      console.log('Respuesta de la API al obtener alumnos:', data);
  
      if (response.ok) {
        const alumnosArray = data.alumnos?.$values ?? [];
        setAlumnos(alumnosArray);
      } else {
        console.error('Error en la respuesta de la API:', data.error);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`https://localhost:7233/api/Alumno`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, idBanner }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setNombre('');
        setIdBanner('');
        setSuccessMessage('Alumno ingresado correctamente');
        onAlumnoSubmit(); // Llamada a la función proporcionada por el padre para recargar la lista de alumnos
      } else {
        console.error('Error en la respuesta de la API:', data.error);
        setSuccessMessage('Error al agregar el alumno');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setSuccessMessage('Error al agregar el alumno');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          ID Banner:
          <input type="text" value={idBanner} onChange={(e) => setIdBanner(e.target.value)} />
        </label>
        <br />
        <button type="submit">Agregar Alumno</button>
      </form>
      {successMessage && <p>{successMessage}</p>}

    

      
      <AlumnoList
        alumnos={alumnos}
        searchTerm={searchTerm}
        onEdit={(idBanner) => console.log(`Editar alumno con ID Banner: ${idBanner}`)}
        onDelete={(idBanner) => console.log(`Borrar alumno con ID Banner: ${idBanner}`)}
      />
    </div>
  );
};

export default Alumno;
