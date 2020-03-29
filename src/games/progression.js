import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (start, step) => {
  const coll = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextNumber = start + step * i;
    coll.push(nextNumber);
  }
  return coll;
};

const makeQuestion = (progression, missingPositon) => {
  let result = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === missingPositon) {
      result = `${result}.. `;
    } else {
      result = `${result}${progression[i]} `;
    }
  }
  return result;
};

const getGameData = () => {
  const startingNumber = getRandomNumber(1, 100);
  const progressionStep = (startingNumber < 70) ? getRandomNumber(2, 7) : -getRandomNumber(2, 7);
  const progression = makeProgression(startingNumber, progressionStep);
  const missingPositon = getRandomNumber(0, progressionLength - 1);
  const rightAnswer = progression[missingPositon].toString();
  const question = makeQuestion(progression, missingPositon);
  const gameData = { rightAnswer, question };
  return gameData;
};

export default () => playGame(gameDescription, getGameData);
