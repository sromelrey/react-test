"use client";
import React, { useState } from "react";
import { searchProducts } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

function SearchProduct() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [filterSearch, setFilterSearch] = useState("");

  const handleOnSearchProduct = () => {
    dispatch(searchProducts({ filterSearch }));
    setFilterSearch("");
  };
  console.log(products.searchProducts);
  return (
    <div>
      <label>Search Product:</label>
      <input
        class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type='text'
        value={filterSearch}
        onChange={(e) => setFilterSearch(e.target.value)}
      />
      <button
        type='button'
        class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
        onClick={handleOnSearchProduct}
      >
        search
      </button>
      {products.searchProducts.length > 0 && (
        <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' class='px-6 py-3'>
                Product ID
              </th>
              <th scope='col' class='px-6 py-3'>
                Product Name
              </th>
              <th scope='col' class='px-6 py-3'>
                Cost
              </th>
              <th scope='col' class='px-6 py-3'>
                Quantity
              </th>
              <th scope='col' class='px-6 py-3'>
                Amount
              </th>
              <th scope='col' class='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.searchProducts.length > 0 &&
              products.searchProducts.map((product) => (
                <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <th
                    scope='row'
                    class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    {product.id}
                  </th>
                  <td class='px-6 py-4'> {product.name}</td>
                  <td class='px-6 py-4'> {product.cost}</td>
                  <td class='px-6 py-4'>{product.quantity}</td>
                  <td class='px-6 py-4'>$ {product.amount}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SearchProduct;
