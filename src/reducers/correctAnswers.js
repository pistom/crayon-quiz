/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { GET_CORRECT_ANSWERS } from '../actions/const';

const initialState = {};

function reducer(state = initialState, action) {

  switch (action.type) {
    
    case GET_CORRECT_ANSWERS: {
      return action.correctAnswers;
    }
    
    default: {
      return state;
    }
  }
}

module.exports = reducer;
