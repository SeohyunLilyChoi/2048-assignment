import './App.css';

import { Grid } from './component/Grid';
import { useGame } from './hooks/useGame';

const App = () => {
  const { grid, score } = useGame();

  return (
    <div className="App">
      <h1>2048 Game</h1>
      <div className="score-board">Score: {score}</div>
      <Grid grid={grid} />
    </div>
  );
};

export default App;
