# Feature #1: Code Refactoring - Component Architecture

**Date:** December 6, 2025  
**Project:** Snake Game (React)  
**Type:** Code Quality Improvement

## Description
Refactored the Snake Game codebase to follow React best practices by separating concerns into reusable components and a custom hook. This improves code maintainability, testability, and reusability.

## Changes Made

### 1. Custom Hook: `useSnakeGame.js`
**Location:** `src/hooks/useSnakeGame.js`

Extracted all game logic into a custom React hook that manages:
- **State Management**: snake position, direction, food location, score, game status
- **Game Logic**: collision detection, food generation, snake movement
- **Game Controls**: direction changes, pause toggle, reset functionality
- **Game Loop**: interval-based snake movement via useEffect

**Benefits:**
- Game logic is decoupled from UI components
- Logic can be reused with different UI frameworks
- Easier to test game mechanics in isolation
- Cleaner component composition

### 2. Component: `GameBoard.js`
**Location:** `src/components/GameBoard.js`

New presentational component responsible for:
- Rendering the game grid (20x20 cells)
- Displaying snake (head and body segments)
- Displaying food
- Showing game-over overlay with final score
- Showing pause overlay with instructions

**Props:**
- `gridSize`: Size of the game grid
- `snake`: Array of snake segments
- `food`: Food position object
- `isGameOver`: Boolean game state
- `isPaused`: Boolean pause state
- `score`: Current score
- `onReset`: Reset game callback

### 3. Component: `ScoreBoard.js`
**Location:** `src/components/ScoreBoard.js`

New presentational component that displays:
- Current score
- Snake length

**Props:**
- `score`: Current score
- `snakeLength`: Current length of snake

### 4. Component: `GameControls.js`
**Location:** `src/components/GameControls.js`

New presentational component that shows:
- Control instructions (Arrow keys, Space bar)
- Restart button

**Props:**
- `onReset`: Reset game callback

### 5. Main Component: `SnakeGame.js` (Refactored)
**Location:** `src/SnakeGame.js`

Updated main component that now:
- Uses the `useSnakeGame` hook for all game logic
- Handles only keyboard input
- Composes child components (GameBoard, ScoreBoard, GameControls)
- Acts as the container/smart component

## Code Structure Before vs After

### Before
```
SnakeGame.js (200+ lines)
├── State management
├── Game logic
├── Rendering
├── Keyboard handling
└── UI composition
```

### After
```
SnakeGame.js (Component composition)
├── useSnakeGame.js (Game logic hook)
├── GameBoard.js (Grid rendering)
├── ScoreBoard.js (Score display)
└── GameControls.js (Instructions & buttons)
```

## Benefits

1. **Separation of Concerns**
   - Logic in hooks
   - Presentation in components
   - Input handling in main component

2. **Reusability**
   - `useSnakeGame` hook can be used with different UIs
   - Components can be reused in other game interfaces

3. **Testability**
   - Game logic can be unit tested independently
   - Components can be tested in isolation

4. **Maintainability**
   - Smaller, focused files
   - Easier to understand and modify
   - Clear responsibility for each file

5. **Scalability**
   - Easy to add new features (leaderboard, difficulty levels, etc.)
   - Simple to extend with new game modes

## Files Modified/Created

| File | Type | Change |
|------|------|--------|
| `src/SnakeGame.js` | Modified | Refactored to use hook and child components |
| `src/hooks/useSnakeGame.js` | Created | Custom hook with game logic |
| `src/components/GameBoard.js` | Created | Grid rendering component |
| `src/components/ScoreBoard.js` | Created | Score display component |
| `src/components/GameControls.js` | Created | Instructions component |

## Functionality Preserved

✅ All game mechanics remain unchanged  
✅ Snake movement and collision detection  
✅ Food generation and scoring (10 points per food)  
✅ Pause functionality (Space key)  
✅ Direction controls (Arrow keys)  
✅ Game over detection and reset  
✅ Score and length display  

## Improvements Made

- Removed ~100 lines of inline code from main component
- Better React hook organization
- Improved code readability
- Enhanced component composition
- Cleaner separation of logic and presentation

## Testing Verification

The refactored code was tested and all features work as expected:
- ✅ Snake moves correctly with arrow keys
- ✅ Collision detection works properly
- ✅ Food spawning and eating mechanics function correctly
- ✅ Score increments by 10 points per food
- ✅ Pause and resume functionality works
- ✅ Game over and reset properly reset all state

## Related Issues/Features

- Bug #001: Score Doubling (Fixed in previous refactoring - removed React.StrictMode)
- This refactoring maintains the fix and improves code organization further

## Notes

This refactoring follows React best practices:
- Custom hooks for stateful logic
- Presentational components for UI
- Container components for orchestration
- Proper use of useCallback for dependency optimization
- Clean component composition pattern
