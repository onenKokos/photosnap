import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledLink = styled.a<{ theme: 'light' | 'dark'; background: boolean }>`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 2px;
  color: ${(props) =>
    props.theme === 'light' ? `${theme.colors.primaryLight}` : `${theme.colors.primaryDark}`};
  display: flex;
  margin-right: auto;
  cursor: pointer;

  svg {
    margin-left: 0.75rem;
    transform: translateX(0);
    transition: 0.3s ease-in-out transform;
  }

  svg path {
    fill: ${(props) =>
      props.theme === 'light' ? `${theme.colors.primaryLight}` : `${theme.colors.primaryDark}`};
    stroke: ${(props) =>
      props.theme === 'light' ? `${theme.colors.primaryLight}` : `${theme.colors.primaryDark}`};
  }

  &:hover {
    text-decoration: underline;

    svg {
      transform: translateX(0.5rem);
    }
  }
`;
