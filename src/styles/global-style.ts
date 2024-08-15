import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  /* ${fonts} */
`;

export default GlobalStyle;
