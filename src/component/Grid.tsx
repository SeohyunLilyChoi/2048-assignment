import type { Tile } from '../hooks/useGame';
import { TileComponent } from './Tile';

type GridProps = {
  grid: Tile[][];
};

export const Grid = ({ grid }: GridProps) => {
  return (
    <div className="grid">
      {grid.map((row, i) => (
        <div key={i} className="row">
          {row.map((tile, j) => (
            <TileComponent key={j} value={tile} />
          ))}
        </div>
      ))}
    </div>
  );
};
