import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
       list-style: none;
    text-decoration: none;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Inter, sans-serif;
 img{
  width: 50px;
  height: 50px;
 border-radius: 50%;
 }
  }

`;
