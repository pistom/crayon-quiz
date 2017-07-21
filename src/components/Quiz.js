import React from 'react';
import PropTypes from 'prop-types';
import cssmodules from 'react-css-modules';
import styles from './quiz.cssmodule.scss';
import Question from './quiz/Question';
import QuestionsList from './quiz/QuestionsList';
import QuizNav from './quiz/QuizNav';
import QuizHeader from './quiz/QuizHeader';
import Start from './quiz/Start';
import End from './quiz/End';

class Quiz extends React.Component {

  constructor() {
    super();
    this._handleChangeQuestion.bind(this);
    this._handleOnSelectAnswer.bind(this);
    this._handleFinishQuiz.bind(this);
  }
  componentDidMount() {
    this.props.actions.getQuiz();
  }

  _handleChangeQuestion(id) {
    const firstQuestionId = this.props.quiz.questions[0].id;
    const lastQuestionId = this.props.quiz.questions[this.props.quiz.questions.length - 1].id;
    let newId = id;
    if (id < firstQuestionId && id < lastQuestionId) {
      newId = firstQuestionId;
    } else if (id > firstQuestionId && id > lastQuestionId) {
      newId = lastQuestionId;
    }
    this.props.actions.changeQuestion(newId);
  }

  _handleFinishQuiz() {
    this.props.actions.changeQuestion(null);
    this.props.actions.finishQuiz(true);
    this.props.actions.getAnswers();
  }

  _handleOnSelectAnswer(questionId, answerId) {
    if (!this.props.quiz.questions[questionId - 1].multiple_choice) {
      this.props.actions.clearSelectedAnswers(questionId);
    }
    this.props.actions.selectAnswer(questionId, answerId);
  }

  render() {
    const cq = this.props.quiz.current_question;
    const f = this.props.quiz.finished;
    const showStart = cq === null && f === false;
    const showQuiz = cq !== null && f === false;
    const showEnd = cq === null && f === true;

    return (
      <div className="quiz-component" styleName="quiz-component">
        {showStart ?
          <div>
            <Start
              isLoading={this.props.quiz.isLoading}
              loadingError={this.props.quiz.loadingError}
              onStartQuiz={id => this._handleChangeQuestion(id)}
              quizTitle={this.props.quiz.title}
            />
          </div> : null}

        {showQuiz ?
          <div>
            <QuizHeader
              quizTitle={this.props.quiz.title}
            />
            <QuestionsList
              questions={this.props.quiz.questions}
              currentQuestionId={this.props.quiz.current_question}
              onChangeQuestion={id => this._handleChangeQuestion(id)}
            />
            <Question
              question={this.props.quiz.questions[this.props.quiz.current_question - 1]}
              answers={this.props.quiz.answers.filter((answer) => {
                const currentQuestion = this.props.quiz.current_question - 1;
                if (this.props.quiz.questions[currentQuestion].answers.indexOf(answer.id) !== -1) {
                  return answer;
                }
                return null;
              }
              )}
              onSelectAnswer={(qId, aId) => this._handleOnSelectAnswer(qId, aId)}
              selectedAnswers={this.props.selectedAnswers}
            />
            <QuizNav
              id={this.props.quiz.current_question}
              onChangeQuestion={id => this._handleChangeQuestion(id)}
              onFinishQuiz={() => this._handleFinishQuiz()}
            />
          </div> : null}

        {showEnd ?
          <div>
            <QuizHeader
              quizTitle={this.props.quiz.title}
            />
            <End
              questionsList={this.props.quiz.questions}
              answersList={this.props.quiz.answers}
              selectedAnswers={this.props.selectedAnswers}
              correctAnswers={this.props.correctAnswers}
            />
          </div> : null}
      </div>
    );
  }
}

Quiz.displayName = 'Quiz';
Quiz.propTypes = {
  actions: PropTypes.shape({
    getQuiz: PropTypes.func,
    changeQuestion: PropTypes.func,
    finishQuiz: PropTypes.func,
    getCorrectAnswers: PropTypes.func,
    clearSelectedAnswers: PropTypes.func,
    selectAnswer: PropTypes.func,
    getAnswers: PropTypes.func
  }),
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
  selectedAnswers: PropTypes.objectOf(
    PropTypes.objectOf(PropTypes.bool)
  ),
  correctAnswers: PropTypes.shape({
    quiz_id: PropTypes.number,
    questions: PropTypes.objectOf(
      PropTypes.arrayOf(PropTypes.number)
    ),
  })
};
Quiz.defaultProps = {};

export default cssmodules(Quiz, styles);
