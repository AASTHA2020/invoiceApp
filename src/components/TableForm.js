import React, { useContext } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./DeleteModal";
import { StateContext } from '../context/stateContext';

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
  } = useContext(StateContext);

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />

      <form onSubmit={handleSubmit} className="bg-white p-5 shadow-md rounded mb-5">
        <div className="flex flex-col mb-4">
          <label htmlFor="description" className="font-bold mb-2">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            maxLength={96}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="md:grid grid-cols-3 gap-10 mb-4">
          <div className="flex flex-col">
            <label htmlFor="quantity" className="font-bold mb-2">Quantity</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price" className="font-bold mb-2">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount" className="font-bold mb-2">Amount</label>
            <p className="border border-gray-300 p-2 rounded">{amount}</p>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 transition-all duration-150"
        >
          {isEditing ? "Finish Editing" : "Add Item"}
        </button>
      </form>

      <table width="100%" className="mb-10 overflow-auto bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold p-2">Description</td>
            <td className="font-bold p-2">Quantity</td>
            <td className="font-bold p-2">Price</td>
            <td className="font-bold p-2">Amount</td>
            <td className="font-bold p-2">Actions</td>
          </tr>
        </thead>
        <tbody>
          {list.map(({ id, description, quantity, price, amount }) => (
            <React.Fragment key={id}>
              <tr className="h-10">
                <td className="p-2">{description}</td>
                <td className="p-2">{quantity}</td>
                <td className="p-2">{price}</td>
                <td className="p-2">{amount}</td>
                <td className="p-2 flex gap-2">
                  <button onClick={() => editRow(id)} className="text-green-500">
                    <AiOutlineEdit className="text-xl" />
                  </button>
                  <button onClick={() => setShowModal(true)} className="text-red-500">
                    <AiOutlineDelete className="text-xl" />
                  </button>
                </td>
              </tr>
              {showModal && <DeleteModal id={id} />}
            </React.Fragment>
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
