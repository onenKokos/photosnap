import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledButton = styled.button<{ theme?: 'light' | 'dark' }>`
  height: 3rem;
  padding: 0;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border: none;
  font-weight: 600;

  background-color: ${(props) =>
    props.theme && props.theme === 'light'
      ? `${theme.colors.primaryLight}`
      : `${theme.colors.primaryDark}`};
  color: ${(props) =>
    props.theme && props.theme === 'dark'
      ? `${theme.colors.primaryLight}`
      : `${theme.colors.primaryDark}`};
`;
