import {
  GET_QUIZ,
  CHANGE_QUESTION,
  FINISH_QUIZ,
  GET_QUIZ_FULFILLED,
  GET_QUIZ_PENDING,
  GET_QUIZ_REJECTED
} from '../actions/const';

const initialState = {
  id: undefined,
  title: undefined,
  questions: [],
  answers: [],
  current_question: null,
  finished: false,
  isLoading: true,
  loadingError: false
};

function reducer(state = initialState, action) {

  switch (action.type) {

    case GET_QUIZ_PENDING: {
      const nextState = Object.assign({}, state, { isLoading: true, loadingError: false });
      return nextState;
    }

    case GET_QUIZ_FULFILLED: {
      const nextState = Object.assign({}, state, action.payload, { isLoading: false });
      return nextState;
    }

    case GET_QUIZ_REJECTED: {
      const nextState = Object.assign({}, state, { isLoading: false, loadingError: true });
      return nextState;
    }

    case CHANGE_QUESTION: {
      const nextState = Object.assign({}, state, { current_question: action.id });
      return nextState;
    }

    case FINISH_QUIZ: {
      const nextState = Object.assign({}, state, { finished: true });
      return nextState;
    }

    default: {
      return state;
    }
  }
}

module.exports = reducer;
