import React, { useContext } from 'react';
import { ScoreContext } from '../../score-context';


export const Score = ()=>{
    let {score} = useContext(ScoreContext)
    return (
        <div className="score">
            <h2>Score</h2>
            <div className="green-score"><span>Hit:</span><span>{score.hit}</span></div>
            <div className="red-score"><span>Miss:</span><span>{score.miss}</span></div>
            <div className="purple-score"><span>Left:</span><span>{score.left}</span></div>
        </div>
    )
}