import React, { useContext, useEffect, useState } from "react";
import { lettersList } from "../../config";
import { ScoreContext } from "../../score-context";
import { Button } from "../common/button";
import { Difficulty } from "../common/difficulty";
import { InputLetter } from "../common/input-letter";
import { Random } from "../common/random";
import { Result } from "../common/result";

export const Main = () => {
    let { score, setScore } = useContext(ScoreContext);

    const [start, setStart] = useState({ game: false, btn: "Start Game" });
    const [level, setLevel] = useState(5000);
    const [random, setRandom] = useState();
    const [letter, setLetter] = useState({ char: "", last: 0 });
    const [arr, setArr] = useState([...Array(27).keys()].slice(1));
    console.log(level);
    useEffect(() => {
        if (start.game) {
            let randomInterval = setInterval(function () {
                let newNumber = generateRandomNumber(arr);
                setRandom(newNumber);
            }, level);
            return () => {
                clearInterval(randomInterval);
            };
        }
    }, [start, arr, level]);

    //HANDLERS
    function difficultyLevel(e) {
        let val = e.target.value;
        setLevel(Number(val));
    }
    function startGame() {
        setStart((prevState) => ({
            ...prevState,
            game: !prevState.game,
            btn: prevState.btn === "Stop Game" ? "Start Game" : "Stop Game",
        }));
    }
    function checkLetter(e) {
        let el = e.target;
        let val = el.value;
        let num = findNumber(el.value);                             //find the number that corresponding to the letter
        let check = num === random ? true : false;
        console.log(check);
        let newArr = arr.filter((x) => x !== num);                  //exclude found number from an array
        setArr(newArr);                                             //set new array
        let checkList = score.list.filter(x=>x.number==num)
        console.log(checkList)
        if(checkList.length<1){
             setScore((prevState) => ({
            ...prevState,
            left: newArr.length,
            hit: check ? prevState.hit + 1 : prevState.hit,
            miss: check ? prevState.miss : prevState.miss + 1,
            list:[...prevState.list, {number:num,color:check}]
            
        }));
        }
                                                                    //data for score and list component
        setLetter((prevState) => ({
            ...prevState,
            char: val,
            last: num,
        }));
        el.value = "";                                                //clear input field
    }
    //HELPER FUNCTIONS
    function generateRandomNumber(arr) {
        let num = arr.length;
        return Math.floor(Math.random() * num + 1);
    }
    function findNumber(ch) {
        return ch && lettersList.filter((x) => x[ch])[0][ch];
    }

    return (
        <div className="main-container">
            <Difficulty onChange={difficultyLevel} />
            <Button
                className="start-btn"
                name={start.btn}
                onClick={startGame}
            />
            <Random number={random} />
            <InputLetter onKeyPress={checkLetter} placeholder="Input Letter" />
            <Result data={letter} />
        </div>
    );
};
