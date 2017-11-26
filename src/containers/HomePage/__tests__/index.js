import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from '../index';

describe('HomePage', () => {
  let props;
  let mountedComponent;
  const component = () => {
    if (!mountedComponent) {
      mountedComponent =
        shallow(<HomePage {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      articles: [],
      fetchData() {},
      isFetching: true,
      onDeleteClick() {},
    };
    mountedComponent = undefined;
  });

  it('should snapshot be OK', () => {
    expect(component()).toMatchSnapshot();
  });

  it('should Loading when isFetchin', () => {
    expect(component().find('Loader').exists()).toBe(true);
  });
  
});
