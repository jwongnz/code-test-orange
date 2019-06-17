import { ActionTypes, ADD_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER, Customer } from './types';

const initialState: Customer[] = [
  {id: 'bfc2b7af-6cf3-44bd-a98f-8e2e86790d9a', firstName: 'John', lastName: 'Smith', dateOfBirth: new Date('1992-05-03')},
  {id: 'ec183f87-f048-4352-8062-e868df916dc6', firstName: 'Dylan', lastName: 'Skywaltzer', dateOfBirth: new Date('1992-05-03')},
  {id: 'e3493230-9e4a-4899-8ff2-1930f8f60119', firstName: 'Bob', lastName: 'Smith', dateOfBirth: new Date('2001-08-14')},
  {id: '4578329f-4b35-4ebd-b817-faee185366fe', firstName: 'Luke', lastName: 'Skywalker', dateOfBirth: new Date('2001-08-14')},
  {id: 'ed192fc6-f782-486c-bc32-831ff94f92a2', firstName: 'Sigmund', lastName: 'Knight', dateOfBirth: new Date('1992-05-03')},
  {id: '62da26cf-cd6f-4c8b-b50f-34599e63d13f', firstName: 'Teemo', lastName: 'Mushroom', dateOfBirth: new Date('2001-08-14')},
  {id: 'b127df1f-f94c-402a-8794-e4f95d14c0d8', firstName: 'Teeto', lastName: 'Potatoes', dateOfBirth: new Date('2001-08-14')}
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
    case UPDATE_CUSTOMER:
      if (!action.payload)
        return state;

      return state.map(customer => {
        if (customer.id === action.payload.id) {
          return {...customer, ...action.payload}
        };
        return customer;
      });
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