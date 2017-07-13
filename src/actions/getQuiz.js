import { GET_QUIZ } from './const';

function action(quiz) {
  return { type: GET_QUIZ, quiz };
}

module.exports = action;
