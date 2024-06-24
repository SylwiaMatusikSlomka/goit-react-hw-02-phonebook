import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './contactsform.module.css';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };
  render() {
    const { name } = this.state.name;
    const { number } = this.state.number;
    return (
      <form onSubmit={this.props.handlerSubmit} className={styles.form}>
        <label htmlFor="name" className={styles.formLabel}>
          Name
          <input
            onChange={this.props.handlerChange}
            value={name}
            type="text"
            className={styles.formInput}
            name="name"
            id="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number" className={styles.formLabel}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="number"
            value={number}
            className={styles.formInput}
            onChange={this.props.handlerChange}
          />
        </label>
        <button type="submit" className={styles.formBtn}>
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactsForm;

ContactsForm.propTypes = {
  handlerSubmit: PropTypes.func.isRequired,
  handlerChange: PropTypes.func.isRequired,
};
