import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import css from "./style.module.css";

class Form extends Component {
  // ToDo contact
  state = {
    name: "",
    id: "",
    number: "",
  };

  // ToDo methods
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
    this.setState({ id: uuidv4() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { contacts } = this.props.users;

    contacts.find((element) => element.name.toLowerCase() == this.state.name.toLowerCase()) == undefined
      ? this.props.addNewContact(this.state)
      : alert(`${this.state.name} is alredy in contacs`);

    // ? clear form
    e.target.children[1].value = "";
    e.target.children[3].value = "";
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
