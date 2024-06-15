import { describe, expect, test } from '@jest/globals';
<<<<<<< HEAD
import {
  postOrder,
  orderReducer,
  initialState,
  clearOrder
} from './orderSlice';
import { TOrder } from '@utils-types';
import { Action } from '@reduxjs/toolkit';
=======
import { postOrder, orderReducer, initialState, clearOrder } from './orderSlice';
import { TOrder } from '@utils-types';
import { AnyAction } from '@reduxjs/toolkit';
>>>>>>> main

describe('order slice', () => {
  const mockOrder: TOrder = {
    _id: '1',
    ingredients: ['60d3b41abdacab0026a733c6', '60d3b41abdacab0026a733c7'],
    status: 'done',
    name: 'Space флюоресцентный бургер',
    createdAt: '2021-06-27T16:33:14.667Z',
    updatedAt: '2021-06-27T16:33:14.667Z',
    number: 3456
  };

  test('должен обрабатывать начальное состояние', () => {
<<<<<<< HEAD
    expect(orderReducer(undefined, {} as Action )).toEqual(initialState);
=======
    expect(orderReducer(undefined, {} as AnyAction)).toEqual(initialState);
>>>>>>> main
  });

  test('должен обрабатывать postOrder.pending', () => {
    const action = { type: postOrder.pending.type };
    const state = orderReducer(initialState, action);
    expect(state).toEqual({ ...initialState, request: true });
  });

  test('должен обрабатывать postOrder.rejected', () => {
<<<<<<< HEAD
    const action = {
      type: postOrder.rejected.type,
      error: { message: 'Не удалось создать заказ' }
    };
    const state = orderReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      error: 'Не удалось создать заказ',
      request: false
    });
  });

  test('должен обрабатывать postOrder.fulfilled', () => {
    const action = {
      type: postOrder.fulfilled.type,
      payload: { order: mockOrder }
    };
    const state = orderReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      orders: mockOrder,
      request: false
    });
=======
    const action = { type: postOrder.rejected.type, error: { message: 'Не удалось создать заказ' } };
    const state = orderReducer(initialState, action);
    expect(state).toEqual({ ...initialState, error: 'Не удалось создать заказ', request: false });
  });

  test('должен обрабатывать postOrder.fulfilled', () => {
    const action = { type: postOrder.fulfilled.type, payload: { order: mockOrder } };
    const state = orderReducer(initialState, action);
    expect(state).toEqual({ ...initialState, orders: mockOrder, request: false });
>>>>>>> main
  });

  test('должен обрабатывать clearOrder', () => {
    const state = orderReducer(
      { ...initialState, orders: mockOrder, request: false, error: 'Ошибка' },
      clearOrder()
    );
    expect(state).toEqual(initialState);
  });
});
