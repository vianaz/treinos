import { faker } from '@faker-js/faker';

describe('Sign Up Page', () => {
  describe('Open the page', () => {
    it('should open the sign up page', async () => {
      cy.visit('http://localhost:3001/signup');

      cy.url().should('eq', 'http://localhost:3001/signup');
    });
  });

  describe('Sign Up required fields', () => {
    it('should show email is required error', () => {
      const password = faker.internet.password(8);
      const bornDate = faker.date
        .birthdate({
          mode: 'age',
          min: 18
        })
        .toISOString()
        .split('T')[0];
      cy.log(bornDate);

      cy.visit('http://localhost:3001/signup');

      cy.get('[data-testid="input"]').eq(1).type(password);
      cy.get('[data-testid="input"]').eq(2).type(bornDate);

      cy.get('[data-testid="button"]').click();

      cy.get('[data-testid="error-message"]').should(
        'have.text',
        '*Email é obrigatório'
      );
    });

    it('should show password is required error', () => {
      const email = faker.internet.email();
      const bornDate = faker.date
        .birthdate({
          mode: 'age',
          min: 18
        })
        .toISOString()
        .split('T')[0];
      cy.log(bornDate);

      cy.visit('http://localhost:3001/signup');

      cy.get('[data-testid="input"]').eq(0).type(email);
      cy.get('[data-testid="input"]').eq(2).type(bornDate);

      cy.get('[data-testid="button"]').click();

      cy.get('[data-testid="error-message"]').should(
        'have.text',
        '*Senha é obrigatória'
      );
    });

    it('should show born date is required error', () => {
      const email = faker.internet.email();
      const password = faker.internet.password(8);

      cy.visit('http://localhost:3001/signup');

      cy.get('[data-testid="input"]').eq(0).type(email);
      cy.get('[data-testid="input"]').eq(1).type(password);

      cy.get('[data-testid="button"]').click();

      cy.get('[data-testid="error-message"]').should(
        'have.text',
        '*Data de nascimento é obrigatória'
      );
    });
  });

  describe('Sign Up invalid fields', () => {
    it('should show invalid email error', () => {
      const email = 'invalid-email';
      const password = faker.internet.password(8);
      const bornDate = faker.date
        .birthdate({
          mode: 'age',
          min: 18
        })
        .toISOString()
        .split('T')[0];

      cy.visit('http://localhost:3001/signup');

      cy.get('[data-testid="input"]').eq(0).type(email);
      cy.get('[data-testid="input"]').eq(1).type(password);
      cy.get('[data-testid="input"]').eq(2).type(bornDate);

      cy.get('[data-testid="button"]').click();

      cy.get('[data-testid="error-message"]').should(
        'have.text',
        '*Email inválido'
      );
    });

    it('should show invalid password error', () => {
      const email = faker.internet.email();
      const password = faker.internet.password(7);
      const bornDate = faker.date
        .birthdate({ mode: 'age', min: 18 })
        .toISOString()
        .split('T')[0];

      cy.visit('http://localhost:3001/signup');

      cy.get('[data-testid="input"]').eq(0).type(email);
      cy.get('[data-testid="input"]').eq(1).type(password);
      cy.get('[data-testid="input"]').eq(2).type(bornDate);

      cy.get('[data-testid="button"]').click();

      cy.get('[data-testid="error-message"]').should(
        'have.text',
        '*A senha deve ter no mínimo 8 caracteres'
      );
    });

    it('should show invalid born date error', () => {
      const email = faker.internet.email();
      const password = faker.internet.password(8);
      const bornDate = faker.date
        .birthdate({ mode: 'age', max: 17 })
        .toISOString()
        .split('T')[0];

      cy.visit('http://localhost:3001/signup');

      cy.get('[data-testid="input"]').eq(0).type(email);
      cy.get('[data-testid="input"]').eq(1).type(password);
      cy.get('[data-testid="input"]').eq(2).type(bornDate);

      cy.get('[data-testid="button"]').click();

      cy.get('[data-testid="error-message"]').should(
        'have.text',
        '*Você deve ter no mínimo 18 anos'
      );
    });
  });

  describe('Sign Up valid fields', () => {
    it('should sign up', () => {
      const email = faker.internet.email();
      const password = faker.internet.password(8);
      const bornDate = faker.date
        .birthdate({ mode: 'age', min: 18 })
        .toISOString()
        .split('T')[0];

      cy.visit('http://localhost:3001/signup');

      cy.get('[data-testid="input"]').eq(0).type(email);
      cy.get('[data-testid="input"]').eq(1).type(password);
      cy.get('[data-testid="input"]').eq(2).type(bornDate);

      cy.get('[data-testid="button"]').click();

      cy.url().should('eq', 'http://localhost:3001/signin');
    });
  });
});

export default undefined;
