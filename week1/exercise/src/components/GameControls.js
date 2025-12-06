import React from 'react';

const GameControls = ({ onReset }) => {
    return (
        <div className="controls">
            <p>Use Arrow Keys to move</p>
            <p>Press SPACE to pause</p>
            <button onClick={onReset}>Restart Game</button>
        </div>
    );
};

export default GameControls;
