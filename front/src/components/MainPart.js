import React, { useState } from 'react';
import '../style/MainPart.css';
import mainImage from '../images/051123-financial.jpg'
function MainPart() {
    return (
        <div className='Main'>
            <div className='MainText'>
                <h1>PLAN D’ACTIONS À LONG TERME</h1>
                <p>Conseils fiables et pertinents pour naviguer dans un environnement financier complexe</p>
            
                <div className='buttons'>
                    <button className='button1'>A propos de nous</button>
                    <button  className='button2'>Contact</button>
                </div>
            </div>
            
        </div>
    )
}

export default MainPart;