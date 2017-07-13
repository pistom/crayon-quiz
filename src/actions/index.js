/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import clearSelectedAnswers from '../actions/clearSelectedAnswers.js';
import getCorrectAnswers from '../actions/getCorrectAnswers.js';
import selectAnswer from '../actions/selectAnswer.js';
import finishQuiz from '../actions/quiz/finishQuiz.js';
import changeQuestion from '../actions/quiz/changeQuestion.js';
import getQuiz from '../actions/getQuiz.js';
const actions = {
  getQuiz,
  changeQuestion,
  finishQuiz,
  selectAnswer,
  getCorrectAnswers,
  clearSelectedAnswers
};
module.exports = actions;
