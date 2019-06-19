export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

export interface AddCustomerAction {
  type: typeof ADD_CUSTOMER;
  payload: Customer
}

export interface UpdateCustomerAction {
  type: typeof UPDATE_CUSTOMER;
  payload: Customer
}


export interface DeleteCustomerAction {
  type: typeof DELETE_CUSTOMER;
  payload: Customer
}

export type ActionTypes = AddCustomerAction | UpdateCustomerAction | DeleteCustomerAction;