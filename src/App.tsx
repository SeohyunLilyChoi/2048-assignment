import './App.css';

import joystick from './assets/joystick.png';
import stars from './assets/stars.png';
import { Grid } from './component/Grid';
import { useGame } from './hooks/useGame';

const App = () => {
  const { grid, score, isGameEnded, isWin, resetGame } = useGame();

  return (
    <div className="flex justify-center items-center min-h-screen bg-primary-bg text-white">
      <div className="text-center font-sans bg-primary-bg text-white min-h-screen">
        <h1 className="mt-[10%] text-orange-400 text-2xl">2048 Game</h1>
        <div className="score-board text-xl mb-5">Score: {score}</div>
        <Grid grid={grid} />
        {isGameEnded && (
          <div className="absolute inset-0 flex justify-center items-center bg-black/50">
            <div className="text-center">
              <h2
                className={`text-3xl font-bold mb-5 ${isWin ? 'text-light-color' : 'text-high-light'}`}
              >
                {isWin ? 'You Win!' : 'Game Over'}
              </h2>
              <p className="text-xl mb-5 text-white">
                Your final score: {score}
              </p>
              <button
                onClick={resetGame}
                className="text-light-color bg-orange-400 px-5 py-2 rounded-button text-lg hover:bg-orange-600"
              >
                Play Again
              </button>
            </div>
          </div>
        )}

        <div className="rule flex justify-center mb-2">
          <img src={stars} alt="Stars" className="w-6 mr-2" />
          <p>Join tiles with the same value to get 128</p>
        </div>
        <div className="rule flex justify-center">
          <img src={joystick} alt="Joystick" className="w-6 mr-2" />
          <p>Play with arrow keys</p>
        </div>
      </div>
    </div>
  );
};

export default App;
