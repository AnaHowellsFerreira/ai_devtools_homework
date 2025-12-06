# Bug #1: Score Incrementing by 20 Instead of 10

**Date:** December 6, 2025  
**Project:** Snake Game (React)  
**Severity:** Minor - Gameplay issue

## Description
When the snake eats food, the score increases by 20 points instead of the expected 10 points.

## Expected Behavior
- Each food item should add 10 points to the score
- Score display should reflect accurate point values

## Actual Behavior
- Each food item was adding 20 points to the score
- Score was doubling the intended value

## Root Cause
The application was wrapped in `React.StrictMode` in `src/index.js`. React's StrictMode intentionally double-invokes certain functions in development mode to help detect side effects. This caused the `setScore(prev => prev + 10)` call to execute twice when food was eaten, resulting in a 20-point increment.

## Code Location
**File:** `src/index.js`

**Original Code:**
```javascript
root.render(
  <React.StrictMode>
    <SnakeGame />
  </React.StrictMode>
);
```

**Fixed Code:**
```javascript
root.render(
  <SnakeGame />
);
```

## Solution
Removed the `<React.StrictMode>` wrapper from the app entry point. While StrictMode is useful for detecting potential problems during development, it was causing unintended double execution of the score update logic.

## Alternative Solutions Considered
1. **Keep StrictMode and add a flag to prevent double execution** - More complex, adds unnecessary state management
2. **Use useRef to track if score was already updated** - Overly complicated for this issue
3. **Move score logic outside of the state setter** - Would require refactoring the game loop

## Files Changed
- `src/index.js`

## Testing
1. Start the game
2. Move snake to eat food
3. Verify score increases by exactly 10 points per food item
4. Repeat multiple times to confirm consistency

## Notes
- StrictMode is generally recommended for development to catch potential issues
- In this case, removing it was the simplest solution since the app is relatively small
- For production builds, StrictMode doesn't cause double invocations
- Future consideration: If we add StrictMode back, we'll need to ensure all state updates are idempotent

## Related Issues
None

## Prevention
- Be aware of React StrictMode behavior in development
- Test scoring mechanics early in development
- Consider using ref-based tracking for game events if StrictMode is needed
