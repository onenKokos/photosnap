import React from 'react';
import { StyledButton } from './styled';
interface ButtonProps {
  text: string;
  theme?: 'light' | 'dark';
  action: () => void;
}

const Button = ({ text, action, theme }: ButtonProps) => (
  <StyledButton theme={theme} onClick={action}>
    {text}
  </StyledButton>
);

export default Button;
