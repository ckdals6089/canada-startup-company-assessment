import React, { useState } from 'react';
import UpdateContact from './UpdateContact';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/_actions/contact_action';
const Contact = ({ contact }) => {
  const {
    id,
    first_name,
    last_name,
    Primay_email,
    address_details,
    assigned_to,
    date_of_birth,
    do_not_call,
    email_opt_out,
    organization_name,
    profile_picture,
    reports_to,
    sla_name,
    support_end_date,
    support_start_date,
    twitter_usernamem,
    lanugage,
  } = contact;
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <tbody>
      <tr>
        <Modal className="content" ariaHideApp={false} isOpen={isModalOpen}>
          <Button variant="danger" onClick={modalToggle} className="modal-btn">
            X
          </Button>
          <UpdateContact key={id} contactData={contact} />
        </Modal>
        <td>{id}</td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{Primay_email}</td>
        <td>{organization_name}</td>
        <td>{date_of_birth}</td>
        <td>{reports_to}</td>
        <td>{email_opt_out}</td>
        <td>{do_not_call}</td>
        <td>{assigned_to}</td>
        <td>{support_end_date}</td>
        <td>{support_start_date}</td>
        <td>{sla_name}</td>
        <td>{twitter_usernamem}</td>
        <td>{address_details}</td>
        <td>{lanugage}</td>
        <td>
          <Button variant="danger" onClick={() => handleDeleteContact(id)}>
            Delete
          </Button>
        </td>
        <td>
          <Button onClick={modalToggle} variant="dark">
            Update
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default Contact;
