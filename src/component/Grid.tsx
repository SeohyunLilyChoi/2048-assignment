import type { Tile } from '../hooks/useGame';
import { TileComponent } from './Tile';

type GridProps = {
  grid: Tile[][];
};

export const Grid = ({ grid }: GridProps) => {
  return (
    <div className="grid bg-gray-800 rounded-md p-4 m-5">
      {grid.map((row, i) => (
        <div key={i} className="row flex">
          {row.map((tile, j) => (
            <TileComponent key={j} value={tile} />
          ))}
        </div>
      ))}
    </div>
  );
};
