import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledHero = styled.section<{
  alignText: 'left' | 'right';
  heroTheme: 'light' | 'dark';
}>`
  background-color: ${(props) =>
    props.heroTheme === 'light' ? `${theme.colors.primaryLight}` : `${theme.colors.primaryDark}`};
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    flex-direction: ${(props) => (props.alignText === 'left' ? 'row-reverse' : 'row')};
    height: 40.625rem;
  }
`;

export const ImageContainer = styled.div<{
  alignText: 'left' | 'right';
  heroTheme: 'light' | 'dark';
  displayGradient: boolean;
}>`
  width: 100%;
  height: 18.375rem;
  border-bottom: 5px solid
    ${(props) =>
      props.heroTheme === 'dark' ? `${theme.colors.primaryDark}` : `${theme.colors.primaryLight}`};
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    width: 33.3333%;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    width: 66.6666%;
  }

  &::after {
    content: '';
    display: ${(props) => (props.displayGradient ? 'block' : 'none')};
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

      left: ${(props) => (props.alignText === 'left' ? 'unset' : 'calc(100vw - 5px)')};
      right: ${(props) => (props.alignText === 'left' ? 'calc(100vw - 5px)' : 'unset')};
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

    @media screen and (min-width: ${theme.breakpoints.large}) {
      object-position: center center;
    }
  }
`;

export const ContentContainer = styled.div`
  padding: 4.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    width: 66.6666%;
    padding: 11.25rem 3.375rem;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    width: 33.3333%;
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
