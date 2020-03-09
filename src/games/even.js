import randomNumber from '../random.js';


export default () => {
  const number = randomNumber(1, 100);
  const isEven = (num) => (num % 2) === 0;
  const rightAnswer = (isEven(number)) ? 'yes' : 'no';
  const question = number;
  const coll = { rightAnswer, question };
  return coll;
};
