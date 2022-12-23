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
- Tints: #ec7063, #f3a69e, #fadbd8, #fdedec
- Shades: #451712, #5c1e18, #b93d30;

- Secondary: #3cd6e7
- Tints: #c5f3f8, #d8f7fa, #ecfbfd
- Shades: #2a97a2


- T

https://maketintsandshades.com/

- Accents:
- Greys

#888
#767676 (lightest grey allowed on #fff)
#6f6f6f 
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

// export const primaryColor = "#e74c3c";
export const primaryColor = "#e74c3c";
export const primaryShade = "#b93d30";
export const primaryShade2 = "#8b2e24";

export const primaryTint = "#fadbd8";
export const primaryTint2 = "#fff1f1";

export const altPrimaryShade = "#701a75";

export const secondaryColor = "#3cd7e7";
export const secondaryShade = "#2a97a2";
export const secondaryTint = "#d8f7fa";
export const secondaryTint2 = "#ecfbfd";
export const secondaryTintTransparent = secondaryTint + "cc";

export const mainTextColor = primaryShade;
export const titleTextColor = primaryShade;

export const globalPadding = 2.4;

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: "Roboto Flex", sans-serif;
}

html {
  font-size: 62.5%;
  /* overflow-x: hidden; */
  width: 100vw;
}



body {
  box-sizing: border-box;
  width: 100vw;
  padding: 0rem ${globalPadding}rem;
  overflow-x: clip;
  margin: 0;
  color: ${primaryShade};
  font-size: 2rem;
}

code {
  font-family: "Roboto Flex", sans-serif;
}




p {
  /* color: ${altPrimaryShade}; */
  line-height: 1.5;
  font-size: 2rem;
  @media (max-width: 50em) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 27em) {
    font-size: 1.8rem;
  }
}


span {

  font-weight: 300;  
  font-size: 2rem;
  @media (max-width: 50em) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 27em) {
    font-size: 1.8rem;
  }
}

h1 {
  font-weight: 200;
  /* padding: 2rem 0rem 2rem 0rem; */
  font-size: 7.4rem;


  @media (max-width: 50em) {
    font-size: 6.2rem;
  }
  @media (max-width: 34em) {
    padding: 0;
  }
  @media (max-width: 27em) {
    font-size: 4.4rem;
  }
  /* @media (max-width: 22.5em) {
    font-size: 3rem;
  } */
}

h2 {
  font-size: 4.4rem;

  @media (max-width: 50em) {
    font-size: 4.4rem;
  }
  @media (max-width: 34em) {
    font-size: 3.6rem;
  }
  @media (max-width: 27em) {
    /* font-size: 3rem; */
  }
  @media (max-width: 22.5em) {
    /* font-size: 2.4rem; */
  }
}



h3 {
  color: ${primaryShade};
  letter-spacing: 0.8rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 300;
  padding-bottom: .1rem;
  margin-bottom: 2rem;
  width: 100%;

  position: relative;
  




&::after {
  content: "";
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  height: 1px;
  border-radius: 2rem;
  background: linear-gradient(90deg, ${primaryShade}, transparent 80%);
}

@media (max-width: 50em) {
  font-size: 1.8rem;
}

@media (max-width: 27em) {
  font-size: 1.5rem;
}
}

h4 {
  font-size: 3.6rem;

  @media (max-width: 50em) {
    font-size: 3rem;
  }
  @media (max-width: 34em) {
    font-size: 2.4rem;
  }
  @media (max-width: 27em) {
    font-size: 2rem;
  }
  @media (max-width: 22.5em) {
    font-size: 1.8rem;
  }
}
h5 {
  font-size: 2.4rem;

  @media (max-width: 50em) {
    font-size: 2rem;
  }
  /* @media (max-width: 34em) {
    font-size: 2rem;
  }
  @media (max-width: 27em) {
    font-size: 2rem;
  }
  @media (max-width: 22.5em) {
    font-size: 1.8rem;
  } */
}
  `;

/* - Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98 */

export const RouteContainer = styled.div`
  padding: 2rem 5% 0;
`;

//////////////// MEDIA QUERIES

export default GlobalStyle;
