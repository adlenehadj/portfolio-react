import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Mes Projets</h1>
      <div className="project-list">
        <div className="project-item">
          <h2>Application de Gestion de Tâches</h2>
          <p>Une application web permettant aux utilisateurs de créer, gérer et suivre leurs tâches quotidiennes.</p>
          <p>Technologies utilisées : React, Node.js, Express, MongoDB</p>
        </div>
        <div className="project-item">
          <h2>Système de Gestion Bibliothèque</h2>
          <p>Un système de gestion pour les bibliothèques permettant de gérer les livres, les emprunts et les utilisateurs.</p>
          <p>Technologies utilisées : Java, Spring Boot, MySQL</p>
        </div>
        {/* Ajoutez plus de projets ici */}
      </div>
    </div>
  );
};

export default Projects;
