import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './questionsList.cssmodule.scss';

const QuestionsList = (props) => {
    let currentQuestionId = props.currentQuestionId;
    return (
      <div className="questionsList-component">
        <ul className="questionsList__list">
          { props.questions.map((question) => {
              return <li
                        className="questionsList__item" 
                        key={question.id}
                        style={currentQuestionId === question.id ? {color:"red"} : null}  
                        onClick={()=>props.onChangeQuestion(question.id)} 
                      >
                        {question.id}
                      </li>
          }) }
        </ul>
      </div>
    )
  
}


export default cssmodules(QuestionsList, styles);