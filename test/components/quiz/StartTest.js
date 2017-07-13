import React from 'react';
import { shallow } from 'enzyme';
import Start from 'components/quiz/Start.js';

describe('<Start />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Start />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "start-component"', function () {
      expect(component.hasClass('start-component')).to.equal(true);
    });
  });
});
