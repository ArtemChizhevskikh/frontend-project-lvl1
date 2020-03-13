import { greeting, randomNumber, playGame } from '../index.js';

export default () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const gameParams = () => {
    const number = randomNumber(1, 100);
    const isEven = (num) => (num % 2) === 0;
    const rightAnswer = (isEven(number)) ? 'yes' : 'no';
    const question = number;
    const coll = { rightAnswer, question };
    return coll;
  };
  return playGame(name, gameParams);
};
