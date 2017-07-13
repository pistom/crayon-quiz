import { SELECT_ANSWER } from './const';

function action(questionId, selectedAnswerId) {
  return { type: SELECT_ANSWER, questionId, selectedAnswerId };
}

module.exports = action;
