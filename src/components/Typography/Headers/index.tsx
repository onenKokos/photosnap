import React from 'react';
import { StyledH1, StyledH2, StyledH3, StyledH4 } from './styled';

const chooseCorrectHeading = (size: string, text: string, theme: 'dark' | 'light') => {
  switch (size) {
    case 'large':
      return (
        <StyledH1 data-testid="header" theme={theme}>
          {text}
        </StyledH1>
      );
    case 'medium':
      return (
        <StyledH2 data-testid="header" theme={theme}>
          {text}
        </StyledH2>
      );
    case 'regular':
      return (
        <StyledH3 data-testid="header" theme={theme}>
          {text}
        </StyledH3>
      );
    case 'small':
      return (
        <StyledH4 data-testid="header" theme={theme}>
          {text}
        </StyledH4>
      );

    default:
      return <></>;
  }
};

export interface HeaderProps {
  text: string;
  theme: 'dark' | 'light';
  size: 'large' | 'medium' | 'regular' | 'small';
}

const Header = ({ text, theme, size }: HeaderProps) => (
  <>{chooseCorrectHeading(size, text, theme)}</>
);

export default Header;
