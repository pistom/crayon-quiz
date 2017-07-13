import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './question.cssmodule.scss';

const Question = (props) => {
  let questionAnswersList = {}
  for (let answer of props.answers) {
    questionAnswersList[answer.id] = answer.answer;
  }

  return (
    <div className="question-component" styleName="question-component">
      <h2>{props.question.question}</h2>
      <ul styleName="question__answers">
        {props.question.answers.map((answer)=>{
          return <li key={answer} 
                      className="question__answersAnswer"
                      onClick={ () => {props.onSelectAnswer(props.question.id,answer)} }
                      styleName={(props.selectedAnswers[props.question.id] && props.selectedAnswers[props.question.id][answer]) ? "question__answersAnswer--selected" : null }
                  >
                    <span>{questionAnswersList[answer]}</span>
                  </li>
        })}
      </ul>
    </div>
  )
}


export default cssmodules(Question, styles);
