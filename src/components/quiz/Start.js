import React from 'react';

const Start = ({id=1, onStartQuiz, quizTitle}) => {
    return (
      <div className="start-component">
        <h1>{quizTitle}</h1>
        <button onClick={ () => { onStartQuiz(id) } } >Start</button>
      </div>
    )
}


export default Start;
