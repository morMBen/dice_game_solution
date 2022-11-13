export const setArrOfPlayers = (arrOfNames) => {
  return arrOfNames.map((p) => {
    return { name: p, score: 0, current: 0 };
  });
};

export const getRandomDice = (dice) => {
  return dice.map((d) => Math.floor(Math.random() * 6) + 1);
};

export const sumArrOfNum = (arrOfNum) => {
  return arrOfNum.reduce((a, b) => a + b, 0);
};

export const isInclude66 = (arrOfNum) =>
  !arrOfNum.reduce((acc, current) => {
    if (current === 6) {
      return acc - 1;
    }
    return acc;
  }, 2);

export const checkWinner = (total, winningScore, players, currentPlayerIndex) => {
  if (total > winningScore) {
    const arrWithoutLoser = [
      ...players.slice(0, currentPlayerIndex),
      ...players.slice(currentPlayerIndex + 1, players.length),
    ];
    let largest = 0;
    for (let i = 0; i < arrWithoutLoser.length; i++) {
      if (arrWithoutLoser[i].score > largest) {
        largest = arrWithoutLoser[i].score;
      }
    }
    let winners = arrWithoutLoser.filter((p) => p.score === largest);
    console.log(winners);
    console.log(winners.map((w) => w.name + ' ') + ' won');
    //   console.log(players[currentPlayerIndex].name + ' lose');
    return;
  }
  if (total === winningScore) {
    console.log(players[currentPlayerIndex].name + ' won');
    return;
  }
};
