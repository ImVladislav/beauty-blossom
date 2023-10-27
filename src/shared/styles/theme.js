// import bannerImg from "../../images/bannerPopularBrands.jpg";
export const theme = {
  colors: {
    white: "#ffffff",
    black: "#000000",
    textColor: "#504056",
    accentColor: "#833989",
    hoverAccentColor: "#ff358a",
    background: " #f9f8f6",
    menuBg: "#e8dfd8",
    heroBtn: "#A03DA9",
    // bgImage: bannerImg,
    topHeaderLine: "#FFF6E9",
    heroTitle: "#C14CAF",
    menuHover: "#FFF6E9",
    menuHoverShadow: "0px 3.76642px 3.76642px 0px rgba(0, 0, 0, 0.25)",
    border: "#461C49",
    borderCard: "#e8dfd8",
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fontSizes: {
    xxs: 10,
    xs: 12,
    s: 14,
    sm: 16,
    m: 18,
    l: 20,
    xl: 24,
    authxl: 28,
    xxl: 32,
    sectXl: 44,
    xxxl: 48,
  },

  fontWeights: {
    body: 400,
    subtitle: 500,
    title: 600,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  borders: {
    none: "none",
    normal: "1px solid",
  },

  radii: {
    none: "0",
    nodrmal: "8px",
    round: "50%",
  },

  device: {
    mobile: `(min-width: 375px)`,
    tablet: `(min-width: 768px)`,
    desktop: `(min-width: 1440px)`,
  },
};
