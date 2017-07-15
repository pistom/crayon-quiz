import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './quiz.cssmodule.scss';
import Question from './quiz/Question';
import QuestionsList from './quiz/QuestionsList';
import QuizNav from './quiz/QuizNav';
import QuizHeader from './quiz/QuizHeader';
import Start from './quiz/Start';
import End from './quiz/End';
import quiz from '../quiz';
import answers from '../answers';

class Quiz extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.actions.getQuiz(quiz);
    console.log(this.props);
  }

  _handleChangeQuestion(id) {
    const firstQuestionId = this.props.quiz.questions[0].id;
    const lastQuestionId = this.props.quiz.questions[this.props.quiz.questions.length - 1].id;
    const newId = (id < firstQuestionId) ? firstQuestionId :
            (id > lastQuestionId) ? lastQuestionId : id;
    this.props.actions.changeQuestion(newId);
  }

  _handleFinishQuiz() {
    this.props.actions.changeQuestion(null);
    this.props.actions.finishQuiz(true);
    this.props.actions.getCorrectAnswers(answers);
  }

  _handleOnSelectAnswer(questionId, answerId) {
    if (!this.props.quiz.questions[questionId - 1].multiple_choice) {
      this.props.actions.clearSelectedAnswers(questionId);
    }
    this.props.actions.selectAnswer(questionId, answerId);
  }

  render() {
    return (
      <div className="quiz-component" styleName="quiz-component">
        { this.props.quiz.current_question === null ?
            this.props.quiz.finished === false ?
              <Start
                onStartQuiz={this._handleChangeQuestion.bind(this)}
                quizTitle={this.props.quiz.title}
              /> :
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
              </div> :
              <div>
              <QuizHeader
                quizTitle={this.props.quiz.title}
              />

              <QuestionsList
questions={this.props.quiz.questions}
                currentQuestionId={this.props.quiz.current_question}
                onChangeQuestion={this._handleChangeQuestion.bind(this)}
              />
              <Question
                question={this.props.quiz.questions[this.props.quiz.current_question - 1]}
                answers={this.props.quiz.answers.filter((answer) => {
                          if (this.props.quiz.questions[this.props.quiz.current_question - 1].answers.indexOf(answer.id) !== -1)
                            {return answer};
                        })}
                onSelectAnswer={this._handleOnSelectAnswer.bind(this)}
                selectedAnswers={this.props.selectedAnswers}
              />
              <QuizNav
                id={this.props.quiz.current_question}
                onChangeQuestion={this._handleChangeQuestion.bind(this)}
                onFinishQuiz={this._handleFinishQuiz.bind(this)}
              />
            </div>
          }
      </div>
    );
  }
}

Quiz.displayName = 'Quiz';
Quiz.propTypes = {};
Quiz.defaultProps = {};

export default cssmodules(Quiz, styles);
