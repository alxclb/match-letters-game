import React from "react";

export const Letter = ({ letter, number, color }) => {
    return (
        <li key={number} className={"letter-wrapper " + color}>
            <span className="letter">{letter}</span>
            <span className="number">({number})</span>
        </li>
    );
};
