import { greeting, randomNumber, playGame } from '../index.js';

export default () => {
  const name = greeting();
  console.log('What is the result of the expression?');
  const gameParams = () => {
    const operators = ['+', '-', '*'];
    const number1 = randomNumber(1, 20);
    const number2 = randomNumber(1, 20);
    const randomOperator = operators[randomNumber(1, 3) - 1];
    const randomOperation = (num1, num2, message) => {
      switch (message) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        default:
          throw new Error(`Unknown operator '${message}'`);
      }
    };
    const rightAnswer = `${randomOperation(number1, number2, randomOperator)}`;
    const question = `${number1} ${randomOperator} ${number2}`;
    const coll = { rightAnswer, question };
    return coll;
  };
  return playGame(name, gameParams);
};
