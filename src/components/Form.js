import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import css from "./style.module.css";

class Form extends Component {
  // ToDo contact
  state = {
    contact: {
      name: "",
      id: "",
      number: "",
    }
  };

  // ToDo methods
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState((prev) => ({ contact: { ...prev.contact, [name]: value, id: uuidv4() } }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { contacts } = this.props.users;
    const { contact } = this.state

    contacts.filter((w) => w.name.toLowerCase() == contact.name.toLowerCase()).length == 0
      ? this.props.addNewContact(contact)
      : alert(`${contact.name} is alredy in contacs`);

    e.target.reset()
  };

  // ToDo DOM tree
  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Enter your name" onChange={this.handleChange} required />

        <label htmlFor="number">Phone</label>
        <input
          id="number"
          name="number"
          type="tel"
          placeholder="Enter your phone"
          onChange={this.handleChange}
          required
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
