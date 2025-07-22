import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>Shreya's Portfolio</h2>
      <ul style={styles.ul}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#f0f0f0',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  }
};

export default Navbar;
