type TileProps = {
  value: number | null;
};

export const TileComponent = ({ value }: TileProps) => {
  const tileValue = value !== null ? value.toString() : '';

  const tileColors: Record<string, string> = {
    '2': 'bg-gray-200 text-black text-xl',
    '4': 'bg-gray-300 text-black text-xl',
    '8': 'bg-orange-400 text-light-color text-xl',
    '16': 'bg-orange-500 text-light-color text-xl',
    '32': 'bg-orange-600 text-light-color text-xl',
    '64': 'bg-red-600 text-light-color text-xl',
    '128': 'bg-yellow-400 text-light-color text-xl',
    '256': 'bg-yellow-500 text-light-color text-xl',
    '512': 'bg-yellow-600 text-light-color text-xl',
    '1024': 'bg-yellow-700 text-light-color text-xl',
    '2048': 'bg-yellow-800 text-light-color text-xl',
  };

  const tileClass =
    tileValue !== '' ? (tileColors[tileValue] ?? 'bg-tile-bg') : 'bg-tile-bg';

  return (
    <div
      className={`tile w-20 h-20 m-1 flex justify-center items-center font-bold rounded-tile transition-all ${tileClass}`}
      data-value={tileValue !== '' ? tileValue : null}
    >
      {tileValue !== '' ? tileValue : null}
    </div>
  );
};
