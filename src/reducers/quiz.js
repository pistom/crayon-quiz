/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {GET_QUIZ,CHANGE_QUESTION,FINISH_QUIZ} from '../actions/const';

const initialState = {
  id: undefined,
  title: undefined,
  questions: [],
  answers: [],
  current_question: null,
  finished: false
};

function reducer(state = initialState, action) {
  
  switch (action.type) {
    
    case GET_QUIZ: {
      const nextState = Object.assign({}, state, action.quiz)
      return nextState;
    }

    case CHANGE_QUESTION: { 
      const nextState = Object.assign({}, state, {current_question:action.id})
      return nextState;
    }

    case FINISH_QUIZ: {
      const nextState = Object.assign({}, state, {finished: true})
      return nextState;
    }
    
    default: {
      return state;
    }
  }
}

module.exports = reducer;
