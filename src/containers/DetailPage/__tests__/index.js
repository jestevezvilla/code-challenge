import React from 'react';
import { shallow } from 'enzyme';
import { DetailPage } from '../index';

it('renders without crashing', () => {
  shallow(<DetailPage />);
});
