import React from 'react';
import { mount } from 'enzyme';
import Button from './index';

let rootEl;
let onButtonClick;

describe('<Button />', () => {
  beforeAll(() => {
    onButtonClick = jest.fn();
    const button = mount(<Button onButtonClick={onButtonClick} text="Test" />);
    rootEl = button.find('a');
  });
  test('Button changes the text after click', () => {
    // Render a checkbox with label in the document
    // const onButtonClick = jest.fn()
    expect(rootEl.text()).toEqual('Test');
    expect(rootEl.hasClass('Button')).toBeTruthy();

    rootEl.simulate('click');
    expect(onButtonClick.mock.calls.length).toBe(1);
  });
});

