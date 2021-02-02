import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledHero = styled.section`
  background-color: ${theme.colors.primaryDark};
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 18.375rem;
  border-bottom: 5px solid ${theme.colors.primaryDark};
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -5px;
    left: 2rem;
    height: 5px;
    width: 8rem;
    background-image: linear-gradient(
      to right,
      ${theme.colors.accents.primary},
      ${theme.colors.accents.secondary},
      ${theme.colors.accents.tertiary}
    );
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`;

export const ContentContainer = styled.div`
  padding: 4.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
