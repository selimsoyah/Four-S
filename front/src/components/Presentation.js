import React, { useState } from 'react';
import '../style/Presentation.css';
import man from '../images/attractive-businessman-standing-facing-camera.jpg'
function Presentation() {
  return (
    <div className='MainPlain'>
        <div className='text'>
                <div className='mainText'>
                        <h1>Qui est Sami Soyah ?</h1>
                        <p>Jazia Mathari Malki est une entrepreneuse expérimentée et une experte de renom dans le domaine de la finance, avec plus de 20 ans d’expérience dans le secteur. Elle est la fondatrice de Jas Advice, un cabinet de consulting financier prestigieux qui assiste les entreprises à naviguer dans l’univers complexe des finances et des banques.</p>
                        <button  className='button2'>Contact</button>
                </div>
             
        </div>
        <div className='image'>
                <div className='mainImage'>
                    <img src={man} alt="man" />
                </div>
        </div>
    </div>
  )
}

export default Presentation