import React from "react";

export const Letter = ({ letter, number }) => {
    return (
    <div className="letter-wrapper">
        <span className="letter">{letter}</span>
        <span className="number">({number})</span>
    </div>
    )
};
