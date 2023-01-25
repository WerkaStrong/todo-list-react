import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
        background-color: #eeee;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Montserrat';
    }
  
    *, ::after, ::before {
        box-sizing: inherit;
    }
  
    body {
        word-break: break-word;
        overflow-wrap: break-word;
     }
`;