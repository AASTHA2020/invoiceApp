// src/components/MainDetails.js
import React, { useContext } from 'react';
import { StateContext } from '../context/stateContext'; // Update the path as needed
import './invoiceStyles.css'; // Update the path as needed

export default function MainDetails() {
  const {
    name,
    address,
    email,
    phone,
    bankName,
    bankAccount,
    website,
    clientName,
    clientAddress,
    invoiceNumber,
    invoiceDate,
    dueDate,
    notes
  } = useContext(StateContext);

  return (
    <div className="invoice-container">
      <header className="header">
        
        <div className="date-info">
          <p>Date: {invoiceDate}</p>
          <p>Due Date: {dueDate}</p>
        </div>
      </header>

      <section className="company-details">
        <p><strong>{name}</strong></p>
        <p>{address}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </section>

   

     
    </div>
  );
}
