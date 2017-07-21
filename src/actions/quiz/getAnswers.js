import fetch from 'isomorphic-fetch';
import { GET_ANSWERS, GET_ANSWERS_PENDING, GET_ANSWERS_FULFILLED } from './../const';


function getAnswers() {
  return {
    type: 'GET_ANSWERS',
    payload: {
      promise: fetch('https://www.cinquiemecrayon.eu/!pliki/crayon-quiz-api/answers.php')
        .then(response => response.json())
    }
  };
}

module.exports = getAnswers;
