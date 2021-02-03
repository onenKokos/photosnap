import styled from 'styled-components';
import theme from '@Common/theme';

export const StyledImageCard = styled.article`
  height: 23.4375rem;
  position: relative;
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`;

export const ContentContainer = styled.div`
  padding: 2.5rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-image: linear-gradient(to bottom, hsla(0, 0%, 0%, 0.001), hsla(0, 0%, 0%, 0.5));

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
