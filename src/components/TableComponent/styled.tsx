import styled from 'styled-components';
import theme from '@Common/theme';

export const TableSection = styled.section``;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    padding: 4rem 2rem;
  }

  @media screen and (min-width: ${theme.breakpoints.large}) {
    padding-left: 0;
    padding-right: 0;
    max-width: 68.75rem;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  display: none;

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    display: block;
    text-align: center;
    color: ${theme.colors.primaryDark};
    font-size: 2.5rem;
    line-height: 3rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 3.25rem;
  }
`;

export const StyledTable = styled.table`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  color: ${theme.colors.primaryDark};

  @media screen and (min-width: ${theme.breakpoints.large}) {
    margin-bottom: 10rem;
  }

  tr {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${theme.colors.muted};

    &:not(:first-child) {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding-top: 4.5rem;

      td:first-child {
        position: absolute;
        top: 1.2rem;
        left: 0;
        width: 100%;
      }

      td:not(:first-child) {
        position: relative;
        width: 33%;

        &::before {
          content: attr(data-label);
          position: absolute;
          left: 0;
          right: 0;
          top: -1.4rem;
          display: block;
          text-align: left;
          font-size: 0.625rem;
          opacity: 0.5;
          letter-spacing: 1px;

          @media screen and (min-width: ${theme.breakpoints.medium}) {
            display: none;
          }
        }
      }
    }

    @media screen and (min-width: ${theme.breakpoints.medium}) {
      display: grid;
      grid-template-columns: 50% 1fr 1fr 1fr;
    }
  }

  th {
    &:first-child {
      width: 100%;
      text-align: left;

      @media screen and (min-width: ${theme.breakpoints.medium}) {
        width: auto;
      }
    }

    &:not(:first-child) {
      display: none;

      @media screen and (min-width: ${theme.breakpoints.medium}) {
        display: unset;
      }
    }
  }

  td {
    &:not(:first-child) {
      text-align: left;

      @media screen and (min-width: ${theme.breakpoints.medium}) {
        text-align: center;
      }
    }
  }
`;
