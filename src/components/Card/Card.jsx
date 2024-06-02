import React from 'react';
import CardImg1 from "../../assets/images/cardImg1.jpg";
import { CardIcon1 } from "../../assets/icons";

import "./Card.scss";

const Card = ({ cityName, users, price, items }) => {
    return (
        <div className="Card">
            <img src={CardImg1} alt="" />

            <div className="Card-top">
                <div className="Card-top-name">
                    <h4 className="Card-top-title">{cityName}</h4>

                    <div className="flex align-items-center">
                        <CardIcon1 />
                        <span className="Card-top-users">{users} Check Ins</span>
                    </div>
                </div>

                <div className="Card-top-price">
                    <h4 className="Card-top-price-value">{price}</h4>
                    <span className="Card-top-price-title">/person</span>
                </div>
            </div>

            <div className="Card-bottom">
                <h4 className="Card-bottom-title">Deal Includes:</h4>
                <ul className="Card-bottom-items">
                    {
                        items.map(el => (
                            <li className="Card-bottom-item">
                                {el.icon}
                                <span>{el.text}</span>
                            </li>
                        ))
                    }
                </ul>

                <a href="#contact" className="btn-default">Make a Reservation</a>
            </div>
        </div>
    )
}

export default Card;
