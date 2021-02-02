import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid hsl(0, 0%, 59%);
  position: relative;
  z-index: 10;
`;

export const HeaderInner = styled.div`
  padding: 1.5rem;

  display: grid;
  grid-template-columns: 10.625rem auto 1.5rem;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2.5rem;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    padding: 1.5rem 7rem;
    max-width: 71.25em;
    margin: 0 auto;
  }

  svg {
    grid-column-start: 1;
    grid-column-end: 2;
    height: 100%;
  }
`;

export const Hamburger = styled.button<{ isExpanded: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  background-color: inherit;
  border: none;
  position: relative;
  padding: 0;

  grid-column-start: 3;
  grid-column-end: 4;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    display: none;
  }

  div {
    width: 1.5rem;
    height: 0.0625rem;
    background-color: ${theme.colors.primaryDark};
    position: absolute;
    transform-origin: center;
    transform: ${(props) => (!props.isExpanded ? 'translateY(2px)' : 'rotate(45deg)')};
    transition: 0.3s ease-in-out;
  }

  div:last-child {
    transform: ${(props) => (!props.isExpanded ? 'translateY(-2px)' : 'rotate(-45deg)')};
  }
`;

export const Links = styled.div`
  @media screen and (min-width: ${theme.breakpoints.medium}) {
    display: flex;
    justify-content: space-between;
    padding: 0 2.5rem;
    flex-grow: 1;
    position: absolute;
    top: 4.5rem;
    left: 0;
    right: 0;
    z-index: 10;
  }

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    position: static;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    padding: 0 15.25rem;
  }
`;

export const LinkContainer = styled.div<{ isExpanded: boolean }>`
  grid-column-start: 1;
  grid-column-end: 4;
  display: ${(props) => (!props.isExpanded ? 'flex' : 'flex')};
  flex-direction: column;
  text-align: center;
  max-height: ${(props) => (props.isExpanded ? '16.375rem' : '0rem')};
  transition: max-height 0.3s ease-out;
  overflow: hidden;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    max-height: unset;
    align-items: center;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9375rem;
    font-weight: 600;
    line-height: 1.25rem;
    padding-bottom: 1.25rem;
    display: block;
    transform: ${(props) => (props.isExpanded ? 'translateX(0)' : 'translateX(-1rem)')};
    opacity: ${(props) => (props.isExpanded ? '1' : 0)};
    transition: 0.5s ease-out;
    transition-delay: 0.3s;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      opacity: 1;
      transform: translateX(0);
      padding-bottom: 0;
      letter-spacing: 2px;
    }
  }

  a:first-child {
    padding-top: 2rem;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      padding-top: inherit;
    }
  }

  a:nth-child(2) {
    transition-delay: 0.6s;
  }

  a:last-child {
    transition-delay: 0.9s;
  }
`;
