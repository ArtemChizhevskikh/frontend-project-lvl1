import playGame from '../index.js';
import randomNumber from '../utils.js';

const makeProgression = (start, step) => {
  const coll = [start];
  for (let i = 1; i < 10; i += 1) {
    const nextNumber = coll[i - 1] + step;
    coll.push(nextNumber);
  }
  return coll;
};

const makeQuestion = (progressionColl, missingIndex) => {
  let result = '';
  for (let i = 0; i < progressionColl.length; i += 1) {
    if (i === missingIndex) {
      result += '.. ';
    } else {
      result += `${progressionColl[i]} `;
    }
  }
  return result;
};

export default () => {
  const gameRules = 'What number is missing in the progression?';
  const progressionGame = () => {
    const startingNumber = randomNumber(1, 100);
    const progressionStep = (startingNumber < 70) ? randomNumber(2, 7) : -randomNumber(2, 7);
    const progression = makeProgression(startingNumber, progressionStep);
    const missingPositon = randomNumber(1, 8);
    const rightAnswer = progression[missingPositon].toString();
    const question = makeQuestion(progression, missingPositon);
    const params = { rightAnswer, question };
    return params;
  };
  return playGame(gameRules, progressionGame);
};
