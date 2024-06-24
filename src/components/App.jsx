import { Component } from 'react';
import ContactsForm from './contactsform';
import { nanoid } from 'nanoid';
import Contacts from './contactslist';
import FilterContacts from './filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handlerChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };
  handlerSubmit = ev => {
    ev.preventDefault();
    const { name, number } = this.state;
    const id = nanoid();
    console.log(name, id);
    if (this.filterContacts(name).length !== 0) {
      return alert(`${name} is already in contacts`);
    }
    this.addContacts({ name, number, id });
    console.log(this.state);
  };

  addContacts = person => {
    this.setState(state => ({
      contacts: [...state.contacts, person],
    }));
  };

  filterContacts = data => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(data.toLowerCase())
    );
  };
  filterEvcontacts = ev => {
    this.handlerChange(ev);
    this.filterContacts(ev.target.value);
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm
          handlerChange={this.handlerChange}
          handlerSubmit={this.handlerSubmit}
          name={this.state.name}
          number={this.state.number}
        />
        <div>
          <h2>Contacts</h2>
          <FilterContacts
            filter={this.state.filter}
            handlerChange={this.filterEvcontacts}
          />
          <Contacts
            contacts={this.filterContacts(this.state.filter)}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
export default App;
