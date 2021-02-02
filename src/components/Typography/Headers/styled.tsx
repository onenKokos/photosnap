import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledH1 = styled.h1<{ theme: 'light' | 'dark' }>`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) =>
    props.theme === 'light' ? `${theme.colors.primaryLight}` : `${theme.colors.primaryDark}`};

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    font-size: 2.5rem;
    line-height: 3rem;
    letter-spacing: 4.17px;
  }
`;

export const StyledH2 = styled.h2<{ theme: 'light' | 'dark' }>``;

export const StyledH3 = styled.h3<{ theme: 'light' | 'dark' }>``;

export const StyledH4 = styled.h4<{ theme: 'light' | 'dark' }>``;
