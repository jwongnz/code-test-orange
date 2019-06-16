import { ADD_CUSTOMER, DELETE_CUSTOMER, Customer } from './types';
import uuid from 'uuid';

export function addCustomer(customer: Customer) {
  return {
    type: ADD_CUSTOMER,
    payload: {
      ...customer,
      id: uuid.v4()
    }
  };
}

export function deleteCustomer(customer: Customer) {
  return {
    type: DELETE_CUSTOMER,
    payload: customer
  };
}
