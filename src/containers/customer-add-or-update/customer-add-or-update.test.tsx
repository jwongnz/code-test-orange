import React from 'react';
import { CustomerAddOrUpdate } from './customer-add-or-update';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('CustomerAddOrUpdate', () => {
  let mock: any = jest.fn();

  const props = {
    customers: [],
    addCustomer: jest.fn(),
    updateCustomer: jest.fn(),
    match: mock,
    location: mock,
    history: mock
  }

  it('renders without crashing', () => {
    shallow(<CustomerAddOrUpdate {...props} />);
  });

  it('renders correctly', () => {
    const wrapper = shallow(
      <CustomerAddOrUpdate {...props}/>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});