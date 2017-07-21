import React from 'react';
import PropTypes from 'prop-types';
import cssmodules from 'react-css-modules';
import styles from './question.cssmodule.scss';

const Question = (props) => {
  const questionAnswersList = props.answers.reduce((acc, cur) => {
    acc[cur.id] = cur.answer;
    return acc;
  }, {});

  return (
    <div className="question-component" styleName="question-component">
      <h2>{props.question.question}</h2>
      <ul styleName="question__answers">
        {props.question.answers.map((answer) => {
          return (
            <li key={answer}>
              <a
                className="question__answersAnswer"
                onClick={() => { props.onSelectAnswer(props.question.id, answer); }}
                styleName={(props.selectedAnswers[props.question.id] && props.selectedAnswers[props.question.id][answer]) ? 'question__answersAnswer--selected' : null}
              >
                <span>{questionAnswersList[answer]}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number,
    multiple_choice: PropTypes.bool,
    answers: PropTypes.arrayOf(PropTypes.number),
    question: PropTypes.string
  }),
  answers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    answer: PropTypes.string
  }))
};

export default cssmodules(Question, styles);
