import React from "react";
import {NavLink} from "react-router-dom";

const KasaCard = ({kasa}) => {
    return (
        <NavLink 
            key={kasa.id}
            to={{
                pathname: '/location/${kasa.id}',
                state: {kasa: kasa,
                },
            }}
            className="kasaCards kasaCardslink"
            >
            <div className="kasaCard">
                <img src={kasa.cover} alt="kasa.title" />
                <h2>{kasa.title}</h2>
                <div className="gardientWrap"></div>
            </div>
            </NavLink>
    );
};

export default KasaCard;