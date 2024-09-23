import { useCallback, useEffect, useState } from 'react';

import {
  addNew,
  generateEmptyGrid,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
} from '../utils/gameLogic';

export type Tile = number | null;

export const useGame = () => {
  const [grid, setGrid] = useState<Tile[][]>(generateEmptyGrid);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let newGrid = addNew(generateEmptyGrid());
    newGrid = addNew(newGrid);
    setGrid(newGrid);
  }, []);

  const updateScore = useCallback((points: number) => {
    setScore((prevScore) => prevScore + points);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      let newGrid: Tile[][] = [...grid.map((row) => [...row])];
      let canMove = false;

      switch (e.key) {
        case 'ArrowLeft': {
          const leftResult = moveLeft(grid, updateScore);
          newGrid = leftResult.newGrid;
          canMove = leftResult.canMove;
          break;
        }
        case 'ArrowRight': {
          const rightResult = moveRight(grid, updateScore);
          newGrid = rightResult.newGrid;
          canMove = rightResult.canMove;
          break;
        }
        case 'ArrowUp': {
          const upResult = moveUp(grid, updateScore);
          newGrid = upResult.newGrid;
          canMove = upResult.canMove;
          break;
        }
        case 'ArrowDown': {
          const downResult = moveDown(grid, updateScore);
          newGrid = downResult.newGrid;
          canMove = downResult.canMove;
          break;
        }
        default:
          return;
      }

      if (canMove) {
        newGrid = addNew(newGrid);
        setGrid(newGrid);
      }
    },
    [grid, updateScore],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return { grid, score };
};
