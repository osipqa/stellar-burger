import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { orderBurgerApi } from '@api';
import { TConstructorIngredient, TIngredient, TOrder } from '@utils-types';
import { RootState } from '../store';
import { v4 as uuidv4 } from 'uuid';

// Define the shape of the constructor state
export type TConstructorState = {
  bun: TConstructorIngredient | null;
  ingredients: TConstructorIngredient[];
};

// Initial state of the constructor slice
export const initialState: TConstructorState = {
  bun: null,
  ingredients: []
};

// Async thunk to order a burger
export const orderBurger = createAsyncThunk(
  'user/order',
  async (data: string[]) => orderBurgerApi(data)
);

// Define the constructor slice
export const constructorSlice = createSlice({
  name: 'constructorBurger',
  initialState,
  reducers: {
    // Add an ingredient to the constructor
    addIngredient: {
      reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
        if (action.payload.type === 'bun') {
          state.bun = action.payload;
        } else {
          state.ingredients.push(action.payload);
        }
      },
      prepare: (ingredient: TIngredient) => ({
        payload: { ...ingredient, id: uuidv4() }
      })
    },
    removeIngredient: (state, action) => {
      const indexToRemove = state.ingredients.findIndex(
        (i) => i._id === action.payload
      );
      if (indexToRemove !== -1) {
        state.ingredients.splice(indexToRemove, 1);
      }
    },
    // Move an ingredient up in the constructor
    moveIngredientUp: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index > 0 && index < state.ingredients.length) {
        const temp = state.ingredients[index - 1];
        state.ingredients[index - 1] = state.ingredients[index];
        state.ingredients[index] = temp;
      }
    },
    // Move an ingredient down in the constructor
    moveIngredientDown: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index >= 0 && index < state.ingredients.length - 1) {
        const temp = state.ingredients[index + 1];
        state.ingredients[index + 1] = state.ingredients[index];
        state.ingredients[index] = temp;
      }
    },
    // Reset the order modal data
    resetModal: (state) => (state = initialState),
    // Clear all constructor data
    clearAll: (state) => (state = initialState)
  },
  selectors: {
    // Selector to get the entire constructor state
    getConstructorSelector: (state) => state
  }
});

// Export reducer actions
export const {
  addIngredient,
  removeIngredient,
  moveIngredientUp,
  moveIngredientDown,
  resetModal,
  clearAll
} = constructorSlice.actions;

// Reducer
export const constructorReducer = constructorSlice.reducer;

// Selector to get the constructor state
export const getConstructorState = (state: RootState) =>
  state.constructorBurger;

// Export selector actions
export const { getConstructorSelector } = constructorSlice.selectors;
export default constructorSlice.reducer;
