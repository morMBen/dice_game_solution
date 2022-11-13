import React, { useState } from 'react';
import Dice from '../Dice/Dice';
import './Board.css';
function Board({ handleRoll, handleHold, restart, setIsPlaying }) {
  const [isRolling, setIsRolling] = useState(false);
  return (
    <div className='board'>
      <div className='board__container'>
        <div>
          <button onClick={() => !isRolling && restart()}>Restart</button>
          <button className='exit' onClick={() => !isRolling && setIsPlaying(false)}>
            Exit
          </button>
        </div>
        <Dice
          numOfDice={2}
          handleRoll={(diceRes) => !isRolling && handleRoll(diceRes)}
          isRolling={isRolling}
          setIsRolling={setIsRolling}
        />
        <button onClick={() => !isRolling && handleHold()}>Hold</button>
      </div>
    </div>
  );
}

export default Board;
