import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.body};
    color: ${p => p.theme.colors.primary};
    ${'' /* background: ${p => p.theme.colors.primary}; */}
  }
`;

export default GlobalStyle;
