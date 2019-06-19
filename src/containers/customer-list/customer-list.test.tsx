import React from 'react';
import { CustomerList } from './customer-list';
import { shallow } from 'enzyme';
import { Customer } from '../../store/customers/types';
import toJson from 'enzyme-to-json';
import { TableRow } from '@material-ui/core';

describe('CustomerList', () => {
  let props: any;
  let mockCustomer: Customer;

  beforeEach(() => {
    props = {
      searchTerm: '',
      customers: [
        {id: 'a', firstName: 'John', lastName: 'Smith', dateOfBirth: new Date('1992-05-03')},
        {id: 'b', firstName: 'Dylan', lastName: 'Skywaltzer', dateOfBirth: new Date('1992-05-03')},
        {id: 'c', firstName: 'Bob', lastName: 'Smith', dateOfBirth: new Date('2001-08-14')},
        {id: 'd', firstName: 'Luke', lastName: 'Skywalker', dateOfBirth: new Date('2001-08-14')},
        {id: 'e', firstName: 'Sigmund', lastName: 'Knight', dateOfBirth: new Date('1992-05-03')},
        {id: 'f', firstName: 'Teemo', lastName: 'Mushroom', dateOfBirth: new Date('2001-08-14')},
        {id: 'g', firstName: 'Teeto', lastName: 'Potatoes', dateOfBirth: new Date('2001-08-14')}
      ],
      deleteCustomer: jest.fn()
    }

    mockCustomer = {id: 'abc', firstName: 'John', lastName: 'Smith', dateOfBirth: new Date('1992-05-03')};
  });

  it('renders without crashing', () => {
    shallow(<CustomerList {...props}/>);
  });

  it('renders correctly', () => {
    const wrapper = shallow(<CustomerList {...props}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('search', () => {
    it('should show all customers if no search term', () => {
      const wrapper = shallow(<CustomerList {...props}/>);
      expect(wrapper.find(TableRow)).toHaveLength(8);
    });

    it('shows customers based on search term', () => {
      props.searchTerm = 'Smith';
      const wrapper = shallow(<CustomerList {...props}/>);
      expect(wrapper.find(TableRow)).toHaveLength(3);
    });
  });

  describe('deleteCustomer', () => {
    it('dispatches deleteCustomer action', () => {
      // arrange
      const wrapper = shallow<CustomerList>(<CustomerList {...props}/>);
      const instance = wrapper.instance();

      // act
      instance.deleteCustomer(mockCustomer);
      
      // assert
      expect(props.deleteCustomer).toHaveBeenCalledWith(mockCustomer);
    });
  });
});