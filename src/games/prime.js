import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = getRandomNumber(2, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  const gameData = { rightAnswer, question };
  return gameData;
};

export default () => playGame(gameDescription, getGameData);
