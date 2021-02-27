import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { createContact } from '../../../redux/_actions/contact_action';
const AddContact = () => {
  const [addContactForm, setAddContactForm] = useState({
    first_name: '',
    last_name: '',
    Primay_email: '',
    address_details: '',
    assigned_to: '',
    date_of_birth: '',
    do_not_call: '',
    email_opt_out: '',
    organization_name: '',
    profile_picture: '',
    reports_to: '',
    sla_name: '',
    support_end_date: '',
    support_start_date: '',
    twitter_usernamem: '',
    lanugage: '',
  });
  const {
    first_name,
    last_name,
    Primay_email,
    organization_name,
    date_of_birth,
    reports_to,
    email_opt_out,
    assigned_to,
    do_not_call,
    support_start_date,
    support_end_date,
    sla_name,
    twitter_usernamem,
    address_details,
    profile_picture,
    lanugage,
  } = addContactForm;
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setAddContactForm({
      ...addContactForm,
      [name]: value,
    });
  };
  //Excute addContactForm action to dispatch contact data to the reducer.
  const handleSubmit = e => {
    let createContactItem = new FormData();
    createContactItem.append('first_name', first_name);
    createContactItem.append('last_name', last_name);
    createContactItem.append('Primay_email', Primay_email);
    createContactItem.append('organization_name', organization_name);
    createContactItem.append('date_of_birth', date_of_birth);
    createContactItem.append('assigned_to', assigned_to);
    createContactItem.append('email_opt_out', email_opt_out);
    createContactItem.append('do_not_call', do_not_call);
    createContactItem.append('support_start_date', support_start_date);
    createContactItem.append('support_end_date', support_end_date);
    createContactItem.append('sla_name', sla_name);
    createContactItem.append('address_details', address_details);
    createContactItem.append('reports_to', reports_to);
    createContactItem.append('profile_picture', profile_picture);
    createContactItem.append('twitter_usernamem', twitter_usernamem);
    createContactItem.append('lanugage', lanugage);
    console.log(createContactItem);
    dispatch(createContact(createContactItem));
    e.preventDefault();
    window.alert('The contact is added to the store successfully!!');
  };
  return (
    <div className="form">
      <h3 className="form-title">Add a Contact</h3>
      <form onSubmit={handleSubmit} id="addContactForm" className="contactForm">
        <div>
          <label>First Name</label>
          <input
            required
            onChange={e => handleChange(e)}
            type="text"
            name="first_name"
            id="first_name"
            value={first_name}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            required
            onChange={e => handleChange(e)}
            type="text"
            name="last_name"
            id="last_name"
            value={last_name}
          />
        </div>
        <div>
          <label>Primay Email</label>
          <input
            required
            onChange={e => handleChange(e)}
            type="text"
            name="Primay_email"
            id="Primay_email"
            value={Primay_email}
          />
        </div>
        <div>
          <label>Organization Name</label>
          <input
            onChange={e => handleChange(e)}
            type="text"
            name="organization_name"
            id="organization_name"
            value={organization_name}
          />
        </div>
        <div>
          <label>Birth Day</label>
          <input
            onChange={e => handleChange(e)}
            type="date"
            name="date_of_birth"
            id="date_of_birth"
            value={date_of_birth}
          />
        </div>
        <div>
          <label>Reports To</label>
          <input
            onChange={e => handleChange(e)}
            type="text"
            name="reports_to"
            id="reports_to"
            value={reports_to}
          />
        </div>
        <div>
          <label>Eamil Opt To</label>
          <input
            onChange={e => handleChange(e)}
            type="email"
            name="email_opt_out"
            id="email_opt_out"
            value={email_opt_out}
          />
        </div>
        <div>
          <label>Assigned To</label>
          <input
            onChange={e => handleChange(e)}
            type="text"
            name="assigned_to"
            id="assigned_to"
            value={assigned_to}
          />
        </div>
        <div>
          <label>Do not Call</label>
          <input
            onChange={e => handleChange(e)}
            type="checkbox"
            name="do_not_call"
            id="do_not_call"
            value={do_not_call}
          />
        </div>
        <div>
          <label>Stat Date</label>
          <input
            onChange={e => handleChange(e)}
            type="date"
            name="support_start_date"
            id="support_start_date"
            value={support_start_date}
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            onChange={e => handleChange(e)}
            type="date"
            name="support_end_date"
            id="support_end_date"
            value={support_end_date}
          />
        </div>
        <div>
          <label>Sla Name</label>
          <input
            onChange={e => handleChange(e)}
            type="text"
            name="sla_name"
            id="sla_name"
            value={sla_name}
          />
        </div>
        <div>
          <label>Twitter Name</label>
          <input
            onChange={e => handleChange(e)}
            type="text"
            name="twitter_usernamem"
            id="twitter_usernamem"
            value={twitter_usernamem}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            onChange={e => handleChange(e)}
            type="text"
            name="address_details"
            id="address_details"
            value={address_details}
          />
        </div>
        <div>
          <label>Profile Picture</label>
          <input
            onChange={e => handleChange(e)}
            type="text"
            name="profile_picture"
            id="profile_picture"
            value={profile_picture}
          />
        </div>
        <div>
          <label>Language</label>
          <input
            onChange={e => handleChange(e)}
            type="text"
            name="lanugage"
            id="lanugage"
            value={lanugage}
          />
        </div>
      </form>
      <Button
        variant="success"
        className="formButton"
        type="submit"
        form="addContactForm"
      >
        Add
      </Button>
    </div>
  );
};

export default AddContact;
