/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { SELECT_ANSWER, CLEAR_SELECTED_ANSWERS } from '../actions/const';

const initialState = {};

function reducer(state = initialState, action) {

  switch (action.type) {
    
    case SELECT_ANSWER: {
      let nextState = Object.assign({},state);
      let selectedAnswers = nextState[action.questionId] || {};
      selectedAnswers[action.selectedAnswerId] = !selectedAnswers[action.selectedAnswerId];
      nextState[action.questionId] = selectedAnswers;
      return nextState;
    }

    case CLEAR_SELECTED_ANSWERS: {
      let nextState = Object.assign({},state);;
      nextState[action.questionId] = {};
      return nextState;
    }
    
    default: {
      return state;
    }
  }
}

module.exports = reducer;
