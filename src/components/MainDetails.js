import React, { useContext } from "react";
import { StateContext } from '../context/stateContext';

export default function MainDetails() {
  const { name, address, email, phone, bankName, bankAccount, website } = useContext(StateContext);

  return (
    <>
      <section className="flex flex-col items-end justify-end">
        <h2 className="font-bold text-xl uppercase mb-1">{name}</h2>
        <p>{address}</p>
      </section>

      <section className="my-5 flex flex-col items-end justify-end">
        <h3 className="text-2xl uppercase mb-1">Contact Details</h3>
        <p>{email}</p>
        <p>{phone}</p>
      </section>

      <section className="flex flex-col items-end justify-end">
        <h3 className="font-bold uppercase mb-1">Bank Details</h3>
        <p>{bankName}</p>
        <p>{bankAccount}</p>
      </section>

      <section className="flex flex-col items-end justify-end">
        <h3 className="font-bold uppercase mb-1">Website</h3>
        <p>{website}</p>
      </section>
    </>
  );
}
