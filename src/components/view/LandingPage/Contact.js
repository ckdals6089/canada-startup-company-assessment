import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';

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
  return (
    <tbody>
      <tr>
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
        <td>{profile_picture}</td>
        <td>{lanugage}</td>
      </tr>
    </tbody>
  );
};

export default Contact;
