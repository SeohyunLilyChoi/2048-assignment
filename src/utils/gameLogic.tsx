import type { Tile } from '../hooks/useGame';

const GridSize = 4;

export const generateEmptyGrid = (): Tile[][] => {
  return Array.from({ length: GridSize }, () =>
    Array.from({ length: GridSize }, () => null),
  );
};

const getRandomEmptyTile = (grid: Tile[][]): [number, number] | null => {
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

const slideRow = (
  row: Tile[],
  updateScore: (points: number) => void,
): Tile[] => {
  const filteredRow = row.filter((num) => num !== null);
  const newRow: Tile[] = [];
  let points = 0;

  for (let i = 0; i < filteredRow.length; i++) {
    if (filteredRow[i] === filteredRow[i + 1]) {
      const mergedValue = (filteredRow[i] ?? 0) * 2;
      newRow.push(mergedValue);
      points += mergedValue;
      i++;
    } else {
      newRow.push(filteredRow[i] ?? 0);
    }
  }
  updateScore(points);
  return newRow.concat(Array(GridSize - newRow.length).fill(null));
};

const rotateGrid = (grid: Tile[][]): Tile[][] =>
  grid.map((_, colIndex) => grid.map((row) => row[colIndex] ?? null).reverse());

export const moveLeft = (
  grid: Tile[][],
  updateScore: (points: number) => void,
): { newGrid: Tile[][]; canMove: boolean } => {
  const newGrid = grid.map((row) => slideRow(row, updateScore));
  const canMove = JSON.stringify(newGrid) !== JSON.stringify(grid);
  return { newGrid, canMove };
};

export const moveRight = (
  grid: Tile[][],
  updateScore: (points: number) => void,
): { newGrid: Tile[][]; canMove: boolean } => {
  const newGrid = grid.map((row) =>
    slideRow([...row].reverse(), updateScore).reverse(),
  );
  const canMove = JSON.stringify(newGrid) !== JSON.stringify(grid);
  return { newGrid, canMove };
};

export const moveUp = (
  grid: Tile[][],
  updateScore: (points: number) => void,
): { newGrid: Tile[][]; canMove: boolean } => {
  let newGrid = rotateGrid(grid);
  newGrid = newGrid.map((row) =>
    slideRow([...row].reverse(), updateScore).reverse(),
  );
  newGrid = rotateGrid(rotateGrid(rotateGrid(newGrid)));
  const canMove = JSON.stringify(newGrid) !== JSON.stringify(grid);
  return { newGrid, canMove };
};

export const moveDown = (
  grid: Tile[][],
  updateScore: (points: number) => void,
): { newGrid: Tile[][]; canMove: boolean } => {
  let newGrid = rotateGrid(grid);
  newGrid = newGrid.map((row) => slideRow(row, updateScore));
  newGrid = rotateGrid(rotateGrid(rotateGrid(newGrid)));
  const canMove = JSON.stringify(newGrid) !== JSON.stringify(grid);
  return { newGrid, canMove };
};
