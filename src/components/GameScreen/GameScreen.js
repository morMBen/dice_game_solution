import { useState } from 'react';
import { setArrOfPlayers, sumArrOfNum } from '../../utils';
import Board from '../Board/Board';
import Player from '../Player/Player';
import './GameScreen.css';

function GameScreen({ winningScore, playersArr, setIsPlaying }) {
  const [players, setPlayers] = useState(setArrOfPlayers(playersArr));
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const restart = () => {
    setPlayers(setArrOfPlayers(playersArr));
    setCurrentPlayerIndex(0);
  };

  const handleRoll = (diceRes) => {
    const diceSum = sumArrOfNum(diceRes);
    setPlayers((prev) =>
      prev.map((p, index) => {
        if (index === currentPlayerIndex) {
          return { ...p, current: p.current + diceSum };
        } else {
          return p;
        }
      })
    );
  };

  const checkWinner = (total) => {
    if (total > winningScore) {
      console.log(players[currentPlayerIndex].name + ' lose');
      setIsPlaying(false);
    }
    if (total === winningScore) {
      console.log(players[currentPlayerIndex].name + ' won');
      setIsPlaying(false);
    }
  };
  const handleHold = () => {
    const totalScore = players[currentPlayerIndex].current + players[currentPlayerIndex].score;
    setPlayers((prev) =>
      prev.map((p, index) => {
        if (index === currentPlayerIndex) {
          return { ...p, score: p.score + p.current, current: 0 };
        } else {
          return p;
        }
      })
    );
    checkWinner(totalScore);
    setCurrentPlayerIndex((prev) => {
      return prev + 1 === players.length ? 0 : prev + 1;
    });
  };

  const insertPlayers = () => {
    return players.map(({ name, score, current }, index) => (
      <Player
        key={`${name + index}`}
        name={name}
        score={score}
        current={current}
        isPlaying={currentPlayerIndex === index}
      />
    ));
  };

  return (
    <div className='game_screen'>
      {insertPlayers()}
      <Board
        handleHold={handleHold}
        handleRoll={handleRoll}
        restart={restart}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default GameScreen;
