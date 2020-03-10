import readlineSync from 'readline-sync';
import evenGame from './games/even.js';
import calcGame from './games/calc.js';
import gcdGame from './games/gcd.js';
import progressionGame from './games/progression.js';
import primeGame from './games/prime.js';

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let rightAnswers = 0;
  let gameParams;
  switch (game) {
    case 'brain-games':
      return null;
    case 'evenGame':
      console.log('Answer "yes" if the number is even, otherwise answer "no"');
      gameParams = () => evenGame();
      break;
    case 'calcGame':
      console.log('What is the result of the expression?');
      gameParams = () => calcGame();
      break;
    case 'gcdGame':
      console.log('Find the greatest common divisor of given numbers.');
      gameParams = () => gcdGame();
      break;
    case 'progressionGame':
      console.log('What number is missing in the progression?');
      gameParams = () => progressionGame();
      break;
    case 'primeGame':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      gameParams = () => primeGame();
      break;
    default:
      throw new Error(`Unknown game '${game}'`);
  }


  while (rightAnswers < 3) {
    const coll = gameParams();
    console.log(`Question: ${coll.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === coll.rightAnswer) {
      console.log('Correct!');
      rightAnswers += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${coll.rightAnswer}".`);
      console.log(`Let's try again, ${name}`);
      rightAnswers = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return null;
};
