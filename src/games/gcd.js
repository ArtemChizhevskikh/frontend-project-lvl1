import playGame from '../index.js';
import randomNumber from '../utils.js';

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return findGcd(b, a % b);
};

export default () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const gameParams = () => {
    const num1 = randomNumber(1, 100);
    const num2 = randomNumber(1, 100);
    const rightAnswer = findGcd(num1, num2).toString();
    const question = `${num1} ${num2}`;
    const coll = { rightAnswer, question };
    return coll;
  };
  return playGame(gameRules, gameParams);
};
