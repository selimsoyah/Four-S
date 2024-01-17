import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../style/Contact.css'
// import logo from 'path-to-your-logo'; // Make sure to replace 'path-to-your-logo' with the actual path to your logo

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'general_inquiry',
        message: '',
    });

    const [location, setLocation] = useState([36.856923, 10.266906]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('Form submitted:', formData);
    };

    return (
        <form action="/contact" method="post" onSubmit={handleSubmit}>
            <div className='CabMain'>
                <div className="container">
                    <div className="content">
                        <h1>Cabinet JAS Advice</h1>
                        <h2>Cabinet de consulting</h2>
                        <p>Financier : Le cabinet</p>
                    </div>
                </div>
            </div>
            <div className='Box'>
                <div className='firstBox'>
                     <div className="map-container">
                    <MapContainer center={location} zoom={13} style={{ height: '400px' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={location} />
                    </MapContainer>
                </div>
                </div>
                <div className='secondBox'>
                    <label htmlFor="name">Nom:</label><br />
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br />

                    <label htmlFor="email">Adresse e-mail:</label><br />
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br />

                    <label htmlFor="phone">Téléphone:</label><br />
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} /><br />

                    <label htmlFor="subject">Demandes d'informations:</label><br />
                    <select id="subject" name="subject" value={formData.subject} onChange={handleChange}>
                        <option value="general_inquiry">Question générale</option>
                        <option value="career_opportunities">Opportunités de carrière</option>
                        <option value="partnership_inquiry">Demande de partenariat</option>
                    </select><br />

                    <label htmlFor="message">Message:</label><br />
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea><br />

                    <input type="submit" value="Envoyer" />
                </div>
            </div>

        </form>
    );
}

export default Contact;
