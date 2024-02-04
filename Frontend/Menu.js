import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div style={styles.menuContainer}>
      <h2 style={styles.menuTitle}>Calificaciones</h2>
      <ul style={styles.menuList}>
        <li style={styles.menuItem}><Link to="/home" style={styles.link}>Inicio</Link></li>
        <li style={styles.menuItem}><Link to="/Alumno" style={styles.link}>Alumno</Link></li>
        <li style={styles.menuItem}><Link to="/calificaciones" style={styles.link}>Calificaciones</Link></li>
        <li style={styles.menuItem}><Link to="/reporte" style={styles.link}>Reporte</Link></li>
      </ul>
    </div>
  );
}

const styles = {
  menuContainer: {
    width: '25%',
    height: '100vh',
    background: '#2c3e50',
    padding: '20px',
    color: '#ecf0f1',
  },
  menuTitle: {
    fontSize: '3rem',
    marginBottom: '60px',
  },
  menuList: {
    listStyle: 'none',  
    padding: 0,
  },
  menuItem: {
    marginBottom: '80px',
  },
  link: {
    textDecoration: 'none',
    color: '#ecf0f1',
    fontSize: '2rem',
  },
};

export default Menu;
