import React, { Component } from "react";

import css from "./style.module.css";

class Contact extends Component {
  // ToDo function
  handlefilter = (prop) => {
    const { filter, contacts } = prop;

    if (filter == "") {
      return contacts;
    } else {
      return contacts.filter((w) => w.name.toLowerCase().includes(filter.toLowerCase()));
    }
  };

  handleDelete = (e) => {
    if (window.confirm(`Delete ${e.target.parentNode.firstChild.textContent}?`)) {
      this.props.deleteContact(e.target.parentNode.id);
    }
  };

  // ToDo DOM tree
  render() {
    return (
      <ul className={css.contactList}>
        {this.handlefilter(this.props.users).map((item) => {
          return (
            <li key={item.id} id={item.id}>
              <span>
                {item.name}: {item.number}
              </span>

              <button onClick={this.handleDelete}> Delete </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Contact;

// this.props.users.contacts.map((item) => {
//   return (
//     <li key={item.id}>
//       {item.name}: {item.number}
//     </li>
//   );
// })
