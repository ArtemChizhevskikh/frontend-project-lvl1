import playGame from '../index.js';
import randomNumber from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const primeGame = () => {
    const number = randomNumber(2, 100);
    const rightAnswer = (isPrime(number)) ? 'yes' : 'no';
    const question = number;
    const coll = { rightAnswer, question };
    return coll;
  };
  return playGame(gameRules, primeGame);
};
