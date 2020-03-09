import randomNumber from '../random.js';

export default () => {
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
