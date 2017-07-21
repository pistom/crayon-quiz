/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import getAnswers from '../actions/quiz/getAnswers.js';
import getQuiz from '../actions/quiz/getQuiz.js';
import clearSelectedAnswers from '../actions/clearSelectedAnswers.js';
import getCorrectAnswers from '../actions/getCorrectAnswers.js';
import selectAnswer from '../actions/selectAnswer.js';
import finishQuiz from '../actions/quiz/finishQuiz.js';
import changeQuestion from '../actions/quiz/changeQuestion.js';
const actions = {
  changeQuestion,
  finishQuiz,
  selectAnswer,
  getCorrectAnswers,
  clearSelectedAnswers,
  getQuiz,
  getAnswers
};
module.exports = actions;
