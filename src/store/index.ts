import { combineReducers } from 'redux';
import CustomersReducer from './customers/reducers';
import { createStore } from 'redux';

const rootReducer = combineReducers({
  customers: CustomersReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default createStore(rootReducer);