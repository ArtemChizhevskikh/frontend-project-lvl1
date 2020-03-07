import readlineSync from 'readline-sync';
import evenGame from './games/even.js';
import calcGame from './games/calc.js';

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  // eslint-disable-next-line consistent-return
  const play = (message) => {
    switch (message) {
      case 'brain-games':
        break;
      case 'evenGame':
        return evenGame(name);
      case 'calcGame':
        return calcGame(name);
      default:
        throw new Error(`Unknown game '${message}'`);
    }
  };
  return play(game);
};
