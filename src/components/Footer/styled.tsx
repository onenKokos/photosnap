import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryDark};
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 3.125rem auto;
  width: 10.625rem;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    order: 1;
    margin-left: 0;
    margin-bottom: 0;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    grid-area: c;
    align-items: flex-end;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${theme.colors.primaryLight};
  }
`;

export const StyledCopyright = styled.span`
  font-size: 0.9375rem;
  line-height: 1.25rem;
  display: block;
  text-align: center;
  margin-top: 2rem;
  color: ${theme.colors.muted};

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    text-align: right;
  }
`;

export const FooterInner = styled.div`
  padding: 3.375rem 2rem;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    padding: 4rem 2.5rem;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    max-width: 68.75rem;
    margin: 0 auto;
  }

  img {
    display: block;
    margin: 0 auto 2rem auto;
    width: 10.625rem;

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      margin-right: auto;
      margin-left: 0;
    }

    @media screen and (min-width: ${theme.breakpoints.large}) {
      margin: 0;
      grid-area: a;
    }
  }

  a {
    display: block;
    text-align: center;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7.5rem;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    margin-bottom: 3.75rem;
    flex-direction: row;
    gap: 1.5rem;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    flex-direction: column;
    grid-area: b;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    color: ${theme.colors.primaryLight};
    margin-bottom: 1.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 2px;

    @media screen and (min-width: ${theme.breakpoints.large}) {
      margin-bottom: 0;
    }

    &:last-child {
      margin-bottom: 0;

      @media screen and (min-width: ${theme.breakpoints.medium}) {
        margin-bottom: 1.5rem;
      }

      @media screen and (min-width: ${theme.breakpoints.large}) {
        margin-bottom: 0;
      }
    }
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    width: 50%;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    width: 33.3333%;
  }

  &:first-child {
    @media screen and (min-width: ${theme.breakpoints.large}) {
      display: grid;
      grid-template-areas: 'a b' 'c b';
    }
  }

  &:last-child {
    a {
      margin: 0 auto;
      @media screen and (min-width: ${theme.breakpoints.medium}) {
        margin-left: auto;
        margin-right: 0;
      }
    }

    @media screen and (min-width: ${theme.breakpoints.large}) {
      width: auto;
      flex: 1;
    }
  }
`;
