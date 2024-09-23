import type { Tile } from '../hooks/useGame';

export const generateEmptyGrid = (): Tile[][] => {
  return Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => null));
};

export const getRandomEmptyTile = (grid: Tile[][]): [number, number] | null => {
  const emptyTiles: [number, number][] = [];
  grid.forEach((row, i) => {
    row.forEach((tile, j) => {
      if (tile === null) emptyTiles.push([i, j]);
    });
  });

  if (emptyTiles.length === 0) return null; // 빈 셀이 없을 경우 null 반환

  const randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];

  return randomTile !== undefined ? randomTile : null; // undefined인 경우 null로 처리
};

export const addNew = (grid: Tile[][]): Tile[][] => {
  const newGrid: Tile[][] = grid.map((row) => [...row]);
  const newNumber = Math.random() < 0.9 ? 2 : 4; // 90% 확률로 2, 10% 확률로 4 생성
  const emptyTile = getRandomEmptyTile(newGrid); // 빈 타일 찾기

  if (emptyTile !== null) {
    const [x, y] = emptyTile;

    if (newGrid[x] !== undefined && newGrid[x][y] === null) {
      newGrid[x][y] = newNumber;
    }
  }

  return newGrid;
};
