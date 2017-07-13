import { CLEAR_SELECTED_ANSWERS } from './const';

function action(questionId) {
  return { type: CLEAR_SELECTED_ANSWERS, questionId };
}

module.exports = action;
