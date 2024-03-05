"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { save } from "./redux/productSlice";

function TotalProduct() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [cash, setCash] = useState("");

  const handleSaved = () => {
    dispatch(save(cash));
    setCash("");
  };
  console.log(products.products.length);
  return (
    <div>
      <div class='flex flex-col'>
        <div class='justify-between'>
          <label>Total Amount:</label>
          <input
            class='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            disabled={true}
            value={products.totalAmount}
          />
        </div>
        <div class='justify-between'>
          <label>Cash:</label>
          <input
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            onChange={(e) => setCash(e.target.value)}
            value={cash}
          />
        </div>
        <div class='justify-between'>
          <label>Change:</label>
          <input
            class='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            disabled={true}
            value={products.change}
          />
          <button
            type='button'
            class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            onClick={handleSaved}
          >
            Saved
          </button>
        </div>
      </div>
    </div>
  );
}

export default TotalProduct;
