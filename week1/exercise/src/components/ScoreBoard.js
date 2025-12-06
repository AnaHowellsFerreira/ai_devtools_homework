import React from 'react';

const ScoreBoard = ({ score, snakeLength }) => {
    return (
        <div className="score-board">
            <div className="score">Score: {score}</div>
            <div className="high-score">Length: {snakeLength}</div>
        </div>
    );
};

export default ScoreBoard;
