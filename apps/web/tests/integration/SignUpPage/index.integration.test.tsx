import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from 'styled-components';

import { SignUp } from '@templates';
import { themeLight } from '@themes';
import { faker } from '@faker-js/faker';

const makeSut = () => {
  return render(
    <ThemeProvider theme={themeLight}>
      <SignUp />
    </ThemeProvider>
  );
};
describe('Sign Up Page', () => {
  vi.mock('next/router', () => ({
    useRouter() {
      return {
        push: vi.fn()
      };
    }
  }));

  describe('Render Tests', () => {
    it('should render sign up page correct', () => {
      const { container, getByText } = makeSut();
      const texts = [
        'email',
        'senha',
        'data de nascimento',
        'Cadastrar'
      ];

      expect(container).toBeInTheDocument();
      texts.forEach(text => {
        expect(getByText(text)).toBeInTheDocument();
      });
      expect(container).toMatchSnapshot();
    });
  });

  describe('Email Input Tests', () => {
    it('should write correct in email input', () => {
      const { getAllByTestId } = makeSut();
      const email = faker.internet.email();

      const inputs = getAllByTestId('input');

      const emailInput = inputs[0];

      act(() => userEvent.type(emailInput, email));

      expect(emailInput).toHaveValue(email);
    });

    it('should show error message if email is empty', () => {
      const { getAllByTestId, getByText, getByTestId } = makeSut();

      const inputs = getAllByTestId('input');
      const button = getByTestId('button');

      const emailInput = inputs[0];

      act(() => userEvent.click(button));

      expect(getByText('*Email é obrigatório')).toBeInTheDocument();
      expect(emailInput).toHaveValue('');
    });

    it('should show error message if email is invalid', () => {
      const { getAllByTestId, getByText, getByTestId } = makeSut();
      const email = faker.random.word();

      const inputs = getAllByTestId('input');
      const button = getByTestId('button');
      const emailInput = inputs[0];

      act(() => {
        userEvent.type(emailInput, email);
        userEvent.click(button);
      });

      expect(emailInput).toHaveValue(email);
      expect(getByText('*Email inválido')).toBeInTheDocument();
      expect(getByText('*Email inválido')).toHaveStyle({
        color: themeLight.colors.primary[900]
      });
    });
  });

  describe('Password Input Tests', () => {
    it('should write correct in password input', () => {
      const { getAllByTestId, getByTestId, queryByText } = makeSut();
      const password = faker.internet.password(8);

      const inputs = getAllByTestId('input');
      const emailInput = inputs[0];
      const passwordInput = inputs[1];
      const button = getByTestId('button');

      act(() => {
        userEvent.type(emailInput, faker.internet.email());
        userEvent.type(passwordInput, password);
        userEvent.click(button);
      });

      expect(passwordInput).toHaveValue(password);
      expect(
        queryByText('*Senha é obrigatória')
      ).not.toBeInTheDocument();
    });

    it('should show error message if password is empty', () => {
      const { getAllByTestId, getByText, getByTestId } = makeSut();

      const inputs = getAllByTestId('input');
      const emailInput = inputs[0];
      const passwordInput = inputs[1];
      const button = getByTestId('button');

      act(() => {
        userEvent.type(emailInput, faker.internet.email());
        userEvent.click(button);
      });

      expect(getByText('*Senha é obrigatória')).toBeInTheDocument();
      expect(passwordInput).toHaveValue('');
    });

    it('should show error message if password is invalid', () => {
      const { getAllByTestId, getByText, getByTestId } = makeSut();
      const password = faker.internet.password(7);

      const inputs = getAllByTestId('input');
      const emailInput = inputs[0];
      const passwordInput = inputs[1];
      const button = getByTestId('button');

      act(() => {
        userEvent.type(emailInput, faker.internet.email());
        userEvent.type(passwordInput, password);
        userEvent.click(button);
      });

      expect(passwordInput).toHaveValue(password);
      expect(
        getByText('*A senha deve ter no mínimo 8 caracteres')
      ).toBeInTheDocument();
      expect(
        getByText('*A senha deve ter no mínimo 8 caracteres')
      ).toHaveStyle({
        color: themeLight.colors.primary[900]
      });
    });
  });

  describe('Born Date Input Tests', () => {
    it('should write correct in born date input', () => {
      const { getAllByTestId, getByTestId, queryByText } = makeSut();
      const bornDate = faker.date.past().toISOString().split('T')[0];

      const inputs = getAllByTestId('input');
      const emailInput = inputs[0];
      const passwordInput = inputs[1];
      const bornDateInput = inputs[2];
      const button = getByTestId('button');

      act(() => {
        userEvent.type(emailInput, faker.internet.email());
        userEvent.type(passwordInput, faker.internet.password(8));
        userEvent.type(bornDateInput, bornDate);
        userEvent.click(button);
      });

      expect(bornDateInput).toHaveValue(bornDate);
      expect(
        queryByText('*Data de nascimento é obrigatória')
      ).not.toBeInTheDocument();
    });

    it('should show error message if born date is empty', () => {
      const { getAllByTestId, getByText, getByTestId } = makeSut();

      const inputs = getAllByTestId('input');
      const emailInput = inputs[0];
      const passwordInput = inputs[1];
      const button = getByTestId('button');

      act(() => {
        userEvent.type(emailInput, faker.internet.email());
        userEvent.type(passwordInput, faker.internet.password(8));
        userEvent.click(button);
      });

      expect(
        getByText('*Data de nascimento é obrigatória')
      ).toBeInTheDocument();
    });

    it('should show error message if born date is invalid', () => {
      const { getAllByTestId, getByText, getByTestId } = makeSut();
      const bornDate = faker.date
        .future()
        .toISOString()
        .split('T')[0];

      const inputs = getAllByTestId('input');
      const emailInput = inputs[0];
      const passwordInput = inputs[1];
      const bornDateInput = inputs[2];
      const button = getByTestId('button');

      act(() => {
        userEvent.type(emailInput, faker.internet.email());
        userEvent.type(passwordInput, faker.internet.password(8));
        userEvent.type(bornDateInput, bornDate);
        userEvent.click(button);
      });

      expect(bornDateInput).toHaveValue(bornDate);
      expect(
        getByText('*Você deve ter no mínimo 18 anos')
      ).toBeInTheDocument();
      expect(
        getByText('*Você deve ter no mínimo 18 anos')
      ).toHaveStyle({
        color: themeLight.colors.primary[900]
      });
    });
  });
});
