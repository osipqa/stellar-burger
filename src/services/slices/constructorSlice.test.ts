import { describe, expect, test } from '@jest/globals';
<<<<<<< HEAD
import {
  initialState,
  addIngredient,
  removeIngredient,
  moveIngredientUp,
  moveIngredientDown,
  resetModal,
  clearAll,
  constructorReducer
} from './constructorSlice';
=======
import { initialState, addIngredient, removeIngredient, moveIngredientUp, moveIngredientDown, resetModal, clearAll, constructorReducer } from './constructorSlice';
>>>>>>> main

describe('Burger Reducer', () => {
  const testIngredients = [
    {
      _id: '1',
      name: 'Соус с шипами Антарианского плоскоходца',
      type: 'sauce',
      proteins: 101,
      fat: 99,
      carbohydrates: 100,
      calories: 100,
      price: 88,
      image: 'https://code.s3.yandex.net/react/code/sauce-01.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/sauce-01.png',
      image_large: 'https://code.s3.yandex.net/react/code/sauce-01.png'
    },
    {
      _id: '2',
      name: 'Флюоресцентная булка R2-D3',
      type: 'bun',
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: 'https://code.s3.yandex.net/react/code/bun-01.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-01.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-01.png'
    }
  ];

  const addingIngredient = {
    _id: '3',
    name: 'Мясо бессмертных моллюсков Protostomia',
    type: 'main',
    proteins: 433,
    fat: 244,
    carbohydrates: 33,
    calories: 420,
    price: 1337,
    image: 'https://code.s3.yandex.net/react/code/meat-02-large.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-02-large.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-02-large.png'
  };

  test('добавление ингредиента', () => {
    // создание начального состояния с пустыми ингредиентами
    const state = {
      ...initialState,
      ingredients: []
    };

    // отправка addIngredient
    const action = addIngredient(addingIngredient);
    const newState = constructorReducer(state, action);

    // проверка, что ингредиент добавлен правильно
    expect(newState.ingredients).toHaveLength(1);
    expect(newState.ingredients[0]).toEqual({
      ...addingIngredient,
      id: expect.any(String)
    });
  });

  test('удаление ингредиента', () => {
    // создание начального состояния с тестовыми ингредиентами
    const state = {
      ...initialState,
      ingredients: testIngredients
    };

    // отправка действия removeIngredient
    const action = removeIngredient('1');
    const newState = constructorReducer(state, action);

    // проверка, что ингредиент удален правильно
    expect(newState.ingredients).toHaveLength(1);
    expect(newState.ingredients[0]._id).toBe('2');
  });

  test('перемещение ингредиента вверх', () => {
    // создание начального состояния с тестовыми ингредиентами
    const state = {
      ...initialState,
      ingredients: testIngredients
    };

    // отправка действия moveIngredientUp
    const action = moveIngredientUp(1);
    const newState = constructorReducer(state, action);

    // проверка, что ингредиенты перемещены правильно
    expect(newState.ingredients[0]._id).toBe('2');
    expect(newState.ingredients[1]._id).toBe('1');
  });

  test('перемещение ингредиента вниз', () => {
    // создание начального состояния с тестовыми ингредиентами
    const state = {
      ...initialState,
      ingredients: testIngredients
    };

    // отправка действия moveIngredientDown
    const action = moveIngredientDown(0);
    const newState = constructorReducer(state, action);

    // проверка, что ингредиенты перемещены правильно
    expect(newState.ingredients[0]._id).toBe('2');
    expect(newState.ingredients[1]._id).toBe('1');
  });

  test('сброс данных модального окна заказа', () => {
    // создание начального состояния с тестовыми ингредиентами
    const state = {
      ...initialState,
      ingredients: testIngredients
    };

    // отправка действия resetModal
    const action = resetModal();
    const newState = constructorReducer(state, action);

    // проверка, что данные модального окна сброшены правильно
    expect(newState).toEqual(initialState);
  });

  test('очистка всех данных конструктора', () => {
    // создание начального состояния с тестовыми ингредиентами
    const state = {
      ...initialState,
      ingredients: testIngredients
    };

    // отправка действия clearAll
    const action = clearAll();
    const newState = constructorReducer(state, action);

    // проверка, что все данные конструктора очищены правильно
    expect(newState).toEqual(initialState);
  });
<<<<<<< HEAD
=======

>>>>>>> main
});
