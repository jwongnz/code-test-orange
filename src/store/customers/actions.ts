import { ADD_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER, Customer } from './types';

export function addCustomer(customer: Customer) {
  return {
    type: ADD_CUSTOMER,
    payload: customer
  };
}

export function updateCustomer(customer: Customer) {
  return {
    type: UPDATE_CUSTOMER,
    payload: customer
  };
}

export function deleteCustomer(customer: Customer) {
  return {
    type: DELETE_CUSTOMER,
    payload: customer
  };
}
