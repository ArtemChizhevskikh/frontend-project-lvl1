import { greeting, randomNumber, playGame } from '../index.js';

export default () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const gameParams = () => {
    const number = randomNumber(2, 100);
    const isPrime = (num) => {
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
    const rightAnswer = (isPrime(number)) ? 'yes' : 'no';
    const question = number;
    const coll = { rightAnswer, question };
    return coll;
  };
  return playGame(name, gameParams);
};
