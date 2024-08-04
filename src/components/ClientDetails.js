import { useContext } from "react";
import { StateContext } from '../context/stateContext';


export default function ClientDetails() {
  const { clientName, clientAddress } = useContext(StateContext);

  return (
    <>
      <section className="mt-10">
        <h2 className="text-2xl uppercase font-bold mb-1">{clientName}</h2>
        <p>{clientAddress}</p>
      </section>
    </>
  );
}
