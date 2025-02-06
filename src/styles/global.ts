import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  *{
  font-size: 1.6rem;
  margin: 0;
  padding:0;
  box-sizing: border-box ;
}



body {
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme['gray-300']};
  --webkit-font-smoothing:antialiased
}

body,input,textarea,button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size:1rem;
}
`
