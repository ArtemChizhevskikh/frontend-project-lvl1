import { greeting, randomNumber, playGame } from '../index.js';

export default () => {
  const name = greeting();
  console.log('What number is missing in the progression?');
  const gameParams = () => {
    const startingNumber = randomNumber(1, 100);
    const progressionStep = (startingNumber < 70) ? randomNumber(2, 7) : -randomNumber(2, 7);
    const makeProgression = (start, step) => {
      const coll = [start];
      for (let i = 1; i < 10; i += 1) {
        const nextNumber = coll[i - 1] + step;
        coll.push(nextNumber);
      }
      return coll;
    };
    const progression = makeProgression(startingNumber, progressionStep);
    const missingPositon = randomNumber(1, 8);
    const rightAnswer = `${progression[missingPositon]}`;
    const makeQuestion = (arr, missingIndex) => {
      let result = '';
      for (let i = 0; i < arr.length; i += 1) {
        if (i === missingIndex) {
          result += '.. ';
        } else {
          result += `${arr[i]} `;
        }
      }
      return result;
    };
    const question = makeQuestion(progression, missingPositon);
    const params = { rightAnswer, question };
    return params;
  };
  return playGame(name, gameParams);
};
