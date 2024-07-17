import React from 'react';
import '../styles/Projects.css';
import taskManagementImage from '../assets/task_management.jpg';
import libraryManagementImage from '../assets/library_management.jpeg';

const projects = [
  {
    id: 1,
    title: 'Application de Gestion de Tâches',
    description: 'Une application web permettant aux utilisateurs de créer, gérer et suivre leurs tâches quotidiennes.',
    technologies: 'React, Node.js, Express, MongoDB',
    image: taskManagementImage,
  },
  {
    id: 2,
    title: 'Système de Gestion Bibliothèque',
    description: 'Un système de gestion pour les bibliothèques permettant de gérer les livres, les emprunts et les utilisateurs.',
    technologies: 'Java, Spring Boot, MySQL',
    image: libraryManagementImage,
  },
  // Ajoutez plus de projets ici
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Mes Projets</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Technologies utilisées :</strong> {project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

