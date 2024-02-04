import React from 'react';

const Reporte = () => {
  const alumnos = [
    { id: 1, usuario: 'Angel Macias', progreso1: 5, progreso2: 7, progreso3: 5.75 },
    { id: 2, usuario: 'Daniel Cardenas', progreso1: 7, progreso2: 9, progreso3: 2.75 },
    { id: 3, usuario: 'Nico Herbas', progreso1: 7, progreso2: 7, progreso3: 4.5 },
    { id: 4, usuario: 'Galo Hernandez', progreso1: 5, progreso2: 6, progreso3: 6.62 },

    // Más alumnos...
  ];

  // Porcentajes de cada progreso
  const porcentajeProgreso1 = 25;
  const porcentajeProgreso2 = 35;
  const porcentajeProgreso3 = 40;

  // Cálculo de la nota final (simulación)
  const calcularNotaFinal = (progreso1, progreso2, progreso3) => {
    return (progreso1 * porcentajeProgreso1 + progreso2 * porcentajeProgreso2 + progreso3 * porcentajeProgreso3) / 100;
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Reporte de Calificaciones Finales </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '10px' }}>Usuario</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Progreso 1 ({porcentajeProgreso1}%)</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Progreso 2 ({porcentajeProgreso2}%)</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Progreso 3 ({porcentajeProgreso3}%)</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Nota Final</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '10px' }}>{alumno.usuario}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{`${alumno.progreso1} (${(alumno.progreso1 * porcentajeProgreso1 / 100).toFixed(2)}%)`}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{`${alumno.progreso2} (${(alumno.progreso2 * porcentajeProgreso2 / 100).toFixed(2)}%)`}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{`${alumno.progreso3} (${(alumno.progreso3 * porcentajeProgreso3 / 100).toFixed(2)}%)`}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{calcularNotaFinal(alumno.progreso1, alumno.progreso2, alumno.progreso3).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reporte;
