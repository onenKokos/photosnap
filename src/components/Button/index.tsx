import React from 'react';
import { StyledButton } from './styled';
export interface ButtonProps {
  text: string;
  theme?: 'light' | 'dark';
  action: () => void;
}

const Button = ({ text, action, theme }: ButtonProps) => (
  <StyledButton theme={theme} onClick={action} data-testid="button">
    {text}
  </StyledButton>
);

export default Button;
