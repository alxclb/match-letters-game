import React from "react";
import { lettersList } from "../../config";
import { Letter } from "./letter";

export const List = () => {
    return (
        <div>
            {lettersList.map((l,k) => {
                let keys = Object.keys(l);
                let val = Object.values(l);
                return <Letter key={k} letter={keys} number={val} />;
            })}
        </div>
    );
};
