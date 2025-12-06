import React, { useEffect, useCallback } from 'react';
import './SnakeGame.css';
import { useSnakeGame, GRID_SIZE } from './hooks/useSnakeGame';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';
import GameControls from './components/GameControls';

const SnakeGame = () => {
  const {
    snake,
    food,
    score,
    isGameOver,
    isPaused,
    changeDirection,
    togglePause,
    resetGame
  } = useSnakeGame();

  // Handle keyboard input
  const handleKeyPress = useCallback((e) => {
    switch (e.key) {
      case 'ArrowUp':
        changeDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
        changeDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
        changeDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
        changeDirection({ x: 1, y: 0 });
        break;
      case ' ':
        e.preventDefault(); // Prevent page scroll
        togglePause();
        break;
      default:
        break;
    }
  }, [changeDirection, togglePause]);

  // Add keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className="game-container">
      <h1>Snake Game</h1>
      <ScoreBoard score={score} snakeLength={snake.length} />
      <GameBoard
        gridSize={GRID_SIZE}
        snake={snake}
        food={food}
        isGameOver={isGameOver}
        isPaused={isPaused}
        score={score}
        onReset={resetGame}
      />
      <GameControls onReset={resetGame} />
    </div>
  );
};

export default SnakeGame;
