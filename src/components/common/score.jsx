import React from 'react';


export const Score = ({hit, miss, left})=>{
    return (
        <div className="score">
            <h2>Score</h2>
            <div><span>Hit:</span><span>{hit}</span></div>
            <div><span>Miss</span><span>{miss}</span></div>
            <div><span>Left</span><span>{left}</span></div>
        </div>
    )
}