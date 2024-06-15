import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsReducer } from './slices/ingredientsSlice';
import { constructorReducer } from './slices/constructorSlice';
import { feedsReducer } from './slices/feedSlice';
import { userReducer } from './slices/userSlice';
import { orderReducer } from './slices/orderSlice';
import { userOrderReducer } from './slices/userOrderSlice';
import { rootReducer } from './rootReducer';
import { expect, test } from '@jest/globals';

const expectedReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorBurger: constructorReducer,
  feed: feedsReducer,
  user: userReducer,
  userOrder: userOrderReducer,
  order: orderReducer
});

test('с богом', () => { // c:
  const UNKNOWN_ACTION = { type: 'UNKNOWN_ACTION' };
  const APP_INIT = { type: 'APP_INIT' };
  const initialState = expectedReducer(undefined, UNKNOWN_ACTION)
  expect(rootReducer(undefined, APP_INIT)).toEqual(initialState);
});
