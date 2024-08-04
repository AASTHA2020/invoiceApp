import React, { useContext, useRef } from 'react';
import ClientDetails from '../components/ClientDetails';
import Dates from '../components/Dates';
import Footer from '../pages/components/Footer';
import Header from '../pages/components/Header';
import MainDetails from '../components/MainDetails';
import Notes from '../components/Notes';
import Table from '../components/Table';
import TableForm from '../components/TableForm';
import ReactToPrint from 'react-to-print';
import { State } from '../context/stateContext';

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
    componentRef,
  } = useContext(State);

  console.log('InvoiceForm rendered');

  return (
    <main className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start" style={{ maxWidth: "1920px", margin: "auto" }}>
      <section>
        <div className="bg-white p-5 rounded shadow">
          <div className="flex flex-col justify-center">
            <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label htmlFor="name">Your full name</label>
                <input
                  type="text"
                  name="text"
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
                <label htmlFor="invoiceNumber">Invoice Number</label>
                <input
                  type="text"
                  name="invoiceNumber"
                  id="invoiceNumber"
                  placeholder="Invoice Number"
                  maxLength={10}
                  autoComplete="off"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="invoiceDate">Invoice Date</label>
                <input
                  type="date"
                  name="invoiceDate"
                  id="invoiceDate"
                  placeholder="Invoice Date"
                  maxLength={10}
                  autoComplete="off"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="dueDate">Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  placeholder="Due Date"
                  maxLength={10}
                  autoComplete="off"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </article>
            <article>
              <TableForm />
              <Table />
            </article>
            <article>
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </article>
            <article className="md:mt-20 mt-10">
              <ReactToPrint
                trigger={() => (
                  <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                    Print / Download
                  </button>
                )}
                content={() => componentRef.current}
              />
              <div className="hidden">
                <div ref={componentRef} className="p-5">
                  <Header />
                  <MainDetails />
                  <ClientDetails />
                  <Dates />
                  <Table />
                  <Notes />
                  <Footer />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InvoiceForm;
