import Form from './form/form';

import './App.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  state = {
    contacts: [],
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

  render() {
    console.log(this.state.contacts);
    return <Form onSubmitForm={this.onSubmitForm} />;
  }
}

export default App;
