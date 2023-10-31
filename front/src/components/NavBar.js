import React, { useState } from 'react';
import '../style/Navbar.css';
import logo from '../images/Capture d’écran 2023-10-31 140141.png';
import { MdOutlineMail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';


function NavBar() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const toggleDrop = (toggle, setToggle) => {
    setToggle(!toggle);
  }

  return (
    <div>
      <div className='mainBody'>
        <div className='logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='navText'>
        <p>Accueil</p>
          <div
            onMouseEnter={() => toggleDrop(toggle1, setToggle1)}
            onMouseLeave={() => toggleDrop(toggle1, setToggle1)} >
            <p>
              A propos 
              {toggle1 && (
                <div className='drop'>
                  <p>Le cabinet</p>
                  <p>Le Fondateur</p>
                </div>
              )}
            </p><IoIosArrowDown/>
          </div>
          <div
            onMouseEnter={() => toggleDrop(toggle2, setToggle2)}
            onMouseLeave={() => toggleDrop(toggle2, setToggle2)}>
            <p>
              Vous êtes
              {toggle2 && (
                <div className='drop'>
                  <p>Créateurs d’entreprises, Porteurs de projets</p>
                  <p>Petites et Moyennes Entreprises</p>
                </div>
              )}
            </p><IoIosArrowDown/>
          </div>
          <div
            onMouseEnter={() => toggleDrop(toggle3, setToggle3)}
            onMouseLeave={() => toggleDrop(toggle3, setToggle3)}>
            <p>
               Nos services
              {toggle3 && (
                <div className='drop'>
                  <p>Créateurs d’entreprises, Porteurs de projets</p>
                  <p>Petites et Moyennes Entreprises</p>
                </div>
              )}
            </p><IoIosArrowDown/>
          </div>
          
          <p>Contact</p>
        </div>
      </div>
      <div className='contact'>
          <p> <MdOutlineMail/> Samisoyah@fourS.com.tn</p>
          <p> <FaLocationDot/> Miami , USA</p>
          <p><BsFillTelephoneFill/> +216 21 577 045</p>
      </div>
    </div>
  );
}

export default NavBar;
