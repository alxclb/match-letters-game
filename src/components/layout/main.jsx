import React, { useState } from "react";
import { Button } from "../common/button";
import { Difficulty } from "../common/difficulty";
import { InputLetter } from "../common/input-letter";
import { Random } from "../common/random";

export const Main = () => {

    const [random, setRandom] = useState();

    function difficultyLevel(e){
        console.log(e.target.value)
    }
    function startGame() {
        let arr = [...Array(27).keys()].slice(1);
        setInterval(function(){
            let newNumber = generateRandomNumber(arr)
        }, 3000);

    }
    function checkLetter(val) {
        console.log(val);
    }

    function generateRandomNumber(arr){
        let num = arr.length;
        return Math.floor((Math.random() * num) + 1);
    }
    return (
        <div className="main-container">
            <Difficulty onChange={difficultyLevel}/> 
            <Button name="Start Game" onClick={startGame} />
            <Random number="17" />
            <InputLetter
                label="Input Letter"
                onChange={checkLetter}
                placeholder="Input Letter"
            />
        </div>
    );
};
