import { GET_CORRECT_ANSWERS } from './const';

function action(correctAnswers) {
  return { type: GET_CORRECT_ANSWERS, correctAnswers };
}

module.exports = action;
