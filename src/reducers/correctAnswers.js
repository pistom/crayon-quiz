import {
  GET_ANSWERS_FULFILLED,
  GET_ANSWERS_PENDING,
  GET_ANSWERS_REJECTED
 } from '../actions/const';

const initialState = {
  isLoadingAnswers: true,
  loadingAnswersError: false,
  questions: undefined
};

function reducer(state = initialState, action) {

  switch (action.type) {

    case GET_ANSWERS_PENDING: {
      console.log(GET_ANSWERS_PENDING);
      const nextState = Object.assign({}, state, {
        isLoadingAnswers: true,
        loadingAnswersError: false
      });
      return nextState;
    }

    case GET_ANSWERS_FULFILLED: {
      console.log(GET_ANSWERS_FULFILLED);
      const nextState = Object.assign({}, state, action.payload, {
        isLoadingAnswers: false
      });
      return nextState;
    }

    case GET_ANSWERS_REJECTED: {
      console.log(GET_ANSWERS_REJECTED);
      const nextState = Object.assign({}, state, {
        isLoadingAnswers: false,
        loadingAnswersError: true
      });
      return nextState;
    }

    default: {
      return state;
    }
  }
}

module.exports = reducer;
