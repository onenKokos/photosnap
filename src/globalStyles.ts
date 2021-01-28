import 'sanitize.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'DMSans';
    src: url('public/font/DMSans-Regular.ttf') format('true-type');
    font-weight: 100;
  }

  @font-face {
    font-family: 'DMSans';
    src: url('public/font/DMSans-Medium.ttf') format('true-type');
    font-weight: 200;
  }

  @font-face {
    font-family: 'DMSans';
    src: url('public/font/DMSans-Bold.ttf') format('true-type');
    font-weight: 400;
  }

  * {
      -webkit-font-smoothing: antialiased;
      -webkit-osx-font-smoothing: grayscale;

      &::after,
      &::before {
        box-sizing: border-box;
      }
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

export default GlobalStyles;
