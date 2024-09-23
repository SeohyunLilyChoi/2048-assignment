import { useEffect, useState } from 'react';

import { addNew, generateEmptyGrid } from '../utils/gameLogic';

export type Tile = number | null;

export const useGame = () => {
  const [grid, setGrid] = useState<Tile[][]>(generateEmptyGrid);

  useEffect(() => {
    let newGrid = addNew(generateEmptyGrid());
    newGrid = addNew(newGrid);
    setGrid(newGrid);
  }, []);

  return { grid };
};
