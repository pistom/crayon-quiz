import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './end.cssmodule.scss';

const End = (props) => {

    let correctAnswers = props.correctAnswers.questions;
    let selectedAnswers = props.selectedAnswers;
    let questionsAnswers = props.questionsList.map( (question) => {
      let newQuestion = {
        question: question.question,
        id: question.id,
        answers: question.answers.map( (questionAnswerId) => {
          // Get answers text and check if choice was correct
          for( let a of props.answersList) {
            if (a.id === questionAnswerId){
              let answer = {id:a.id, answer:a.answer};
              if (correctAnswers[question.id].indexOf(a.id) !== -1){
                Object.assign(answer,{correct:true})
                if (selectedAnswers[question.id] && selectedAnswers[question.id][a.id] === true){
                  Object.assign(answer,{correctSelection:true})
                }
              } else if (correctAnswers[question.id].indexOf(a.id) === -1 && selectedAnswers[question.id] && selectedAnswers[question.id][a.id] === true){
                Object.assign(answer,{correctSelection:false})
              } 
              return answer;
            }
          }
        })
      }

      // Make comparative table of correct and selected answers
      let compareCorrectSelected = [];
      for ( let correctAnswer of correctAnswers[question.id] ) {
        if (selectedAnswers[question.id] && selectedAnswers[question.id][correctAnswer] === true){
          compareCorrectSelected.push(true);
        } else {
          compareCorrectSelected.push(false);
        }
      }

      // Count correct answers
      let selectedCorrectAnswersNumber = 0;
      if (selectedAnswers[question.id]) {
        for (let answer in selectedAnswers[question.id]) {
          if (selectedAnswers[question.id][answer]) selectedCorrectAnswersNumber++;
        }
      }

      // Check if only correct answers are selected 
      // and if number of correct answers is equal to number of selected correct answers
      if (compareCorrectSelected.indexOf(false) === -1 && correctAnswers[question.id].length === selectedCorrectAnswersNumber){
        newQuestion.correct = true
      } else {
        newQuestion.correct = false
      }

      return newQuestion;
    });

    return (
      <div className="end-component" styleName="end-component">
        <h1>Results</h1>
        <ul className="resultsQuestionsList">
          {questionsAnswers.map( (question) => {
            return <li key={question.id} className="resultsQuestionsList__question">
              <h2 style={ (question.correct) ? {color:"greenyellow"} : {color:"firebrick"} }>{question.question}</h2>
              <ul>
                {question.answers.map( (answer) => {
                  if (answer.correct === true && answer.correctSelection === true){
                    return <li key={answer.id} style={{color:"greenyellow"}}>
                              <span style={{border:"1px dashed greenyellow"}}>{answer.answer}</span>
                           </li>
                  } else if (answer.correctSelection === false) {
                    return <li key={answer.id} style={{color:"firebrick"}}>
                              <span style={{border:"1px dashed firebrick"}}>{answer.answer}</span>
                           </li>
                  } else if (answer.correct === true){
                    return <li key={answer.id} style={{color:"greenyellow"}}>{answer.answer}</li>
                  } else {
                    return <li key={answer.id}>{answer.answer}</li>
                  }
                } )}
              </ul>
            </li>
          } )}
        </ul>
      </div>
    )
  
}


export default cssmodules(End, styles);
