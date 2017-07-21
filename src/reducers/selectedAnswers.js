import { SELECT_ANSWER, CLEAR_SELECTED_ANSWERS } from '../actions/const';

const initialState = {};

function reducer(state = initialState, action) {

  switch (action.type) {

    case SELECT_ANSWER: {
      const nextState = Object.assign({}, state);
      const selectedAnswers = nextState[action.questionId] || {};
      selectedAnswers[action.selectedAnswerId] = !selectedAnswers[action.selectedAnswerId];
      nextState[action.questionId] = selectedAnswers;
      return nextState;
    }

    case CLEAR_SELECTED_ANSWERS: {
      const nextState = Object.assign({}, state);
      nextState[action.questionId] = {};
      return nextState;
    }

    default: {
      return state;
    }
  }
}

module.exports = reducer;
