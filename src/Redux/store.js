// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import phonebookReducer from './phonebook/phonebook-reducers';

// const rootReducer = combineReducers({
//   contacts: phonebookReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

// ===================TOOLKIT==============================

import { configureStore } from '@reduxjs/toolkit';

import phonebookReducer from './phonebook/phonebook-reducers';

const store = configureStore({
  reducer: { contacts: phonebookReducer },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
