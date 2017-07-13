import React from 'react';
import Quiz from './Quiz';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <div className="notice">
          <Quiz id={1} 
                actions={this.props.actions} 
                quiz={this.props.quiz} 
                selectedAnswers={this.props.selectedAnswers}
                correctAnswers={this.props.correctAnswers}  />
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
