import React from 'react';
import PropTypes from 'prop-types';
import cssmodules from 'react-css-modules';
import styles from './end.cssmodule.scss';

class End extends React.Component {

  constructor() {
    super();
    this.questionsAnswers = undefined;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.correctAnswers.questions) {
      this.questionsAnswers = this.generateQuestionsAnswersList(nextProps.correctAnswers);
    }
  }

  generateQuestionsAnswersList(ca) {
    const correctAnswers = ca.questions;
    const selectedAnswers = this.props.selectedAnswers;
    const questionsAnswers = this.props.questionsList.map((question) => {
      const newQuestion = {
        question: question.question,
        id: question.id,
        answers: question.answers.map((questionAnswerId) => {
          // Get answers text and check if choice was correct
          for (const a of this.props.answersList) {
            if (a.id === questionAnswerId) {
              const answer = { id: a.id, answer: a.answer };
              if (correctAnswers[question.id].indexOf(a.id) !== -1) {
                Object.assign(answer, { correct: true });
                if (selectedAnswers[question.id] && selectedAnswers[question.id][a.id] === true) {
                  Object.assign(answer, { correctSelection: true });
                }
              } else if (
                correctAnswers[question.id].indexOf(a.id) === -1 &&
                selectedAnswers[question.id] && selectedAnswers[question.id][a.id] === true
              ) {
                Object.assign(answer, { correctSelection: false });
              }
              return answer;
            }
          }
        })
      };

      // Make comparative table of correct and selected answers
      const compareCorrectSelected = [];
      for (const correctAnswer of correctAnswers[question.id]) {
        if (selectedAnswers[question.id] && selectedAnswers[question.id][correctAnswer] === true) {
          compareCorrectSelected.push(true);
        } else {
          compareCorrectSelected.push(false);
        }
      }

      // Count correct answers
      let selectedCorrectAnswersNumber = 0;
      if (selectedAnswers[question.id]) {
        for (const answer in selectedAnswers[question.id]) {
          if (selectedAnswers[question.id][answer]) selectedCorrectAnswersNumber += 1;
        }
      }

      // Check if only correct answers are selected
      // and if number of correct answers is equal to number of selected correct answers
      if (
        compareCorrectSelected.indexOf(false) === -1 &&
        correctAnswers[question.id].length === selectedCorrectAnswersNumber
      ) {
        newQuestion.correct = true;
      } else {
        newQuestion.correct = false;
      }
      return newQuestion;
    });
    return questionsAnswers;
  }

  render() {
    return (
      <div className="end-component" styleName="end-component">
        <h1>Results</h1>
        {this.props.correctAnswers.isLoadingAnswers === false ?
          <ul className="resultsQuestionsList">
            {this.questionsAnswers.map(question => <li key={question.id} className="resultsQuestionsList__question">
              <h2 style={(question.correct) ? { color: 'greenyellow' } : { color: 'firebrick' }}>{question.question}</h2>
              <ul>
                {question.answers.map((answer) => {
                  if (answer.correct === true && answer.correctSelection === true) {
                    return (<li key={answer.id} style={{ color: 'greenyellow' }}>
                      <span style={{ border: '1px dashed greenyellow' }}>{answer.answer}</span>
                    </li>);
                  } else if (answer.correctSelection === false) {
                    return (<li key={answer.id} style={{ color: 'firebrick' }}>
                      <span style={{ border: '1px dashed firebrick' }}>{answer.answer}</span>
                    </li>);
                  } else if (answer.correct === true) {
                    return <li key={answer.id} style={{ color: 'greenyellow' }}>{answer.answer}</li>;
                  }
                  return <li key={answer.id}>{answer.answer}</li>;
                })}
              </ul>
            </li>)}
          </ul> : null}
      </div>
    );
  }
}
End.displayName = 'End';
End.propTypes = {
  correctAnswers: PropTypes.shape({
    isLoadingAnswers: PropTypes.bool,
    loadingAnswersError: PropTypes.bool,
    questions: PropTypes.any
  }),
  selectedAnswers: PropTypes.objectOf(
    PropTypes.objectOf(PropTypes.bool)
  ),
  questionsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    multiple_choice: PropTypes.bool,
    answers: PropTypes.arrayOf(PropTypes.number)
  }))
};

export default cssmodules(End, styles);
