import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    @media (max-width: 599px) {
      --radius: 0.8rem;
      --shadow: 0 0 6px 3px #00000030;
    }
    @media (min-width: 600px) {
      --radius: 8px;
      --shadow: 0 0 6px 3px #00000030;
    }
  }

  html {
    scroll-behavior: smooth;
    font-family: sans-serif;

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
    user-select: none;
  }
`
