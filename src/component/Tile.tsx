type TileProps = {
  value: number | null;
};

export const TileComponent = ({ value }: TileProps) => {
  const tileValue = value !== null ? value.toString() : '';

  return (
    <div className="tile" data-value={tileValue}>
      {tileValue}
    </div>
  );
};
