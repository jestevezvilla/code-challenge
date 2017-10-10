import React from 'react';
import { mount } from 'enzyme';
import Button from '../index';

let rootEl;
const onButtonClick = jest.fn();

describe('<Button />', () => {
  beforeAll(() => {
    const button = mount(<Button onButtonClick={onButtonClick} text="Test" />);
    rootEl = button.find('a');
  });
  test('Button props and classes', () => {
    expect(rootEl.text()).toEqual('Test');
    expect(rootEl.hasClass('Button')).toBeTruthy();
  });

  test('Button click', () => {
    rootEl.simulate('click');
    expect(onButtonClick.mock.calls.length).toBe(1);
  });
});

