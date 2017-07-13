import { CHANGE_QUESTION } from './../const';

function action(id) {
  return { type: CHANGE_QUESTION, id };
}

module.exports = action;
