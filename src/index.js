import readlineSync from 'readline-sync';


export default (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);

  let rightAnswers = 0;
  while (rightAnswers < 3) {
    const gameData = getGameData();
    console.log(`Question: ${gameData.question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== gameData.rightAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${gameData.rightAnswer}".`);
      console.log(`Let's try again, ${playerName}`);
      rightAnswers = 0;
    } else {
      console.log('Correct!');
      rightAnswers += 1;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
