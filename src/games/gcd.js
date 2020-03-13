import { greeting, randomNumber, playGame } from '../index.js';

export default () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  const gameParams = () => {
    const number1 = randomNumber(1, 100);
    const number2 = randomNumber(1, 100);
    const findGcd = (a, b) => {
      if (!b) {
        return a;
      }
      return findGcd(b, a % b);
    };
    const rightAnswer = `${findGcd(number1, number2)}`;
    const question = `${number1} ${number2}`;
    const coll = { rightAnswer, question };
    return coll;
  };
  return playGame(name, gameParams);
};
