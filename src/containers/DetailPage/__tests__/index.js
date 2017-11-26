import React from 'react';
import { shallow } from 'enzyme';
import { DetailPage } from '../index';

describe('DetailPage', () => {
  let props;
  let mountedComponent;
  const component = () => {
    if (!mountedComponent) {
      mountedComponent =
        shallow(<DetailPage {...props} />);
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      fetchData() {},
      isFetching: true,
      match: {
        params: {
          id: '1234',
        },
      },
      updateData() {},
    };
    mountedComponent = undefined;
  });

  it('should snapshot be OK', () => {
    expect(component()).toMatchSnapshot();
  });

  it('should Loading when isFetching', () => {
    expect(component().find('Loader').exists()).toBe(true);
  });
  
});
