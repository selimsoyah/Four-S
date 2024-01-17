import React from 'react';
import '../style/Cabinet.css';
import logo from '../images/Capture d’écran 2023-10-31 140141.png';

function Fondateur() {
    return (
        <div>
            <div className='CabMain'>
                <div className="container">
                    <div className="content">
                        <h1>Cabinet JAS Advice</h1>
                        <h2>Cabinet de consulting</h2>
                        <p>Financier : Le cabinet</p>
                    </div>
                </div>
            </div>

            <div className='MainBlock'>
                <div className='Block'>
                <div className='Block1'>
                <img src={logo} alt="Logo" />
                    <p> <h2>Notre expérience</h2>
                        Nous avons plus de 20 ans d’expérience dans le secteur bancaire. Grâce à notre expertise et à notre connaissance approfondie du marché, nous sommes en mesure de fournir des conseils avisés et des solutions adaptées pour aider les entreprises à obtenir les financements dont elles ont besoin pour réaliser leurs projets. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins spécifiques et élaborer des stratégies de financement personnalisées pour répondre à leurs objectifs financiers et commerciaux. Notre expérience nous permet également d’anticiper les problèmes potentiels et de proposer des solutions adaptées pour assurer la réussite des projets de nos clients.
                        </p>
                </div>
              
                <div className='Block1'>
                    <p> <h2>Notre expérience</h2>
                        Nous avons plus de 20 ans d’expérience dans le secteur bancaire. Grâce à notre expertise et à notre connaissance approfondie du marché, nous sommes en mesure de fournir des conseils avisés et des solutions adaptées pour aider les entreprises à obtenir les financements dont elles ont besoin pour réaliser leurs projets. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins spécifiques et élaborer des stratégies de financement personnalisées pour répondre à leurs objectifs financiers et commerciaux. Notre expérience nous permet également d’anticiper les problèmes potentiels et de proposer des solutions adaptées pour assurer la réussite des projets de nos clients.
                        </p><img src={logo} alt="Logo" />
                </div>
                </div>
            </div>
        </div>
    );
}

export default Fondateur;