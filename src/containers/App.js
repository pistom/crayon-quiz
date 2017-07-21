/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  changeQuestion,
  finishQuiz,
  selectAnswer,
  getCorrectAnswers,
  clearSelectedAnswers,
  getQuiz,
  getAnswers
} from '../actions/';
import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, quiz, selectedAnswers, correctAnswers} = this.props;
    return (
      <Main
        actions={actions}
        quiz={quiz}
        selectedAnswers={selectedAnswers}
        correctAnswers={correctAnswers}
        />
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({
    changeQuestion: PropTypes.func.isRequired,
    finishQuiz: PropTypes.func.isRequired,
    selectAnswer: PropTypes.func.isRequired,
    getCorrectAnswers: PropTypes.func.isRequired,
    clearSelectedAnswers: PropTypes.func.isRequired,
    getQuiz: PropTypes.func.isRequired,
    getAnswers: PropTypes.func.isRequired
  }),
  quiz: PropTypes.shape({}),
  selectedAnswers: PropTypes.shape({}),
  correctAnswers: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    quiz: state.quiz,
    selectedAnswers: state.selectedAnswers,
    correctAnswers: state.correctAnswers
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    changeQuestion,
    finishQuiz,
    selectAnswer,
    getCorrectAnswers,
    clearSelectedAnswers,
    getQuiz,
    getAnswers
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
