import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer from './phonebook/phonebook-reducers';

const rootReducer = combineReducers({
  contacts: phonebookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
