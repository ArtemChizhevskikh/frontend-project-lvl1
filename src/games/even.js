import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => (num % 2 === 0);

const getGameData = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  const gameData = { rightAnswer, question };
  return gameData;
};

export default () => playGame(gameDescription, getGameData);
