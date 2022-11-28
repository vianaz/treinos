import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from 'styled-components';
import { faker } from '@faker-js/faker';

import { InputContainer, InputContainerProps } from '.';
import { themeLight } from '@themes';

const makeSut = ({
  label = 'Password',
  type = 'password',
  placeholder
}: Partial<InputContainerProps>) => {
  const props = {
    label,
    type,
    placeholder
  };

  return render(
    <ThemeProvider theme={themeLight}>
      <InputContainer {...props} />
    </ThemeProvider>
  );
};

describe('Testing Suite for Input Component', () => {
  describe('Input Component in Password Mode', () => {
    it('should render the component', () => {
      const { container } = makeSut({});

      expect(container).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });

    it('should render the component with type password', () => {
      const { container } = makeSut({});

      const input = container.querySelector('input');

      expect(input).toHaveAttribute('type', 'password');
    });

    it('should writte correct in input', () => {
      const { container } = makeSut({});
      const password = faker.internet.password(8);

      const input = container.querySelector('input') as HTMLElement;

      userEvent.type(input, password);

      expect(input).toHaveValue(password);
    });

    it('should show the password', () => {
      const { container } = makeSut({});

      const input = container.querySelector('input') as HTMLElement;
      const image = container.querySelector('img') as HTMLElement;

      expect(input).toHaveAttribute('type', 'password');
      expect(image).toHaveAttribute('src', '/icons/eye_light.svg');

      userEvent.click(image);

      expect(input).toHaveAttribute('type', 'text');
      expect(image).toHaveAttribute(
        'src',
        '/icons/close_eye_light.svg'
      );
    });
  });

  describe('Input Component in Email Mode', () => {
    it('should render the component', () => {
      const { container } = makeSut({ type: 'email' });

      expect(container).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });

    it('should render the component with type email', () => {
      const { container } = makeSut({ type: 'email' });

      const input = container.querySelector('input');

      expect(input).toHaveAttribute('type', 'email');
    });

    it('should writte correct in input', () => {
      const { container } = makeSut({ type: 'email' });
      const email = faker.internet.email();

      const input = container.querySelector('input') as HTMLElement;

      userEvent.type(input, email);

      expect(input).toHaveValue(email);
    });

    it('should not show the eye icon', () => {
      const { container } = makeSut({ type: 'email' });

      const image = container.querySelector('img');

      expect(image).not.toBeInTheDocument();
    });
  });

  describe('Input Component in Text Mode', () => {
    it('should render the component', () => {
      const { container } = makeSut({ type: 'text' });

      expect(container).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });

    it('should render the component with type text', () => {
      const { container } = makeSut({ type: 'text' });

      const input = container.querySelector('input');

      expect(input).toHaveAttribute('type', 'text');
    });

    it('should writte correct in input', () => {
      const { container } = makeSut({ type: 'text' });
      const text = faker.lorem.words(5);

      const input = container.querySelector('input') as HTMLElement;

      userEvent.type(input, text);

      expect(input).toHaveValue(text);
    });

    it('should not show the eye icon', () => {
      const { container } = makeSut({ type: 'text' });

      const image = container.querySelector('img');

      expect(image).not.toBeInTheDocument();
    });
  });
});
