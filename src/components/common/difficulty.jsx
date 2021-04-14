import React from "react";

export const Difficulty = ({ onChange }) => {
    return (
        <>
            <h2>Select Difficulty Level</h2>
            <div className="difficulty" onChange={onChange}>
                <input
                    type="radio"
                    name="diff"
                    id="easy"
                    value="5000"
                    defaultChecked
                />
                <label htmlFor="easy">Easy</label>
                <input type="radio" name="diff" id="medium" value="3500" />
                <label htmlFor="medium">Medium</label>
                <input type="radio" name="diff" id="hard" value="2000" />
                <label htmlFor="hard">Hard</label>
            </div>
        </>
    );
};
