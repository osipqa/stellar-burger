/// <reference types="cypress" />

describe('проверка на добавление вкусняшек', () => {

  beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' }).as('getIngredients');
    cy.intercept('GET', '/api/auth/user', { fixture: 'user.json' }).as('getAuth');
    cy.visit('http://localhost:4000');
    cy.wait(['@getIngredients', '@getAuth']);
    cy.get('[data-cy="ingredient-bun"]').as('bunIngredients');
    cy.get('[data-cy="ingredient-main"]').as('mainIngredients');
    cy.get('[data-cy="ingredient-sauce"]').as('sauceIngredients');
  });

  it('добавление вкусняшек', function() {
    // добавляем булочки
    cy.get('@bunIngredients').contains('Добавить').click();
    cy.contains('div.constructor-element span.constructor-element__text', 'Краторная булка N-200i (верх)').should('exist');
    cy.contains('div.constructor-element span.constructor-element__text', 'Краторная булка N-200i (низ)').should('exist');

    // добавляем вкусняшку
    cy.get('@mainIngredients').contains('Добавить').click();
    cy.contains('div.constructor-element span.constructor-element__text', 'Биокотлета из марсианской Магнолии').should('exist');

    // добавляем соус
    cy.get('@sauceIngredients').contains('Добавить').click();
    cy.contains('div.constructor-element span.constructor-element__text', 'Соус Spicy-X').should('exist');

    // ещё вкусняшки
    cy.get('@mainIngredients').contains('Добавить').click();
    cy.contains('div.constructor-element span.constructor-element__text', 'Биокотлета из марсианской Магнолии').should('exist');

  });

});

describe('проверка на работу модалки со вкусняшкой', () => {

  beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' }).as('getIngredients');
    cy.intercept('GET', '/api/auth/user', { fixture: 'user.json' }).as('getAuth');
    cy.visit('http://localhost:4000');
    cy.wait(['@getIngredients', '@getAuth']);
  });

  it('открытие модального окна ингредиента и закрытие', function() {
    // находим первый ингредиент и кликаем для открытия модального окна
    cy.get('[data-cy="ingredient-bun"]').first().click();

    // проверяем, что модальное окно открыто (и оно видимо)
    cy.get('[data-cy="modal"]').should('be.visible');

    // закрываем модальное окно по клику на крестик
    cy.get('[data-cy="modal-close"]').click();

    // ждем, пока модальное окно не закроется (проверяем, что его не существует)
    cy.get('[data-cy="modal"]').should('not.exist');
    
    // открываем модальное окно снова
    cy.get('[data-cy="ingredient-bun"]').first().click();

    // проверяем, что модальное окно открыто
    cy.get('[data-cy="modal"]').should('be.visible');

    // закрываем модальное окно по клику на оверлей
    cy.get('[data-cy="modal-overlay"]').click({ force: true });

    // ждем, пока модальное окно не закроется (проверяем, что его не существует)
    cy.get('[data-cy="modal"]').should('not.exist');
  });

});

describe('проверка создания заказа вкусняшек', () => {

  beforeEach(() => {
    // мокируем запросы
    cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' }).as('getIngredients');
    cy.intercept('GET', '/api/auth/user', { fixture: 'user.json' }).as('getAuth');
    cy.intercept('POST', '/api/auth/login', { fixture: 'user.json' }).as('login');
    cy.intercept('POST', '/api/orders', { fixture: 'order.json' }).as('createOrder');
  
    // посещаем страницу логина и ждем загрузки моковых данных
    cy.visit('http://localhost:4000/login');
    cy.wait(['@getIngredients', '@getAuth']);
  
    // устанавливаем токены в cookie и localStorage для симуляции авторизации
    cy.setCookie('accessToken', 'accessToken');
    window.localStorage.setItem('refreshToken', 'refreshToken');
  
    // запоминаем элементы ингредиентов, которые будут использованы в тестах
    cy.get('[data-cy="ingredient-bun"]').as('bunIngredients');
    cy.get('[data-cy="ingredient-main"]').as('mainIngredients');
    cy.get('[data-cy="ingredient-sauce"]').as('sauceIngredients');
  });

  it('должен создавать заказ успешно после авторизации', function() {
    // добавляем ингредиенты в конструктор
    cy.get('@bunIngredients').contains('Добавить').click();
    cy.get('@mainIngredients').contains('Добавить').click();
    cy.get('@sauceIngredients').contains('Добавить').click();
    cy.get('@mainIngredients').contains('Добавить').click();

    // вызываем клик по кнопке "Оформить заказ"
    cy.get('[data-cy="onOrderClick"]').click();

    // ожидание появления модального окна 
    cy.get('[data-cy="modal"]').should('exist');

    // проверяем номер заказа в модальном окне
    cy.get('[data-cy="order-number"]').should('contain', '12345');

    // закрываем модальное окно
    cy.get('[data-cy="modal-close"]').click();

    // проверяем, что конструктор пуст
    cy.get('[data-cy="top"]').contains('Выберите булки');
    cy.get('[data-cy="mid"]').contains('Выберите начинку');
    cy.get('[data-cy="bottom"]').contains('Выберите булки');
  });
});
