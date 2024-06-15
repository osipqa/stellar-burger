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
<<<<<<< HEAD
    error: null
=======
    error: null,
>>>>>>> main
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
<<<<<<< HEAD
      image_large: 'https://code.s3.yandex.net/react/code/sauce-02.png'
=======
      image_large: 'https://code.s3.yandex.net/react/code/sauce-02.png',
>>>>>>> main
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
<<<<<<< HEAD
      image_large: 'https://code.s3.yandex.net/react/code/sauce-02.png'
    }
  ];

  test('должен обрабатывать начальное состояние', () => {
    expect(
      ingredientsReducer(undefined, {
        type: ''
      })
    ).toEqual(initialState);
=======
      image_large: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    },
  ];

  test('должен обрабатывать начальное состояние', () => {
    expect(ingredientsReducer(undefined, {
      type: ''
    })).toEqual(initialState);
>>>>>>> main
  });

  test('должен обрабатывать fetchIngredients.pending', () => {
    const action = { type: fetchIngredients.pending.type };
    const state = ingredientsReducer(initialState, action);
    expect(state).toEqual({ ...initialState, isLoading: true });
  });

  test('должен обрабатывать fetchIngredients.fulfilled', () => {
<<<<<<< HEAD
    const action = {
      type: fetchIngredients.fulfilled.type,
      payload: mockIngredients
    };
=======
    const action = { type: fetchIngredients.fulfilled.type, payload: mockIngredients };
>>>>>>> main
    const state = ingredientsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      ingredients: mockIngredients,
      buns: [],
      mains: [mockIngredients[1]],
      sauces: [mockIngredients[0]],
<<<<<<< HEAD
      isLoading: false
=======
      isLoading: false,
>>>>>>> main
    });
  });

  test('должен обрабатывать fetchIngredients.rejected', () => {
<<<<<<< HEAD
    const action = {
      type: fetchIngredients.rejected.type,
      error: { message: 'Не удалось получить ингредиенты' }
    };
=======
    const action = { type: fetchIngredients.rejected.type, error: { message: 'Не удалось получить ингредиенты' } };
>>>>>>> main
    const state = ingredientsReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      isLoading: false,
<<<<<<< HEAD
      error: 'Не удалось получить ингредиенты'
=======
      error: 'Не удалось получить ингредиенты',
>>>>>>> main
    });
  });
});
