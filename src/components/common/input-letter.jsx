import React from "react";

export const InputLetter = ({ type = "text", onChange }) => (
    <div className="letter-wrapper">
        <input
        type={type}
        className="letter"
        onChange={(e) => onChange && onChange(e.target.value)}
    />
    </div>
);
