import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./configs/style";
import HomePage from "./views/public/HomePage";

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        font-family: ${({ theme }) => theme.fonts.default.family};
        size: ${({ theme }) => theme.fonts.default.size};
        line-height: 1.5;
        min-width: 350px;
        overflow-x: hidden;
    }
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
