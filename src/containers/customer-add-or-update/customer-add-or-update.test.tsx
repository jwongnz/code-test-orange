import React from 'react';
import { CustomerAddOrUpdate } from './customer-add-or-update';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('CustomerAddOrUpdate', () => {
  let props: any;

  beforeEach(() => {
    let mock: any = jest.fn();

    props = {
      customers: [],
      addCustomer: jest.fn(),
      updateCustomer: jest.fn(),
      match: mock,
      location: mock,
      history: {
        push: () => {}
      }
    }
  })

  it('renders correctly', () => {
    const wrapper = shallow(
      <CustomerAddOrUpdate {...props}/>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('enables save button when all inputs are valid', () => {
    // arrange
    const wrapper = shallow<CustomerAddOrUpdate>(
      <CustomerAddOrUpdate {...props}/>
    );
    const instance = wrapper.instance();
    const mockState: any = {
      firstName: {
        valid: true
      },
      lastName: {
        valid: true
      },
      dateOfBirth: {
        valid: true
      }
    };
    instance.setState(mockState);

    // assert
    const saveButton = wrapper.find('[data-test-id="saveButton"]');
    expect(saveButton.props().disabled).toBe(false);
  });

  it('disables save button when an input is invalid', () => {
    // arrange
    const wrapper = shallow<CustomerAddOrUpdate>(
      <CustomerAddOrUpdate {...props}/>
    );
    const instance = wrapper.instance();
    const mockState: any = {
      firstName: {
        valid: true
      },
      lastName: {
        valid: false
      },
      dateOfBirth: {
        valid: true
      }
    };
    instance.setState(mockState);

    // assert
    const saveButton = wrapper.find('[data-test-id="saveButton"]');
    expect(saveButton.props().disabled).toBe(true);
  });

  it('saves customer to store when clicking save', () => {
    // arrange
    const wrapper = shallow<CustomerAddOrUpdate>(
      <CustomerAddOrUpdate {...props}/>
    );
    const instance = wrapper.instance();
    const mockState: any = {
      firstName: {
        valid: true
      },
      lastName: {
        valid: true
      },
      dateOfBirth: {
        valid: true
      }
    };
    instance.setState(mockState);

    // act
    wrapper.find('[data-test-id="form"]').simulate('submit', { preventDefault: () => {} });

    // assert
    expect(props.addCustomer).toHaveBeenCalled();
  });
});