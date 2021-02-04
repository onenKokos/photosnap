import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledPromotionContainer = styled.section`
  padding: 5rem 2.5rem;
  background-color: ${theme.colors.primaryLight};

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    padding: 7.5rem 0;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    padding: 10rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    flex-direction: row;
    max-width: 68.75rem;
    margin-left: auto;
    margin-right: auto;
    gap: 2.5rem;
    flex-wrap: wrap;
  }
`;
