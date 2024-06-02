import React from 'react';

import "./Reservation.scss";
import Contact from "../Contact/Contact";

const Reservation = () => {
    return (
        <div className="Reservation">
            <h4 className="Reservation-text">Book Prefered Deal Here</h4>
            <h3 className="Reservation-title">Make Your Reservation</h3>
            <a href="#contact" className="Reservation-btn">Discover More</a>

            <Contact />
        </div>
    )
}


export default Reservation;