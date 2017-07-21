import React from 'react';
import PropTypes from 'prop-types';
import cssmodules from 'react-css-modules';
import styles from './quizHeader.cssmodule.scss';

const QuizHeader = props => (
  <h3>{props.quizTitle}</h3>
);

QuizHeader.propTypes = {
  quizTitle: PropTypes.string
};

export default cssmodules(QuizHeader, styles);
