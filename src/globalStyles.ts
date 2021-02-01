import 'sanitize.css';
import { createGlobalStyle } from 'styled-components';

/* stylelint-disable */

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: DMSans;
    src: url('public/font/DMSans-Regular.ttf') format('true-type');
    font-weight: 100;
  }

  @font-face {
    font-family: DMSans;
    src: url('public/font/DMSans-Medium.ttf') format('true-type');
    font-weight: 200;
  }

  @font-face {
    font-family: DMSans;
    src: url('public/font/DMSans-Bold.ttf') format('true-type');
    font-weight: 400;
  }

  * {
      -webkit-font-smoothing: antialiased;
      -webkit-osx-font-smoothing: grayscale;
      outline: none !important;

      &::after,
      &::before {
        box-sizing: border-box;
      }
    }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  a {
    color: inherit;
    text-decoration-color: inherit;
  }

  html {
    font-size: 100%;
    width: 100%;
    height: 100vh;
  }

  body {
    font-size: 1.6rem;
    font-family: 'DMSans', sans-serif;
    font-weight: 100;
    height: 100%;
  }

  #__next {
    height: 100%;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

/* stylelint-enable */

export default GlobalStyles;
