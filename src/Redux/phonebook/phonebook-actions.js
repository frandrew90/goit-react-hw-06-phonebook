import { v4 as uuidv4 } from 'uuid';
import {
  ADD_CONTACT,
  GET_CONTACTS,
  REMOVE_CONTACT,
  FIND_CONTACT,
} from './phonebook-types';

export const addNewContact = (name, number) => {
  return {
    type: ADD_CONTACT,
    payload: { id: uuidv4(), name: name, number: number },
  };
};

export const getAllContacts = contacts => {
  return {
    type: GET_CONTACTS,
    payload: contacts,
  };
};

export const removeContact = id => {
  return {
    type: REMOVE_CONTACT,
    payload: id,
  };
};

export const findContact = value => ({
  type: FIND_CONTACT,
  payload: value,
});
