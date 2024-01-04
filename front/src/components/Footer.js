import React from 'react';
import '../style/Footer.css'
import logo from '../images/Capture d’écran 2023-10-31 140141.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          {/* Replace 'logo.png' with the path to your logo */}
        
        </div>
     
        <div className="footer-info">
        <img src={logo} alt="Company Logo" />
          <p>Approche personnalisée et flexible pour répondre à vos besoins spécifiques</p>
          <p>Horaires d’ouverture</p>
          <p>Lundi – Vendredi : 8h – 5h</p>
        </div>
        <div className="footer-links">
        <h4>Accueil</h4>
          <ul>
            
            <li>Le cabinet</li>
            <li>La Fondatrice</li>
            <li>Politique de confidentialité</li>
            <li>Mentions légales</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-services">
          <h4>Nos services</h4>
          <ul>
            <li>Financement développement entreprise</li>
            <li>Développement entreprise</li>
            <li>Accompagnement en banque</li>
            <li>Cabinet de conseil en finance Tunisie</li>
            <li>Financement des PME en Tunisie</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Coordonnées</h4>
          <p>14 rue Imam Abou Hanifa – 2ème étage – Appartement B5 – 2078 La Marsa – Tunis – Tunisie</p>
          <p>Tél. : +216 97 826 415</p>
          <p>Email : jazia@jasadvice.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
