import { useState } from 'react';
import { getRandomDice } from '../../utils';
import './Dice.css';

function Dice({ numOfDice, handleRoll, isRolling, setIsRolling }) {
  const [dice, setDice] = useState(Array(numOfDice).fill(6));

  const rollDice = () => {
    setIsRolling(true);
    let diceRes = dice;
    const intervalID = setInterval(() => {
      diceRes = getRandomDice(dice);
      setDice(diceRes);
    }, 100);
    setTimeout(() => {
      clearInterval(intervalID);
      handleRoll(diceRes);
      setIsRolling(false);
      return diceRes;
    }, 1000);
  };
  const insertDie = () => {
    return dice.map((d, index) => <img key={index} src={`./assets/dice-${d}.png`} alt='dice' />);
  };
  return (
    <>
      <div className='dice_container'>{insertDie()}</div>
      <button onClick={() => !isRolling && rollDice()}>Roll</button>
    </>
  );
}

export default Dice;
