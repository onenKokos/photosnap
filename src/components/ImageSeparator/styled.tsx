import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledImageSeparator = styled.div`
  position: relative;
  height: 18rem;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    height: 33.125rem;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

export const InnerContainer = styled.div`
  padding: 4.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    padding: 5rem 2.5rem;
    flex-direction: row;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    padding-left: 0;
    padding-right: 0;
    max-width: 68.75rem;
    margin: auto;
    align-items: center;
  }

  h1 {
    @media screen and (min-width: ${theme.breakpoints.medium}) {
      max-width: 26.25rem;
    }
  }

  a {
    @media screen and (min-width: ${theme.breakpoints.medium}) {
      margin-right: 0;
    }
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 0.3125rem;
    width: 33.3333%;
    left: 2rem;
    top: 0;
    background-image: linear-gradient(
      to right,
      ${theme.colors.accents.primary},
      ${theme.colors.accents.secondary},
      ${theme.colors.accents.tertiary}
    );

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      width: 0.3125rem;
      height: 100%;
      left: 0;
      background-image: linear-gradient(
        to bottom,
        ${theme.colors.accents.primary},
        ${theme.colors.accents.secondary},
        ${theme.colors.accents.tertiary}
      );
    }

    @media screen and (min-width: ${theme.breakpoints.large}) {
      left: calc(50% - 50vw);
    }
  }
`;
