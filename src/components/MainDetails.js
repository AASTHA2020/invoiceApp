import React, { useContext } from "react";
import { StateContext } from '../context/stateContext';

export default function MainDetails() {
  const { name, address, email, phone, bankName, bankAccount, website } = useContext(StateContext);

  return (
    <>
      <section className="flex flex-col items-end justify-end">
        <h2 className="font-bold text-3xl uppercase mb-1">{name}</h2>
        <p>{address}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
        <p>Bank Name: {bankName}</p>
        <p>Bank Account: {bankAccount}</p>
      </section>
    </>
  );
}
