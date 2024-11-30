type TileProps = {
  value: number | null;
};

export const TileComponent = ({ value }: TileProps) => {
  const tileValue = value !== null ? value.toString() : '';
  const tileColors: Record<string, string> = {
    '2': 'bg-2-bg text-highlight-color text-2xl',
    '4': 'bg-4-bg text-highlight-color text-2xl',
    '8': 'bg-8-bg text-text-light text-2xl',
    '16': 'bg-16-bg text-text-light text-2xl',
    '32': 'bg-32-bg text-text-light text-2xl',
    '64': 'bg-64-bg text-text-light text-2xl',
    '128': 'bg-128-bg text-text-light text-lg',
    '256': 'bg-256-bg text-text-light text-lg',
    '512': 'bg-521-bg text-text-light text-lg',
    '1024': 'bg-1024-bg text-text-light text-base',
    '2048': 'bg-2024-bg text-text-light text-base',
  };

  const tileClass =
    tileValue !== '' ? (tileColors[tileValue] ?? 'bg-tile-bg') : 'bg-tile-bg';

  return (
    <div
      className={`tile w-20 h-20 m-1 flex justify-center items-center font-bold rounded-tile transition-all ${tileClass}`}
      data-value={tileValue}
    >
      {tileValue}
    </div>
  );
};
