import React from 'react';
import CustomerDashboard from './customer-dashboard';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('CustomerDashboard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <CustomerDashboard />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});