import { describe, expect, test } from '@jest/globals';
import { TIngredient } from '@utils-types';
import { fetchIngredients, ingredientsReducer } from './ingredientsSlice';

describe('ingredients slice', () => {
  const initialState = {
    ingredients: [],
    buns: [],
    mains: [],
    sauces: [],
    isLoading: false,
    error: null,
  };

  const mockIngredients: TIngredient[] = [
    {
      _id: '1',
      name: 'Соус Spicy-X',
      type: 'sauce',
      proteins: 30,
      fat: 20,
      carbohydrates: 40,
      calories: 30,
      price: 90,
      image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02.png',
      image_large: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    },
    {
      _id: '2',
      name: 'Хрустящие минеральные кольца',
      type: 'main',
      proteins: 808,
      fat: 689,
      carbohydrates: 609,
      calories: 986,
      price: 300,
      image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02.png',
      image_large: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    },
  ];

  test('должен обрабатывать начальное состояние', () => {
    expect(ingredientsReducer(undefined, {
      type: ''
    })).toEqual(initialState);
  });

  test('должен обрабатывать fetchIngredients.pending', () => {
    const action = { type: fetchIngredients.pending.type };
    const state = ingredientsReducer(initialState, action);
    expect(state).toEqual({ ...initialState, isLoading: true });
  });

  test('должен обрабатывать fetchIngredients.fulfilled', () => {
    const action = { type: fetchIngredients.fulfilled.type, payload: mockIngredients };
    const state = ingredientsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      ingredients: mockIngredients,
      buns: [],
      mains: [mockIngredients[1]],
      sauces: [mockIngredients[0]],
      isLoading: false,
    });
  });

  test('должен обрабатывать fetchIngredients.rejected', () => {
    const action = { type: fetchIngredients.rejected.type, error: { message: 'Не удалось получить ингредиенты' } };
    const state = ingredientsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      isLoading: false,
      error: 'Не удалось получить ингредиенты',
    });
  });
});
