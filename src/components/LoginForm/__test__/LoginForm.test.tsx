import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginForm, { LoginFormProps } from '../';

const renderLoginForm = (props: Partial<LoginFormProps> = {}) => {
  const defaultProps: LoginFormProps = {
    onPasswordChange() {
      return;
    },
    onRememberChange() {
      return;
    },
    onUsernameChange() {
      return;
    },
    onSubmit() {
      return;
    },
    shouldRemember: true,
  };
  return render(<LoginForm {...defaultProps} {...props} />);
};

describe('<LoginForm />', () => {
  test('should display a blank login form, with remember me checked by default', async () => {
    const { findByTestId } = renderLoginForm();

    const loginForm = await findByTestId('login-form');

    expect(loginForm).toHaveFormValues({
      username: '',
      password: '',
      remember: true,
    });
  });
});
