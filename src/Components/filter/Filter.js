import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import {
  // getAllContacts,
  // addNewContact,
  // removeContact,
  findContact,
} from '../../Redux/phonebook/phonebook-actions';

const Filter = ({ filter, findContact }) => {
  const handleChange = e => {
    const { value } = e.target;
    // console.log('value', value);
    findContact(value);
  };

  console.log('filter', filter);
  return (
    <label className={s.filter}>
      Find contacts by name:
      <input
        className={s.filterInput}
        name="filter"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  // getAllContacts,
  // addNewContact,
  // removeContact,
  findContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };
