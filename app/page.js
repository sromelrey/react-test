"use client";
import styles from "./page.module.css";
import SearchProduct from "./searchProduct";
import AddProduct from "./AddProduct";
import TableProduct from "./tableProduct";
import TotalProduct from "./totalProduct";
import { Provider } from "react-redux";
import store from "./store.js";

export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <SearchProduct />
        <AddProduct />
        <TableProduct />
        <TotalProduct />
      </main>
    </Provider>
  );
}
