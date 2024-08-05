// src/components/TableForm.js
import React, { useContext } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./DeleteModal";
import { StateContext } from '../context/stateContext';
import './tableFormStyles.css'; // Import the new CSS file

export default function TableForm() {
  const {
    description,
    setDescription,
    quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    list = [],
    total,
    isEditing,
    showModal,
    setShowModal,
    handleSubmit,
    editRow,
    deleteRow // Include deleteRow for deletion
  } = useContext(StateContext);

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="description" className="font-bold">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            maxLength={96}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="quantity" className="font-bold">Quantity</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price" className="font-bold">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount" className="font-bold">Amount</label>
            <p className="input-field">{amount}</p>
          </div>
        </div>

        <button
          type="submit"
          className="submit-button"
        >
          {isEditing ? "Finish Editing" : "Add Item"}
        </button>
      </form>

      <table className="table-container">
        <thead>
          <tr className="table-header">
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, description, quantity, price, amount }) => (
            <React.Fragment key={id}>
              <tr className="table-row">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
                <td>
                  <button onClick={() => editRow(id)} className="text-green-500">
                    <AiOutlineEdit />
                  </button>
                  <button onClick={() => deleteRow(id)} className="text-red-500">
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
              {showModal && <DeleteModal id={id} />}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <div className="total">
        Total: {total.toLocaleString()}
      </div>

      <div className="additional-notes-container">
        <p>Your additional notes will be shown here. If they are too long, scroll within this container.</p>
      </div>
    </>
  );
}
