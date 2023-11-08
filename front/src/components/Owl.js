

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react'
import office from '../images/308-name5395-chim-1600x1066.jpg'
import '../style/Presentation.css';

export default function Owl() {

    return (



        <div>
            <h1>Nos Services</h1>
            <div className='MainCar'>


                <OwlCarousel className='owl-theme' loop margin={10} nav>
              
                    <div class='item'>
                        <img src={office} />
                        <h4>Financement des PME en Tunisie</h4>
                        <p>JAS Advice & Support : Maximisez vos chances d’obtention de financement développement entreprise !
                        </p>
                    </div>
                    <div class='item'>
                        <img src={office} />
                        <h4>Financement des PME en Tunisie</h4>
                        <p>JAS Advice & Support : Maximisez vos chances d’obtention de financement développement entreprise !
                        </p>
                    </div>
                    <div class='item'>
                        <img src={office} />
                        <h4>Financement des PME en Tunisie</h4>
                        <p>JAS Advice & Support : Maximisez vos chances d’obtention de financement développement entreprise !
                        </p>
                    </div>
                    <div class='item'>
                        <h4>4</h4>
                    </div>
                    <div class='item'>
                        <h4>5</h4>
                    </div>
                    <div class='item'>
                        <h4>6</h4>
                    </div>
                    <div class='item'>
                        <h4>7</h4>
                    </div>
                    <div class='item'>
                        <h4>8</h4>
                    </div>
                    <div class='item'>
                        <h4>9</h4>
                    </div>
                    <div class='item'>
                        <h4>10</h4>
                    </div>
                    <div class='item'>
                        <h4>11</h4>
                    </div>
                    <div class='item'>
                        <h4>12</h4>
                    </div>
                </OwlCarousel>


            </div></div>
    )
}
