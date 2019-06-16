import { ActionTypes, ADD_CUSTOMER, DELETE_CUSTOMER, Customer } from './types';

const initialState: Customer[] = [
  { id: 'bfc2b7af-6cf3-44bd-a98f-8e2e86790d9a', firstName: 'John', lastName: 'Smith', dateOfBirth: { day: 12, month: 'January', year: 1992 } },
  { id: 'e3493230-9e4a-4899-8ff2-1930f8f60119', firstName: 'Bob', lastName: 'Sushi', dateOfBirth: { day: 20, month: 'March', year: 2001 } }
];

export default function(state = initialState, action: ActionTypes): Customer[] {
  switch(action.type) {
    case ADD_CUSTOMER:
      if (!action.payload)
        return state;

      return [
        ...state,
        action.payload
      ];
    case DELETE_CUSTOMER:
      if (!action.payload)
        return state;

      return state.filter((customer) => {
        return customer.id !== action.payload.id;
      });
    default:
      return state;
  }
}