import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import { useDispatch } from 'react-redux';
import { readAllContact } from '../../../_actions/contact_action';

const Landing = ({ accessToken }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(accessToken);
    dispatch(readAllContact(accessToken))
      .then(response => {
        console.log(response.payloady);
      })
      .catch(error => {
        console.log(error);
      });
  }, [accessToken]);
  return (
    <div>
      Welcome!
      <Contact />
    </div>
  );
};

export default Landing;
