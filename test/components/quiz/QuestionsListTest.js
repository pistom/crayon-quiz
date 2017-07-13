import React from 'react';
import { shallow } from 'enzyme';
import QuestionsList from 'components\quiz\QuestionsList.js';

describe('<QuestionsList />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<QuestionsList />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "questionslist-component"', function () {
      expect(component.hasClass('questionslist-component')).to.equal(true);
    });
  });
});
