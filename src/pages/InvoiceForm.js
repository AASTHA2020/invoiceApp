import React, { useContext, useRef } from "react";
import ClientDetails from '../components/ClientDetails';
import Dates from '../components/Dates';
import Footer from '../pages/components/Footer';
import Header from '../pages/components/Header';
import MainDetails from '../components/MainDetails';
import Notes from '../components/Notes';
import Table from '../components/Table';
import TableForm from '../components/TableForm';
import ReactToPrint from 'react-to-print';
import { StateContext } from '../context/stateContext';
import logo from '../images/logo.jpg';
import './InvoiceForm.css'; // Import the CSS file

const InvoiceForm = () => {
  const {
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
    items,
    setComponentRef,
  } = useContext(StateContext);

  const ref = useRef();
  React.useEffect(() => {
    setComponentRef(ref);
  }, [setComponentRef]);

  return (
    <main className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start" style={{ maxWidth: '1920px', margin: 'auto' }}>
      {/* Invoice Form Section */}
      <section className="bg-white p-5 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Invoice Form</h2>
        <article className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label htmlFor="name">Your full name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              maxLength={56}
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">Enter your address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter your address"
              autoComplete="off"
              maxLength={96}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </article>
        <article className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              maxLength={255}
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="website">Enter your website</label>
            <input
              type="url"
              name="website"
              id="website"
              placeholder="Enter your website"
              maxLength={96}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Enter your phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone"
              maxLength={12}
              autoComplete="off"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </article>
        <article className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label htmlFor="bankName">Enter your bank name</label>
            <input
              type="text"
              name="bankName"
              id="bankName"
              placeholder="Enter your bank name"
              maxLength={56}
              autoComplete="off"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="bankAccount">Enter your bank account number</label>
            <input
              type="text"
              name="bankAccount"
              id="bankAccount"
              placeholder="Enter your bank account number"
              maxLength={32}
              autoComplete="off"
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
            />
          </div>
        </article>
        <article className="md:grid grid-cols-2 gap-10 md:mt-10">
          <div className="flex flex-col">
            <label htmlFor="clientName">Enter your client's name</label>
            <input
              type="text"
              name="clientName"
              id="clientName"
              placeholder="Enter your client's name"
              maxLength={56}
              autoComplete="off"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="clientAddress">Enter your client's address</label>
            <input
              type="text"
              name="clientAddress"
              id="clientAddress"
              placeholder="Enter your client's address"
              maxLength={96}
              autoComplete="off"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
            />
          </div>
        </article>
        <article className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label htmlFor="invoiceNumber">Invoice number</label>
            <input
              type="text"
              name="invoiceNumber"
              id="invoiceNumber"
              placeholder="Invoice number"
              maxLength={10}
              autoComplete="off"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="invoiceDate">Invoice date</label>
            <input
              type="date"
              name="invoiceDate"
              id="invoiceDate"
              placeholder="Invoice date"
              autoComplete="off"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />
          </div>
        </article>
        <article className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label htmlFor="dueDate">Due date</label>
            <input
              type="date"
              name="dueDate"
              id="dueDate"
              placeholder="Due date"
              autoComplete="off"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="notes">Additional notes</label>
            <textarea
              name="notes"
              id="notes"
              placeholder="Additional notes"
              maxLength={256}
              autoComplete="off"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </article>
        <TableForm />
      </section>

      {/* Invoice Certificate Section */}
      <section className="invoice-certificate" ref={ref}>
        <div className="header-container">
        <img src={logo} alt="Logo" className="logo" />

          <h1>Invoice Certificate</h1>
        </div>

        <MainDetails />
        <ClientDetails />
        <Dates />
        <Table />
        <Notes />

        <div className="footer-section">
          <Footer />
        </div>
      </section>

      <ReactToPrint
        trigger={() => <button className="print-button">Print Certificate</button>}
        content={() => ref.current}
      />
    </main>
  );
};

export default InvoiceForm;
