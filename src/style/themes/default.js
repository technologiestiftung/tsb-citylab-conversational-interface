/* eslint-disable */
const px = d => {
  return `${d}px`;
};


const defaultTheme = {
  fonts: {
    body: 'National Regular, sans-serif',
    headline: 'National ExtraBold, sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96].map(px),
  colors: {
    primary: "#2F2FA2"
  },
  shadow: "0 2px 60px 0 rgba(47, 47, 162, 0.1)"
  // https://rebassjs.org/theming
  // add custom theme options here
};

export default defaultTheme;
