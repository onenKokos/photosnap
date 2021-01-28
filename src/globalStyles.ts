import 'sanitize.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open-Sans';
    src: url('/public/static/font/OpenSans) format('opentype);
    font-weight: 100;
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
    font-family: Open-Sans
  }

  body {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
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
