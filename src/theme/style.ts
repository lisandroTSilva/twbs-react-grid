import { createGlobalStyle } from 'styled-components'

export const GridThemeStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`
