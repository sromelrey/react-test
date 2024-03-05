"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/productSlice";

function AddProduct() {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [cost, setCost] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const handleAddProduct = () => {
    dispatch(
      addToCart({
        id,
        name,
        cost,
        quantity,
      })
    );
    setId("");
    setName("");
    setCost("");
    setQuantity("");
  };

  return (
    <div>
      <div class='flex flex-row justify-items-stretch'>
        <div class='justify-between '>
          <label>ProductID:</label>
          <input
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <div class='justify-between'>
            <label>Product Name:</label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        </div>
      </div>
      <div class='flex flex-row m-10'>
        <div class='justify-between'>
          <label>Cost:</label>
          <input
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            onChange={(e) => setCost(e.target.value)}
            value={cost}
          />
        </div>

        <div class='justify-between'>
          <label>Quantity:</label>
          <input
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />
        </div>
        <button
          type='button'
          class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          onClick={handleAddProduct}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
