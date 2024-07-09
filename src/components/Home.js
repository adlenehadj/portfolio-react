import React from 'react';
import '../styles/Home.css';
import profileImage from '../assets/photo de profil.jpg';

const Home = () => {
  return (
    <div className="home">
      <img src={profileImage} alt="Votre Nom" />
      <h1>Bienvenue sur mon portfolio</h1>
      <p>Je suis Adlene Hadj Naceur, Étudiant au college la cité en programmation informatique bientot diplomé, avec des competences dans divers domaines notamment devloppement serveur web, programmation web, JAVA, C#, HTML, CSS, SQL SERVER, cybersecurité.... </p>
    </div>
  );
};

export default Home;
