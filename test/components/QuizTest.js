import React from 'react';
import { shallow } from 'enzyme';
import Quiz from 'components/Quiz.js';

describe('<Quiz />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Quiz />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "quiz-component"', function () {
      expect(component.hasClass('quiz-component')).to.equal(true);
    });
  });
});
