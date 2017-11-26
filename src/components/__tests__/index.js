import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

describe('<Button />', () => {
  test('Button props and classes', () => {
    const onButtonClick = jest.fn();
    const button = shallow(<Button onButtonClick={onButtonClick} text="Test" />);
    const rootEl = button.find('a');
    expect(rootEl.text()).toEqual('Test');
    expect(rootEl.hasClass('Button')).toBeTruthy();
  });

  test('Button click', () => {
    const onButtonClick = jest.fn();
    const button = shallow(<Button onButtonClick={onButtonClick} text="Test" />);
    const rootEl = button.find('a');
    rootEl.simulate('click');
    expect(onButtonClick.mock.calls.length).toBe(1);
  });
});

