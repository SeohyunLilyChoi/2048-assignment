import './App.css';

import { Grid } from './component/Grid';
import { useGame } from './hooks/useGame';

const App = () => {
  const { grid } = useGame();

  return (
    <div className="App">
      <h1>2048 Game</h1>
      <Grid grid={grid} />
    </div>
  );
};

export default App;
