import React, { useContext } from "react";
import { lettersList } from "../../config";
import { ScoreContext } from "../../score-context";
import { Letter } from "./letter";

export const List = () => {
    let { score } = useContext(ScoreContext);
 console.log(score)
    return (
        <ul className="list">
            {lettersList.map((l) => {
                let keys = Object.keys(l);
                let val = Object.values(l);
                return (
                    <Letter
                        key={val}
                        letter={keys}
                        number={val}
                    />
                );
            })}
        </ul>
    );
};
