import { createGlobalStyle } from 'styled-components';

import Background from '../assets/pokemon.svg';

export default createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    outline: 0;
  }

  body {
    background: #f0f0f5 url(${Background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer
  }
`;
