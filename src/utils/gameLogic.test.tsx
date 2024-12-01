import { describe, expect, test } from 'vitest';

import type { Tile } from '../hooks/useGame';
import { addNew, generateEmptyGrid } from './gameLogic';

describe('addNew function', () => {
  test('should add a new number (2 or 4) to an empty grid', () => {
    const grid = generateEmptyGrid();
    const updatedGrid = addNew(grid);

    // 빈 그리드 중 하나의 셀이 채워져야 함
    const filledTiles = updatedGrid.flat().filter((tile) => tile !== null);
    expect(filledTiles.length).toBe(1);
    expect([2, 4]).toContain(filledTiles[0]);
  });

  test('should add a new number to a partially filled grid', () => {
    const grid: Tile[][] = generateEmptyGrid();
    if (grid[0] !== undefined && grid[0][0] !== undefined) {
      grid[0][0] = 2;
    }

    const updatedGrid = addNew(grid);

    // 기존에 채워진 셀 외에 하나의 셀이 더 채워져야 함
    const filledTiles = updatedGrid.flat().filter((tile) => tile !== null);
    expect(filledTiles.length).toBe(2);
  });

  // 기존의 숫자는 그대로 있어야 함
  test('should not modify non-empty cells', () => {
    const grid: Tile[][] = generateEmptyGrid();

    if (grid[0] !== undefined && grid[0][0] !== undefined) {
      grid[0][0] = 2;
    }

    const updatedGrid = addNew(grid);

    if (updatedGrid[0] !== undefined && updatedGrid[0][0] !== undefined) {
      expect(updatedGrid[0][0]).toBe(2);
    }
  });

  test('should return the same grid if no empty cells are available', () => {
    const fullGrid: Tile[][] = Array.from({ length: 4 }, () =>
      Array.from({ length: 4 }, () => 2),
    );

    const updatedGrid = addNew(fullGrid);

    // 그리드가 변경되지 않아야 함
    expect(updatedGrid).toEqual(fullGrid);
  });
});
