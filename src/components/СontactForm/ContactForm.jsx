// import { Component } from "react";
import css from "../СontactForm/ContactForm.module.css";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

const ContactForm = ({ onAddContact }) => {

    const addContact = (evt) => {
      evt.preventDefault();
      const form = evt.target;
      const { name, number } = form.elements;
      const contact = {
        name: name.value,
        number: number.value,
        id: nanoid(),
      }
  
      onAddContact(contact);
      name.value = "";
      number.value = "";
    }
  
      return <div className={css.container}>
        <form
          onSubmit={addContact}> 
          <label className={css.label}>
            Name
            <input className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            ></input>
          </label>
          <label className={css.label}>
            Number
            <input className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            ></input>
          </label>
          <button type="submit" className={ css.add}>Add contact</button>
        </form>
        </div>
    }

  export default ContactForm;
  
  ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
  }