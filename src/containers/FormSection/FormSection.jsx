import React from 'react';

import "./FormSection.scss";

const FormSection = () => {
    return (
        <div className="FormSection container">
            <iframe className="FormSection-map" title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5425.907410211136!2d69.199668!3d41.289032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89a274fdb9b7%3A0x2b8bc58608ca7fb2!2sChilanzar-25%2C%20100152%2C%20Tashkent%2C%20Tashkent%20Region%2C%20Uzbekistan!5e1!3m2!1sen!2sus!4v1717765098456!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <h3 className="FormSection-title">Make Your <span className="blueText">Reservation</span> Through This <span className="blueText">Form</span></h3>
        </div>
    )
}

export default FormSection;
