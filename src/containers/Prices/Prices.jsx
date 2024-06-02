import React from 'react'
import MainTitle from "../../components/MainTitle/MainTitle";
import Card from "../../components/Card/Card";
import { CardIcon2, CardIcon3, CardIcon4 } from "../../assets/icons";

import "./Prices.scss";

const data = [
    {
        id: 0,
        cityName: "Istanbul",
        users: "234",
        price: "$420",
        items: [
            {
                icon: <CardIcon2 />,
                text: "5 Days Trip > Hotel Included"
            },

            {
                icon: <CardIcon3 />,
                text: "Airplane Bill Included"
            },

            {
                icon: <CardIcon4 />,
                text: "Daily Places Visit"
            }
        ]
    },

    {
        id: 1,
        cityName: "Dubai",
        users: "300",
        price: "$700",
        items: [
            {
                icon: <CardIcon2 />,
                text: "5 Days Trip > Hotel Included"
            },

            {
                icon: <CardIcon3 />,
                text: "Airplane Bill Included"
            },

            {
                icon: <CardIcon4 />,
                text: "Daily Places Visit"
            }
        ]
    },

    {
        id: 2,
        cityName: "Antalya",
        users: "500",
        price: "$999",
        items: [
            {
                icon: <CardIcon2 />,
                text: "5 Days Trip > Hotel Included"
            },

            {
                icon: <CardIcon3 />,
                text: "Airplane Bill Included"
            },

            {
                icon: <CardIcon4 />,
                text: "Daily Places Visit"
            }
        ]
    },
]

const Prices = () => {
    return (
        <div className="Prices container">
            <MainTitle
                title="Best Weekly Offers In Each City"
                text="Discover the best weekly offers in each city, curated just for you.
                Immerse yourself in a world of savings and indulge in unparalleled experiences."
            />

            {
                data.map(el => (
                    <Card
                        key={el.id}
                        icon={el.icon}
                        price={el.price}
                        cityName={el.cityName}
                        users={el.users}
                        items={[...el.items]}
                    />
                ))
            }

        </div>
    )
}

export default Prices;
