import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { RootState } from '../store';
import { orderBurgerApi } from '@api';

// Define the shape of the order state
type TOrderState = {
  orders: TOrder | null; // Changed to TOrder | null
  request: boolean;
  error: string | undefined; // Error message, if any
};

// Initial state of the order slice
export const initialState: TOrderState = {
  orders: null, // Changed to null
  request: false,
  error: undefined
};

// Async thunk to post an order
export const postOrder = createAsyncThunk('order/createOrder', orderBurgerApi);

// Define the order slice
export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearOrder: () => initialState
  },
  selectors: {
    getOrderRequest: (state) => state.request,
    getOrderModalData: (state) => state.orders
  },
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state) => {
        state.request = true;
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.request = false;
        state.orders = action.payload.order;
      });
  }
});

// Export reducer actions
export const { clearOrder } = orderSlice.actions;

// Selectors
export const getOrderState = (state: RootState) => state.order;

// Reducer
export const orderReducer = orderSlice.reducer;
export default orderSlice.reducer;
