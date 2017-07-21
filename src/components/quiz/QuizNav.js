import React from 'react';
import PropTypes from 'prop-types';
import cssmodules from 'react-css-modules';
import styles from './quizNav.cssmodule.scss';

const QuizNav = props => (
  <div className="quizNavigation">
    <div className="quizNavigation__navigation">
      <button className="quizNavigation__navigationPrev" onClick={() => props.onChangeQuestion(props.id - 1)}>Previous</button>
      <button className="quizNavigation__navigationNext" onClick={() => props.onChangeQuestion(props.id + 1)}>Next</button>
    </div>
    <div className="quizNavigation__finish">
      <button onClick={() => props.onFinishQuiz()}>Finish and send</button>
    </div>
  </div>
  );

QuizNav.propTypes = {
  onChangeQuestion: PropTypes.func,
  onFinishQuiz: PropTypes.func,
  id: PropTypes.number
};

export default cssmodules(QuizNav, styles);
