import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getIngredientsApi } from '@api';
import { TIngredient } from '@utils-types';

// Define the shape of the ingredients state
type TIngredientsState = {
  ingredients: TIngredient[];
  buns: TIngredient[];
  mains: TIngredient[];
  sauces: TIngredient[];
  isLoading: boolean;
  error: string | null;
};

// Initial state of the ingredients slice
const initialState: TIngredientsState = {
  ingredients: [],
  buns: [],
  mains: [],
  sauces: [],
  isLoading: false,
  error: null
};

// Async thunk to fetch ingredients
export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  getIngredientsApi
);

// Define the ingredient slice
export const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {}, // No reducers defined
  selectors: {
    // Selector to get the entire ingredient state
    getIngredientState: (state) => state,
    // Selector to get an ingredient by ID
    getIngredientId: (state, payload): TIngredient | undefined =>
      state.ingredients.find((i) => i._id === payload.id)
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action: PayloadAction<TIngredient[]>) => {
        state.isLoading = false;
        state.ingredients = action.payload;
        state.buns = action.payload.filter((item) => item.type === 'bun');
        state.mains = action.payload.filter((item) => item.type === 'main');
        state.sauces = action.payload.filter((item) => item.type === 'sauce');
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch ingredients';
      });
  }
});

// Export selector actions
export const { getIngredientState, getIngredientId } =
  ingredientSlice.selectors;

// Reducer
export const ingredientsReducer = ingredientSlice.reducer;
