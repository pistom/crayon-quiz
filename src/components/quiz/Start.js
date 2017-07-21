import React from 'react';
import PropTypes from 'prop-types';

const Start = ({ id = 1, onStartQuiz, quizTitle, isLoading, loadingError }) => {
  const showStart = !isLoading && !loadingError;
  const showLoading = isLoading && !loadingError;
  return (
    <div className="start-component">
      {showStart ?
        <div>
          <h1>{quizTitle}</h1>
          <button onClick={() => { onStartQuiz(id); }} >Start</button>
        </div> : null}
      {showLoading ? <h2>Loading...</h2> : null}
      {loadingError ? <h2>Data can not be retrieved</h2> : null}
    </div>
  );
};

Start.propTypes = {
  id: PropTypes.number,
  onStartQuiz: PropTypes.func,
  quizTitle: PropTypes.string,
  isLoading: PropTypes.bool,
  loadingError: PropTypes.bool,
};


export default Start;
