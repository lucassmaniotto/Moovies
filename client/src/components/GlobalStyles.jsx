import { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor, whiteColor } from './UI/variables';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: linear-gradient(
      30deg,
      ${primaryColor} 0%,
      ${primaryDarkColor} 100%
      );
    color: ${primaryDarkColor};
  }

  #root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: minmax(0, 1fr);
    min-height: 100vh;
  }

  a, button, input, textarea {
    font: inherit;
    color: inherit;
  }

  button {
    background-color: ${primaryColor};
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
  }

  li {
    list-style: none;
  }

  h1, h2, h3 {
    font-weight: 700;
    line-height: 5rem;
  }
  ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px ${primaryColor};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${primaryDarkColor};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${whiteColor};
    }
`;

export default GlobalStyle;
