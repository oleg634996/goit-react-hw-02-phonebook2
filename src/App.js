import Form from './components/Form/Form';
import Contact from './components/Contatcts/Contacts';
import Search from './components/Search/Search';

import './App.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitForm = data => {
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    )
      ? alert(
          `Такой контакт с именем ${
            data.name[0].toUpperCase() + data.name.slice(1)
          } уже есть `,
        )
      : this.setState(prevState => ({
          contacts: [data, ...prevState.contacts],
        }));
  };

  onDeleteContact = data => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== data),
    }));
  };

  onSearchInput = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const searchContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <div>
        <Form onSubmitForm={this.onSubmitForm} />,
        <Search onSearchInput={this.onSearchInput} />
        <Contact
          contacts={this.state.contacts}
          onDeleteContact={this.onDeleteContact}
          searchContact={searchContact}
        />
      </div>
    );
  }
}

export default App;
