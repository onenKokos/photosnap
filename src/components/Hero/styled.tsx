import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledHero = styled.section`
  background-color: ${theme.colors.primaryDark};
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 18.375rem;

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

export const Gradient = styled.div``;
