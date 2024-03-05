import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchProducts: [],
  totalAmount: 0,
  insuficientCash: "",
  change: 0,
};

export const productSLice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      const { filterSearch } = action.payload;

      state.products.filter((product) => {
        if (product.id === filterSearch || product.name === filterSearch) {
          state.searchProducts.push(product);
        }
      });
    },
    addToCart: (state, action) => {
      const { id, name, cost, quantity } = action.payload;
      const amount = +cost * +quantity;
      state.products.push({ id, name, cost, quantity, amount });
      const totalAmount = state.products.reduce((accumulator, current) => {
        return accumulator + current.amount;
      }, 0);
      state.totalAmount = totalAmount;
    },
    save: (state, action) => {
      if (action.payload < state.totalAmount) {
        state.insuficientCash = "The cash you provided isnt enough to";
      }

      state.change = action.payload - state.totalAmount;
    },
    deleteProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
  },
});

export const { searchProducts, addToCart, save, deleteProduct } =
  productSLice.actions;

export default productSLice.reducer;
