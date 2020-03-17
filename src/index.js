import readlineSync from 'readline-sync';


export default (rules, func) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
  let rightAnswers = 0;
  const cycle = () => {
    const coll = func();
    console.log(`Question: ${coll.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== coll.rightAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${coll.rightAnswer}".`);
      console.log(`Let's try again, ${name}`);
      rightAnswers = 0;
      return;
    }
    console.log('Correct!');
    rightAnswers += 1;
  };
  while (rightAnswers < 3) {
    cycle();
  }
  console.log(`Congratulations, ${name}!`);
};
