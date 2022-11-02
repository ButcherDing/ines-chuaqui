/*
--- 01 TYPOGRAPHY SYSTEM
- Custom Fonts
font-family: 'Roboto Flex', sans-serif;
font-family: 'Roboto Serif', serif;

- Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Font weights

Light: 200
Default: 300
Medium: 400
Bold: 600

- Line heights
Default: 1
Small: 1.05
Medium: 1.2
Paragraph default: 1.6
Large: 1.8

- Letter spacing
-0.5px
0.75px

--- 02 COLORS

- Primary: #e74c3c
- Tints: #ec7063, #f3a69e, #fadbd8
- Shades: #451712, #5c1e18, #8b2e24;

- Secondary: #3cd7e7
- Tints: #c5f3f8, #d8f7fa, #ecfbfd


https://maketintsandshades.com/

- Accents:
- Greys

#888
#767676 (lightest grey allowed on #fff)
#6f6f6f (lightest grey allowed on #fdf2e9)
#555
#333

--- 05 SHADOWS

0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);

--- 06 BORDER-RADIUS

Default: 9px
Medium: 11px

--- 07 WHITESPACE

- Spacing system (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
*/

// could store many of these constants as separate variables if necc...

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const primaryColor = "#e74c3c";
export const primaryShade = "#8b2e24";
export const primaryTint = "#fadbd8";

export const secondaryTint = "#ecfbfd";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: "Roboto Flex", sans-serif;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  margin: 0;
  padding: 2rem;
  line-height: 1;
  font-weight: 300;
  color: ${primaryShade};
  font-size: 1.4rem;
}

code {
  font-family: "Roboto Flex", sans-serif;
}

h1 {
  font-weight: 300;
}
`;

export default GlobalStyle;
