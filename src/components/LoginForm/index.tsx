import React from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';

export interface LoginFormProps {
  shouldRemember: boolean;
  onUsernameChange: (username: string) => void;
  onPasswordChange: (password: string) => void;
  onRememberChange: (remember: boolean) => void;
  onSubmit: (username: string, password: string) => void;
}

const LoginForm = ({
  shouldRemember,
  onUsernameChange,
  onRememberChange,
  onSubmit,
  onPasswordChange,
}: LoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(shouldRemember);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
    onUsernameChange(value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    onPasswordChange(value);
  };

  const handleRememberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setRemember(checked);
    onRememberChange(checked);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form data-testid="login-form">
      <label htmlFor="username">Username:</label>
      <input
        data-testid="username"
        type="text"
        name="username"
        value={username}
        onChange={handleUsernameChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        data-testid="password"
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
      />

      <label>
        <input
          data-testid="remember"
          name="remember"
          type="checkbox"
          checked={remember}
          onChange={handleRememberChange}
        />
        Remember me?
      </label>

      <button type="submit" data-testid="submit">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
