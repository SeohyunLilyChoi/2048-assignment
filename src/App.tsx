import './App.css';

import { Grid } from './component/Grid';
import { useGame } from './hooks/useGame';

const App = () => {
  const { grid, score, isGameEnded, isWin, resetGame } = useGame();

  return (
    <div className="App">
      <h1>2048 Game</h1>
      <div className="score-board">Score: {score}</div>
      <Grid grid={grid} />
      {isGameEnded && (
        <div className={`game-end ${isWin ? 'win' : 'lose'}`}>
          <h2>{isWin ? 'You Win!' : 'Game Over'}</h2>
          <p>Your final score: {score}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default App;
