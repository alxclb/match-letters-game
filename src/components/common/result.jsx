import React from "react";

export const Result = ({data}) => {
    console.log(data)
    return (
        <div className="random-last">
            <h4>Last result</h4>
            <span>{data.char}</span>
            <span>{data.last}</span>
        </div>
    );
};
