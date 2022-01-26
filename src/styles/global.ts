import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  user-select: none;
  margin: 0;
}

body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  color: #221E17;
  background-color: #F4F4F4;
  box-sizing: border-box;
  overflow: hidden;
  font-family: Nothing You Could Do,cursive;
  
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  -moz-osx-font-smoothing: grayscale;
}

input{
  font-family: Poiret One,cursive;
}

button{
  font-family: Poiret One;
}
`

export default GlobalStyle