import React from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';
import './app.css';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="notice">
          <Quiz
            id={1}
            actions={this.props.actions}
            quiz={this.props.quiz}
            selectedAnswers={this.props.selectedAnswers}
            correctAnswers={this.props.correctAnswers} />
        </div>
      </div>
    );
  }
}

AppComponent.propTypes = {
  actions: PropTypes.objectOf(
    PropTypes.func
  ),
  selectedAnswers: PropTypes.objectOf(
    PropTypes.objectOf(PropTypes.bool)
  ),
  quiz: PropTypes.shape({
    current_question: PropTypes.number,
    questions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      multiple_choice: PropTypes.bool,
      answers: PropTypes.arrayOf(PropTypes.number)
    })),
    title: PropTypes.string,
    isLoading: PropTypes.bool,
    loadingError: PropTypes.bool,
    finished: PropTypes.bool,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        answer: PropTypes.string
      })
    )
  }),
  correctAnswers: PropTypes.shape({
    quiz_id: PropTypes.number,
    questions: PropTypes.objectOf(
      PropTypes.arrayOf(PropTypes.number)
    ),
  })
};

AppComponent.defaultProps = {
};

export default AppComponent;
