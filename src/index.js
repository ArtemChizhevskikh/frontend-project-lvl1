import readlineSync from 'readline-sync';
import evenGame from './games/even.js';
import calcGame from './games/calc.js';

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let rightAnswers = 0;
  let playGame;
  switch (game) {
    case 'brain-games':
      return null;
    case 'evenGame':
      console.log('Answer "yes" if the number is even, otherwise answer "no"');
      playGame = () => evenGame();
      break;
    case 'calcGame':
      console.log('What is the result of the expression?');
      playGame = () => calcGame();
      break;
    default:
      throw new Error(`Unknown game '${game}'`);
  }
  while (rightAnswers < 3) {
    const coll = playGame();
    console.log(`Question: ${coll.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === coll.rightAnswer) {
      console.log('Correct!');
      rightAnswers += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${coll.rightAnswer}."`);
      console.log(`Let's try again, ${name}`);
      rightAnswers = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return null;
};
