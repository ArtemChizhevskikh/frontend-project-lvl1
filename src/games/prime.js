import randomNumber from '../random.js';

export default () => {
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
