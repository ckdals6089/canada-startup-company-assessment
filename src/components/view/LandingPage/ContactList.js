import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import { useDispatch, useSelector } from 'react-redux';
import { readAllContact } from '../../../redux/_actions/contact_action';
import { Button, Table } from 'react-bootstrap';

const Landing = ({ accessToken }) => {
  const [contactList, setContactList] = useState([]);
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(readAllContact(accessToken))
      .then(response => {
        if (response.payload.data) {
          setContactList(response.payload.data);
        }
        console.log(response.payload);
        console.log(contactList);
      })
      .catch(error => {
        console.log(error);
      });
  }, [accessToken]);
  return (
    <div>
      <div className="contact-header">
        <h2 className="contactlist-h2">Contact List</h2>
        <Button variant="dark">Add Contact</Button>
      </div>
      <Table striped bordered hover variant="dark" className="table-width">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Organization</th>
            <th>Birth</th>
            <th>Reports To</th>
            <th>Email_opt_out</th>
            <th>Call</th>
            <th>Assigned To</th>
            <th>Start</th>
            <th>End</th>
            <th>SLA</th>
            <th>Twitter</th>
            <th>Address</th>
            <th>Profile</th>
            <th>Lanugage</th>
          </tr>
        </thead>
        {contactList.map((item, key) => {
          return <Contact key={key} contact={item} />;
        })}
      </Table>
    </div>
  );
};

export default Landing;
