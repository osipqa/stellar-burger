import { describe, expect, test } from '@jest/globals';
<<<<<<< HEAD
import {
  initialState,
  register,
  login,
  logout,
  getUser,
  updateUser,
  userReducer
} from './userSlice';
import { TUser } from '@utils-types';
import { Action } from '@reduxjs/toolkit';
=======
import { initialState, register, login, logout, getUser, updateUser, userReducer } from './userSlice';
import { TUser } from '@utils-types';
import { AnyAction } from '@reduxjs/toolkit';
>>>>>>> main

describe('слайс пользователя', () => {
  const mockUser: TUser = {
    name: 'testaccount#1@test.ru',
    email: 'testaccount#1@test.ru'
  };

  test('должен обрабатывать начальное состояние', () => {
<<<<<<< HEAD
    expect(userReducer(undefined, {} as Action )).toEqual(initialState);
=======
    expect(userReducer(undefined, {} as AnyAction)).toEqual(initialState);
>>>>>>> main
  });

  test('должен обрабатывать register.pending', () => {
    const action = { type: register.pending.type };
    const state = userReducer(initialState, action);
    expect(state.error).toBeNull();
  });

  test('должен обрабатывать register.fulfilled', () => {
<<<<<<< HEAD
    const action = {
      type: register.fulfilled.type,
      payload: { user: mockUser }
    };
=======
    const action = { type: register.fulfilled.type, payload: { user: mockUser } };
>>>>>>> main
    const state = userReducer(initialState, action);
    expect(state.isAuthChecked).toBe(true);
    expect(state.user).toEqual(mockUser);
  });

  test('должен обрабатывать register.rejected', () => {
<<<<<<< HEAD
    const action = {
      type: register.rejected.type,
      error: { message: 'Ошибка регистрации' }
    };
=======
    const action = { type: register.rejected.type, error: { message: 'Ошибка регистрации' } };
>>>>>>> main
    const state = userReducer(initialState, action);
    expect(state.error).toBe('Ошибка регистрации');
  });

  test('должен обрабатывать login.pending', () => {
    const action = { type: login.pending.type };
    const state = userReducer(initialState, action);
    expect(state.error).toBeNull();
    expect(state.isAuthChecked).toBe(false);
  });

  test('должен обрабатывать login.fulfilled', () => {
    const action = { type: login.fulfilled.type, payload: { user: mockUser } };
    const state = userReducer(initialState, action);
    expect(state.isAuthChecked).toBe(true);
    expect(state.user).toEqual(mockUser);
  });

  test('должен обрабатывать login.rejected', () => {
<<<<<<< HEAD
    const action = {
      type: login.rejected.type,
      error: { message: 'Ошибка авторизации' }
    };
=======
    const action = { type: login.rejected.type, error: { message: 'Ошибка авторизации' } };
>>>>>>> main
    const state = userReducer(initialState, action);
    expect(state.error).toBe('Ошибка авторизации');
  });

  test('должен обрабатывать logout.fulfilled', () => {
    const action = { type: logout.fulfilled.type };
    const state = userReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  test('должен обрабатывать getUser.pending', () => {
    const action = { type: getUser.pending.type };
    const state = userReducer(initialState, action);
    expect(state.error).toBeNull();
    expect(state.isAuthChecked).toBe(false);
  });

  test('должен обрабатывать getUser.fulfilled', () => {
<<<<<<< HEAD
    const action = {
      type: getUser.fulfilled.type,
      payload: { user: mockUser }
    };
=======
    const action = { type: getUser.fulfilled.type, payload: { user: mockUser } };
>>>>>>> main
    const state = userReducer(initialState, action);
    expect(state.isAuthChecked).toBe(true);
    expect(state.user).toEqual(mockUser);
  });

  test('должен обрабатывать getUser.rejected', () => {
<<<<<<< HEAD
    const action = {
      type: getUser.rejected.type,
      error: { message: 'Ошибка получения пользователя' }
    };
=======
    const action = { type: getUser.rejected.type, error: { message: 'Ошибка получения пользователя' } };
>>>>>>> main
    const state = userReducer(initialState, action);
    expect(state.error).toBe('Ошибка получения пользователя');
  });

  test('должен обрабатывать updateUser.pending', () => {
    const action = { type: updateUser.pending.type };
    const state = userReducer(initialState, action);
    expect(state.isAuthChecked).toBe(false);
  });

  test('должен обрабатывать updateUser.fulfilled', () => {
<<<<<<< HEAD
    const action = {
      type: updateUser.fulfilled.type,
      payload: { user: mockUser }
    };
=======
    const action = { type: updateUser.fulfilled.type, payload: { user: mockUser } };
>>>>>>> main
    const state = userReducer(initialState, action);
    expect(state.user).toEqual(mockUser);
    expect(state.isAuthChecked).toBe(true);
  });

  test('должен обрабатывать updateUser.rejected', () => {
<<<<<<< HEAD
    const action = {
      type: updateUser.rejected.type,
      error: { message: 'Ошибка обновления пользователя' }
    };
=======
    const action = { type: updateUser.rejected.type, error: { message: 'Ошибка обновления пользователя' } };
>>>>>>> main
    const state = userReducer(initialState, action);
    expect(state.error).toBe('Ошибка обновления пользователя');
  });
});
