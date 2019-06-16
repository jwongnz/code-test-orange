export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: DateOfBirth;
}

export interface DateOfBirth {
  day: number;
  month: string;
  year: number
}

interface Company {
  name: string;
}

export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

export interface AddCustomerAction {
  type: typeof ADD_CUSTOMER;
  payload: Customer
}

export interface DeleteCustomerAction {
  type: typeof DELETE_CUSTOMER;
  payload: Customer
}

export type ActionTypes = AddCustomerAction | DeleteCustomerAction;