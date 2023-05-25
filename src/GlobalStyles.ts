import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-family: sans-serif;
    overflow: hidden;

    @media (min-width: 600px) {
      font-size: 0.8333vw;
    }

    @media (max-width: 599px) {
      font-size: 4.102vw;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: #ddd;
    user-select: none;
    background-image: radial-gradient(#d0d0d0 1px, transparent 0);
    background-size: 20px 20px;
    background-position: -19px -19px;
  }
`
