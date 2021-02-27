import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import AddContact from './AddContact';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { readAllContact } from '../../../redux/_actions/contact_action';
import { Button, Table } from 'react-bootstrap';
import Modal from 'react-modal';

const Landing = ({ accessToken }) => {
  const contactList = useSelector(state => state.contactReducer.contacts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  useEffect(() => {
    dispatch(readAllContact(accessToken));
  }, []);

  return (
    <div>
      <div className="contact-header">
        <h2 className="contactlist-h2">Contact List</h2>
        <Button onClick={modalToggle} variant="dark">
          Add Contact
        </Button>
        <Modal className="content" ariaHideApp={false} isOpen={isModalOpen}>
          <Button variant="danger" onClick={modalToggle} className="modal-btn">
            X
          </Button>
          <AddContact />
        </Modal>
      </div>
      <Table
        responsive
        striped
        bordered
        hover
        variant="dark"
        className="table-width"
      >
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
