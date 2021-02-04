import styled from 'styled-components';
import theme from '@Common/theme';

export const ImageCardWrapper = styled.article`
  @media screen and (min-width: ${theme.breakpoints.large}) {
    height: 0;
    overflow: hidden;
    padding-top: 140%;
    position: relative;
  }
`;

export const StyledImageCard = styled.div`
  height: 23.4375rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -0.625rem;
    height: 0.625rem;
    left: 0;
    right: 0;
    width: 0;
    transition: 0.3s ease-in-out;
    background-image: linear-gradient(
      to right,
      ${theme.colors.accents.primary},
      ${theme.colors.accents.secondary},
      ${theme.colors.accents.tertiary}
    );
  }

  &:hover {
    transform: translateY(-0.625rem);
    transition: 0.3s ease-in-out;

    div:first-child {
      opacity: 0.3;
      transition: 0.3s ease-in-out;
    }

    &::after {
      width: 100%;
      transition: 0.3s ease-in-out;
    }
  }

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    height: 31.25rem;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }
`;

export const CardShadow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  pointer-events: none;
  background-color: ${theme.colors.primaryDark};
  opacity: 0;
  transition: 0.3s ease-in-out;
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

export const ContentContainer = styled.div`
  padding: 2.5rem;
  position: absolute;
  z-index: 3;
  bottom: 0;
  width: 100%;
  background-image: linear-gradient(to bottom, hsla(0, 0%, 0%, 0.001), hsla(0, 0%, 0%, 0.8));

  hr {
    color: ${theme.colors.primaryLight};
    opacity: 0.6;
    margin: 1.5rem 0;
  }

  a svg {
    margin-left: auto;
    margin-right: 0;
  }

  span {
    color: ${theme.colors.primaryLight};
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;

    &:nth-child(2) {
      font-size: 1.125rem;
      line-height: 1.5rem;
      font-weight: 600;
    }
  }
`;
