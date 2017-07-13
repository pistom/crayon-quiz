import React from 'react';
import { shallow } from 'enzyme';
import Question from 'components/quiz/Question.js';

describe('<Question />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Question />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "question-component"', function () {
      expect(component.hasClass('question-component')).to.equal(true);
    });
  });
});
