import playGame from '../index.js';
import randomNumber from '../utils.js';

const isEven = (num) => (num % 2) === 0;

export default () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no"';
  const evenGame = () => {
    const number = randomNumber(1, 100);
    const rightAnswer = (isEven(number)) ? 'yes' : 'no';
    const question = number;
    const coll = { rightAnswer, question };
    return coll;
  };
  return playGame(gameRules, evenGame);
};
