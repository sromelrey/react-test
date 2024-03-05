"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "./redux/productSlice";

function TableProduct() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product);
  const handleDeleteProduct = (id) => dispatch(deleteProduct(id));
  return (
    <div class='relative overflow-x-auto'>
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
          {products.products.length > 0 &&
            products.products.map((product) => (
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
                <td
                  class='px-6 py-4'
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  {" "}
                  Delete
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableProduct;
