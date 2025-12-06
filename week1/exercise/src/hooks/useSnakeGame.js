import { useState, useEffect, useCallback } from 'react';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const INITIAL_FOOD = { x: 15, y: 15 };
const GAME_SPEED = 150;

export const useSnakeGame = () => {
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [food, setFood] = useState(INITIAL_FOOD);
    const [isGameOver, setIsGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Generate random food position
    const generateFood = useCallback(() => {
        return {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE)
        };
    }, []);

    // Check collision with walls or self
    const checkCollision = useCallback((head, snakeBody) => {
        // Wall collision
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
            return true;
        }
        // Self collision
        return snakeBody.some(segment => head.x === segment.x && head.y === segment.y);
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

    // Change direction
    const changeDirection = useCallback((newDirection) => {
        if (isGameOver) return;

        // Prevent reversing direction
        if (direction.x !== 0 && newDirection.x !== 0) return;
        if (direction.y !== 0 && newDirection.y !== 0) return;

        setDirection(newDirection);
    }, [direction, isGameOver]);

    // Toggle pause
    const togglePause = useCallback(() => {
        if (!isGameOver) {
            setIsPaused(prev => !prev);
        }
    }, [isGameOver]);

    // Reset game
    const resetGame = useCallback(() => {
        setSnake(INITIAL_SNAKE);
        setDirection(INITIAL_DIRECTION);
        setFood(INITIAL_FOOD);
        setIsGameOver(false);
        setScore(0);
        setIsPaused(false);
    }, []);

    // Game loop
    useEffect(() => {
        const gameLoop = setInterval(moveSnake, GAME_SPEED);
        return () => clearInterval(gameLoop);
    }, [moveSnake]);

    return {
        snake,
        food,
        score,
        isGameOver,
        isPaused,
        changeDirection,
        togglePause,
        resetGame
    };
};

export { GRID_SIZE };
