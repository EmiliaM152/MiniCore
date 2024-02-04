import React from 'react';

const AlumnoList = ({ alumnos, searchTerm, onEdit, onDelete }) => {
  const filteredAlumnos = Array.isArray(alumnos) ? alumnos.filter(alumno =>
    alumno.name && alumno.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];
  
  

  return (
    <div>
      <h3>Lista de Alumnos</h3>
      <h4>Angel Macias- 17072</h4> 
      <h4>Daniel Cardenas - 17075</h4>
      <h4>Nico Herbas- 17078</h4>
      <h4>Galo Hernandez - 17081</h4>


     
    </div>
  );
};

export default AlumnoList;
