import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledImageCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${theme.colors.primaryDark};

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
