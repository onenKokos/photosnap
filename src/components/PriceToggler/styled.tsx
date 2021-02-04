import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledPriceToggler = styled.section`
  padding: 4rem 2rem;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const InnerContainer = styled.div`
  @media screen and (min-width: ${theme.breakpoints.large}) {
    max-width: 68.75rem;
    margin: auto;
  }
`;

export const Description = styled.span<{ isActive: boolean }>`
  font-size: 1.125rem;
  line-height: 1.5625rem;
  font-weight: 600;
  color: ${theme.colors.primaryDark};
  opacity: ${(props) => (props.isActive ? '1' : '0.5')};
  display: inline-block;
  text-transform: capitalize;

  transition: ${theme.transition.basic};
`;

export const Toggler = styled.button<{ activePlan: 'yearly' | 'monthly' }>`
  border: none;
  background-color: ${theme.colors.cardGray};
  width: 4rem;
  height: 2rem;
  position: relative;
  border-radius: 1.5rem;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: 0.25rem;

    transform: translateX(${(props) => (props.activePlan !== 'monthly' ? '1.9rem' : '0')});
    transition: ${theme.transition.basic};

    top: calc(50% - 0.75rem);
    background-color: ${theme.colors.primaryDark};
    border-radius: 50%;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  width: 19.875rem;
  margin: 0 auto 2.5rem auto;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    flex-direction: row;
    align-items: baseline;
  }
`;
