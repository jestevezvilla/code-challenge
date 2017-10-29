import React from 'react';
import { shallow } from 'enzyme';
import { DetailPage } from '../index';

it('renders without crashing', () => {
    const match = { params: { id: 1 } };
    shallow(<DetailPage />);
});