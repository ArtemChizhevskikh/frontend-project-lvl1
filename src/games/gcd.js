import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return findGcd(b, a % b);
};

const getGameData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const rightAnswer = findGcd(num1, num2).toString();
  const question = `${num1} ${num2}`;
  const gameData = { rightAnswer, question };
  return gameData;
};

export default () => playGame(gameDescription, getGameData);
