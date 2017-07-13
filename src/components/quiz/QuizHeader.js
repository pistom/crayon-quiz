import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './quizHeader.cssmodule.scss';

const QuizHeader = (props) => {
    
    return (
      <h3>{props.quizTitle}</h3>
    )
  
}


export default cssmodules(QuizHeader, styles);