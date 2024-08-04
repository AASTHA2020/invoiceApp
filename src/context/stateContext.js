import React, { createContext, useState } from 'react';

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [website, setWebsite] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');
  const [componentRef, setComponentRef] = useState(null); // For ReactToPrint

  // Additional state variables and functions for TableForm
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState(0);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic
  };

  const editRow = (id) => {
    // Handle edit row logic
  };

  return (
    <StateContext.Provider
      value={{
        name,
        setName,
        address,
        setAddress,
        email,
        setEmail,
        phone,
        setPhone,
        bankName,
        setBankName,
        bankAccount,
        setBankAccount,
        website,
        setWebsite,
        clientName,
        setClientName,
        clientAddress,
        setClientAddress,
        invoiceNumber,
        setInvoiceNumber,
        invoiceDate,
        setInvoiceDate,
        dueDate,
        setDueDate,
        notes,
        setNotes,
        componentRef,
        setComponentRef, // Provide setter if needed

        // Additional state variables and functions
        description,
        setDescription,
        quantity,
        setQuantity,
        price,
        setPrice,
        amount,
        setAmount,
        list,
        setList,
        total,
        setTotal,
        isEditing,
        setIsEditing,
        showModal,
        setShowModal,
        handleSubmit,
        editRow,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
