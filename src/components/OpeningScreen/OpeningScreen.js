import { useState } from 'react';
import './OpeningScreen.css';
function OpeningScreen({ winningScore, setWinnersScore, setIsPlaying }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [scoreInput, setScoreInput] = useState(winningScore);
  const handleConfirmScore = () => {
    if (scoreInput > 20 && scoreInput < 500 && !errorMessage) {
      setWinnersScore(scoreInput);
      setIsPlaying(true);
    } else {
      setErrorMessage(`The score is to ${scoreInput <= 20 ? 'low' : 'high'}`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 1500);
    }
  };
  return (
    <div className='opening-screen__container'>
      <div className='opening-screen'>
        <h1 className='opening-screen__title'>Dice Game</h1>
        <p>
          Dice games are games that use or incorporate one or more dice as their sole or central
          component, usually as a random device.
        </p>
        <div className='input-container'>
          <input
            type='number'
            value={scoreInput}
            onChange={({ target }) => setScoreInput(target.value)}
          />
          <button onClick={handleConfirmScore}>Start</button>
          <p>{errorMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default OpeningScreen;
