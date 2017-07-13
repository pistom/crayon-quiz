import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './quizNav.cssmodule.scss';

const QuizNav = (props) => {
    
    return (
      <div className="quizNavigation">
        <div className="quizNavigation__navigation">
          <button className="quizNavigation__navigationPrev" onClick={()=>props.onChangeQuestion(props.id-1)}>Previous</button>
          <button className="quizNavigation__navigationNext" onClick={()=>props.onChangeQuestion(props.id+1)}>Next</button>
        </div>
        <div className="quizNavigation__finish">
          <button onClick={()=>props.onFinishQuiz()}>Finish and send</button>
        </div>
      </div>
    )
  
}


export default cssmodules(QuizNav, styles);