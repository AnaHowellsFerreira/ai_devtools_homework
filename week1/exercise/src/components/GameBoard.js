import React from 'react';

const CELL_SIZE = 25;

const GameBoard = ({ gridSize, snake, food, isGameOver, isPaused, score, onReset }) => {
    const renderGrid = () => {
        const cells = [];
        for (let y = 0; y < gridSize; y++) {
            for (let x = 0; x < gridSize; x++) {
                const isSnake = snake.some(segment => segment.x === x && segment.y === y);
                const isSnakeHead = snake[0].x === x && snake[0].y === y;
                const isFood = food.x === x && food.y === y;

                let className = 'cell';
                if (isSnakeHead) className += ' snake-head';
                else if (isSnake) className += ' snake';
                if (isFood) className += ' food';

                cells.push(
                    <div
                        key={`${x}-${y}`}
                        className={className}
                        style={{
                            width: CELL_SIZE,
                            height: CELL_SIZE
                        }}
                    />
                );
            }
        }
        return cells;
    };

    return (
        <div
            className="game-board"
            style={{
                width: gridSize * CELL_SIZE,
                height: gridSize * CELL_SIZE
            }}
        >
            {renderGrid()}
            {isGameOver && (
                <div className="game-over-overlay">
                    <h2>Game Over!</h2>
                    <p>Final Score: {score}</p>
                    <button onClick={onReset}>Play Again</button>
                </div>
            )}
            {isPaused && !isGameOver && (
                <div className="pause-overlay">
                    <h2>Paused</h2>
                    <p>Press SPACE to continue</p>
                </div>
            )}
        </div>
    );
};

export default GameBoard;
