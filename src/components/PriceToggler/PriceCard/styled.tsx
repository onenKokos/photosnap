import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledPriceCard = styled.div<{ theme: 'light' | 'dark' }>`
  background-color: ${(props) =>
    props.theme === 'light' ? `${theme.colors.cardGray}` : `${theme.colors.primaryDark}`};
  padding: 3.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    display: ${(props) => (props.theme === 'dark' ? 'block' : 'none')};
    left: 0;
    right: 0;
    top: 0;
    height: 0.3125rem;
    background-image: linear-gradient(
      to right,
      ${theme.colors.accents.primary},
      ${theme.colors.accents.secondary},
      ${theme.colors.accents.tertiary}
    );
  }
`;

export const Title = styled.h3<{ theme: 'light' | 'dark' }>`
  color: ${(props) =>
    props.theme === 'light' ? `${theme.colors.primaryDark}` : `${theme.colors.primaryLight}`};
  font-size: 1.5rem;
  line-height: 1.5625rem;
  margin-bottom: 0.625rem;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.0625rem;
  color: ${theme.colors.muted};
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 0.0625rem;
`;

export const Price = styled.span<{ theme: 'dark' | 'light' }>`
  font-size: 2.5rem;
  line-height: 3rem;
  color: ${(props) =>
    props.theme === 'light' ? `${theme.colors.primaryDark}` : `${theme.colors.primaryLight}`};
  display: block;
  letter-spacing: 0.125rem;
`;
export const Per = styled.span`
  font-size: 1rem;
  line-height: 1.0625rem;
  color: ${theme.colors.muted};
  margin-bottom: 2rem;
`;
