import { describe, expect, test } from '@jest/globals';
import { getOrder, userOrderReducer, initialState } from './userOrderSlice';
import { TOrder } from '@utils-types';
import { Action } from '@reduxjs/toolkit';

describe('userOrder slice', () => {
  const mockOrders: TOrder[] = [
    {
      _id: '1',
      ingredients: ['60d3b41abdacab0026a733c6', '60d3b41abdacab0026a733c7'],
      status: 'done',
      name: 'Space флюоресцентный бургер',
      createdAt: '2021-06-27T16:33:14.667Z',
      updatedAt: '2021-06-27T16:33:14.667Z',
      number: 3456
    },
    {
      _id: '2',
      ingredients: ['60d3b41abdacab0026a733c8', '60d3b41abdacab0026a733c9'],
      status: 'pending',
      name: 'Galaxy бургер',
      createdAt: '2021-06-28T16:33:14.667Z',
      updatedAt: '2021-06-28T16:33:14.667Z',
      number: 3457
    }
  ];

  test('тут тоже должно работать, но не уверен', () => {
    const action = { type: getOrder.fulfilled.type, payload: mockOrders };
    const state = userOrderReducer(initialState, action);
    expect(state.orders).toEqual(mockOrders);
  });

});
