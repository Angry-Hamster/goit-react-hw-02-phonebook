import React, { Component } from "react";

import "./App.css";
import Contacts from "./components/Contacts";
import Form from "./components/Form";
import Filter from "./components/Filter";

class App extends Component {
  // ToDo contacts
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  // ToDo methods
  addNewContact = (user) => {
    this.setState((prev) => ({ contacts: [...prev.contacts, user]}));
  };

  getFilter = (filter) => {
    this.setState({ filter: filter });
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(w => w.id != id) });
  };

  // ToDo DOM tree
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form addNewContact={this.addNewContact} users={this.state.contacts} />

        <h2>Contacts</h2>
        <Filter filter={this.getFilter} />
        <Contacts users={this.state} deleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
