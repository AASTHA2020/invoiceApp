// src/components/YourComponent.js
import React, { useEffect, useContext } from "react";
import { StateContext } from "../context/stateContext"; // Adjust the path accordingly

function YourComponent() {
  const {
    name, setName,
    address, setAddress,
    email, setEmail,
    phone, setPhone,
    bankName, setBankName,
    bankAccount, setBankAccount,
    website, setWebsite,
    clientName, setClientName,
    clientAddress, setClientAddress,
    invoiceNumber, setInvoiceNumber,
    invoiceDate, setInvoiceDate,
    dueDate, setDueDate,
    notes, setNotes,
    componentRef, setComponentRef,
    description, setDescription,
    quantity, setQuantity,
    price, setPrice,
    amount, setAmount,
    list, setList,
    total, setTotal,
    isEditing, setIsEditing,
    showModal, setShowModal,
    handleSubmit,
    editRow,
    deleteRow,
  } = useContext(StateContext);

  useEffect(() => {
    // Example: Store data in localStorage
    localStorage.setItem("username", "JohnDoe");

    // Example: Retrieve data from localStorage
    const username = localStorage.getItem("username");
    console.log(username); // Should log "JohnDoe"
  }, []);

  return (
    <div>
      <h1>Your Component</h1>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      {/* Render other state variables and use functions as needed */}
    </div>
  );
}

export default YourComponent;
