import { Global, css } from "@emotion/react";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: Poppins, sans-serif;
  }

  :root {
    font-size: 16px;
    line-height: 24px;
  }

  @font-face {
    font-family: Poppins;
    src: url(/fonts/Poppins-Regular.ttf);
    font-display: swap;
  }

  @font-face {
    font-family: PoppinsMedium;
    src: url(/fonts/Poppins-Medium.ttf);
    font-display: swap;
  }

  @font-face {
    font-family: PoppinsBold;
    src: url(/fonts/Poppins-Bold.ttf);
    font-display: swap;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
