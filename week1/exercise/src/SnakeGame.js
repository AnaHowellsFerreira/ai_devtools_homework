import React, { useState, useEffect, useCallback } from 'react';
import './SnakeGame.css';

const GRID_SIZE = 20;
const CELL_SIZE = 25;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const INITIAL_FOOD = { x: 15, y: 15 };
const GAME_SPEED = 150;

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Generate random food position
  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
    return newFood;
  }, []);

  // Check collision with walls or self
  const checkCollision = useCallback((head, snakeBody) => {
    // Wall collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    // Self collision
    for (let segment of snakeBody) {
      if (head.x === segment.x && head.y === segment.y) {
        return true;
      }
    }
    return false;
  }, []);

  // Move snake
  const moveSnake = useCallback(() => {
    if (isGameOver || isPaused) return;

    setSnake(prevSnake => {
      const newHead = {
        x: prevSnake[0].x + direction.x,
        y: prevSnake[0].y + direction.y
      };

      // Check collision
      if (checkCollision(newHead, prevSnake)) {
        setIsGameOver(true);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check if food is eaten
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood());
      } else {
        newSnake.pop(); // Remove tail if no food eaten
      }

      return newSnake;
    });
  }, [direction, food, isGameOver, isPaused, checkCollision, generateFood]);

  // Handle keyboard input
  const handleKeyPress = useCallback((e) => {
    if (isGameOver) return;

    switch (e.key) {
      case 'ArrowUp':
        if (direction.y === 0) setDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
        if (direction.y === 0) setDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
        if (direction.x === 0) setDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
        if (direction.x === 0) setDirection({ x: 1, y: 0 });
        break;
      case ' ':
        setIsPaused(prev => !prev);
        break;
      default:
        break;
    }
  }, [direction, isGameOver]);

  // Game loop
  useEffect(() => {
    const gameLoop = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameLoop);
  }, [moveSnake]);

  // Add keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // Reset game
  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(INITIAL_FOOD);
    setIsGameOver(false);
    setScore(0);
    setIsPaused(false);
  };

  // Render grid
  const renderGrid = () => {
    const cells = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
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
    <div className="game-container">
      <h1>Snake Game</h1>
      <div className="score-board">
        <div className="score">Score: {score}</div>
        <div className="high-score">Length: {snake.length}</div>
      </div>
      
      <div
        className="game-board"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE
        }}
      >
        {renderGrid()}
        {isGameOver && (
          <div className="game-over-overlay">
            <h2>Game Over!</h2>
            <p>Final Score: {score}</p>
            <button onClick={resetGame}>Play Again</button>
          </div>
        )}
        {isPaused && !isGameOver && (
          <div className="pause-overlay">
            <h2>Paused</h2>
            <p>Press SPACE to continue</p>
          </div>
        )}
      </div>

      <div className="controls">
        <p>Use Arrow Keys to move</p>
        <p>Press SPACE to pause</p>
        <button onClick={resetGame}>Restart Game</button>
      </div>
    </div>
  );
};

export default SnakeGame;
