import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledHero = styled.section`
  background-color: ${theme.colors.primaryDark};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    flex-direction: row-reverse;
    height: 40.625rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 18.375rem;
  border-bottom: 5px solid ${theme.colors.primaryDark};
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    width: 33%;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    width: 66%;
  }

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

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      width: 5px;
      background-image: linear-gradient(
        to bottom,
        ${theme.colors.accents.primary},
        ${theme.colors.accents.secondary},
        ${theme.colors.accents.tertiary}
      );
      height: 46%;
      bottom: 27%;
      left: unset;
      right: calc(100vw - 5px);
    }
  }

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    height: 100%;
    border-bottom: none;
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

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    width: 66%;
    padding: 11.25rem 3.375rem;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    width: 33%;
  }
`;

export const ContentContainerInner = styled.div`
  @media screen and (min-width: ${theme.breakpoints.medium}) {
    p {
      margin-bottom: 3rem;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    max-width: 23.75rem;
  }
`;
