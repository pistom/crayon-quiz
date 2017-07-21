import React from 'react';
import PropTypes from 'prop-types';
import cssmodules from 'react-css-modules';
import styles from './questionsList.cssmodule.scss';

const QuestionsList = (props) => {
  const currentQuestionId = props.currentQuestionId;
  return (
    <div className="questionsList-component">
      <ul className="questionsList__list">
        {props.questions.map(question => (
          <li
            className="questionsList__item"
            key={question.id}
          >
            <button
              style={currentQuestionId === question.id ? { color: 'red' } : null}
              onClick={() => props.onChangeQuestion(question.id)}
            >
              {question.id}
            </button>
          </li>
          )
        )}
      </ul>
    </div>
  );
};

QuestionsList.propTypes = {
  currentQuestionId: PropTypes.number,
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    multiple_choice: PropTypes.bool,
    answers: PropTypes.arrayOf(PropTypes.number)
  }))
};

export default cssmodules(QuestionsList, styles);
