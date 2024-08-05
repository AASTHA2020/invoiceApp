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
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Function to update the total amount
  const updateTotal = (items) => {
    const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);
    setTotal(totalAmount);
  };

  // Handle form submit for adding or editing items
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: list.length ? list[list.length - 1].id + 1 : 1,
      description,
      quantity,
      price,
      amount: quantity * price,
    };
    if (isEditing) {
      setList(list.map(item => item.id === editId ? newItem : item));
      setIsEditing(false);
      setEditId(null);
    } else {
      setList([...list, newItem]);
    }
    setDescription('');
    setQuantity('');
    setPrice('');
    setAmount(0);
    updateTotal([...list, newItem]);
  };

  // Edit row function to populate form fields with existing item data
  const editRow = (id) => {
    const item = list.find(item => item.id === id);
    setDescription(item.description);
    setQuantity(item.quantity);
    setPrice(item.price);
    setIsEditing(true);
    setEditId(id);
  };

  // Function to delete an item from the list
  const deleteRow = (id) => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
    setShowModal(false);
    updateTotal(newList);
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
        deleteRow, // Include deleteRow function
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
