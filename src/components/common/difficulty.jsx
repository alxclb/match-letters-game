import React, {useState} from 'react';


export const Difficulty = ()=>{

    const [difficulty, setDifficulty] = useState('easy');

    function getValue(e){
        let val = e.target.value;
        setDifficulty(val)
    }
    console.log(difficulty, 'Difficulty')

    return (
        <div className="difficulty" onChange={getValue}>
            <label htmlFor="easy">Easy</label>
            <input type="radio" name="diff" id="easy" value='easy' defaultChecked />
            <label htmlFor="medium">Medium</label>
            <input type="radio" name="diff" id="medium" value='medium'/>
            <label htmlFor="hard">Hard</label>
            <input type="radio" name="diff" id="hard" value='hard'/>
        </div>
    )
}