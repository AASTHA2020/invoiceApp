import React, { useContext } from "react";
import { StateContext } from '../context/stateContext';

export default function Table() {
  const { list, total } = useContext(StateContext);

  return (
    <>
      <table width="100%" className="mb-10 bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold p-2">Description</td>
            <td className="font-bold p-2">Quantity</td>
            <td className="font-bold p-2">Price</td>
            <td className="font-bold p-2">Amount</td>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, description, quantity, price, amount }) => (
            <tr key={id} className="h-10">
              <td className="p-2">{description}</td>
              <td className="p-2">{quantity}</td>
              <td className="p-2">{price}</td>
              <td className="p-2">{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Total: {total.toLocaleString()}
        </h2>
      </div>
    </>
  );
}
