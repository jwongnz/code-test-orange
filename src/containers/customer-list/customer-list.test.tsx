import React from 'react';
import { CustomerList } from './customer-list';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('CustomerList', () => {
  let props: any;

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
  });

  it('renders correctly', () => {
    const wrapper = shallow(<CustomerList {...props}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('search', () => {
    it('should show all customers if no search term', () => {
      const wrapper = shallow(<CustomerList {...props}/>);
      expect(wrapper.find('[data-test-id="customerRow"]')).toHaveLength(7);
    });

    it('shows customers based on search term', () => {
      props.searchTerm = 'Smith';
      const wrapper = shallow(<CustomerList {...props}/>);
      expect(wrapper.find('[data-test-id="customerRow"]')).toHaveLength(2);
    });
  });

  describe('deleteCustomer', () => {
    it('dispatches deleteCustomer action', () => {
      // arrange
      const wrapper = shallow<CustomerList>(<CustomerList {...props}/>);

      // act
      wrapper.find('[data-test-id="delete-0"]').simulate('click');
      
      // assert
      expect(props.deleteCustomer).toHaveBeenCalledWith(props.customers[0]);
    });
  });
});