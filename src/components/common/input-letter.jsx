import React from "react";

export const InputLetter = ({ type = "text", onKeyPress, placeholder }) => (
    <div className="letter-wrapper">
        <input
            type={type}
            className="letter"
            onKeyUp={(e) => onKeyPress(e)}
            placeholder={placeholder}
            maxLength="1"
        />
    </div>
);
