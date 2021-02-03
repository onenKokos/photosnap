import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledPromotionCard = styled.article`
  width: 100%;
  margin-bottom: 3.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  img {
    width: 4.5rem;
    display: block;
    margin: 0 auto 2.5rem auto;
  }

  h3 {
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: 1.4px;
    color: ${theme.colors.primaryDark};
  }

  p {
    text-align: center;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${theme.colors.muted};
  }
`;
