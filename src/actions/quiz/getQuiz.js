import fetch from 'isomorphic-fetch';
import { GET_QUIZ, GET_QUIZ_PENDING, GET_QUIZ_FULFILLED } from './../const';


function getQuiz() {
  return {
    type: 'GET_QUIZ',
    payload: {
      promise: fetch('https://www.cinquiemecrayon.eu/!pliki/crayon-quiz-api/quiz.php')
        .then(response => response.json())
    }
  };
}

module.exports = getQuiz;
