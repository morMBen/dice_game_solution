import { useState } from 'react';
import './App.css';
import GameScreen from './components/GameScreen/GameScreen';
import OpeningScreen from './components/OpeningScreen/OpeningScreen';

function App() {
  const [winningScore, setWinnersScore] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className='App'>
      {!isPlaying && (
        <OpeningScreen
          winningScore={winningScore}
          setWinnersScore={setWinnersScore}
          setIsPlaying={setIsPlaying}
        />
      )}
      {isPlaying && (
        <GameScreen
          winningScore={winningScore}
          playersArr={['Player 1', 'Player 2']}
          setIsPlaying={setIsPlaying}
        />
      )}
    </div>
  );
}

export default App;
