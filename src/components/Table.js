import React, { useContext } from "react";
import { StateContext } from '../context/stateContext';
import './Table.css'; // Ensure the CSS file is imported

export default function Table() {
  const { list, total } = useContext(StateContext);

  return (
    <>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, description, quantity, price, amount }) => (
            <tr key={id}>
              <td>{description}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-amount">
        <h2>Total: {total.toLocaleString()}</h2>
      </div>
    </>
  );
}
