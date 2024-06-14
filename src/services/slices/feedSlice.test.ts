import { describe, expect, test } from '@jest/globals';
import { getFeeds, feedsReducer, initialState } from './feedSlice';
import { TOrder } from '@utils-types';
import { AnyAction } from '@reduxjs/toolkit';

describe('feed slice', () => {
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
      name: 'Earth бургер',
      createdAt: '2021-06-27T16:33:14.667Z',
      updatedAt: '2021-06-27T16:33:14.667Z',
      number: 3457
    }
  ];

  const mockPayload = {
    orders: mockOrders,
    total: 100,
    totalToday: 10
  };

  test('должен обрабатывать начальное состояние', () => {
    expect(feedsReducer(undefined, {} as AnyAction)).toEqual(initialState);
  });

  test('должен обрабатывать getFeeds.pending', () => {
    const action = { type: getFeeds.pending.type };
    const state = feedsReducer(initialState, action);
    expect(state).toEqual({ ...initialState, loading: true, error: null });
  });

  test('должен обрабатывать getFeeds.rejected', () => {
    const action = { type: getFeeds.rejected.type, error: { message: 'Не удалось получить заказы' } };
    const state = feedsReducer(initialState, action);
    expect(state).toEqual({ ...initialState, loading: false, error: 'Не удалось получить заказы' });
  });

  test('должен обрабатывать getFeeds.fulfilled', () => {
    const action = { type: getFeeds.fulfilled.type, payload: mockPayload };
    const state = feedsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      orders: mockPayload.orders,
      total: mockPayload.total,
      totalToday: mockPayload.totalToday,
      loading: false,
      error: null
    });
  });
});
