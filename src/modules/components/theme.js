import bannerImg from"./Images/bannerPopularBrands.jpg"
export const theme = {
  colors: {
    white: "#ffffff",
    black: "#000000",
    accentColor: "#833989",
    background: " #f9f8f6",
    menuBg: "#e8dfd8",
    heroBtn: "#A03DA9",
    bgImage: bannerImg,
    topHeaderLine: '#FFF2AB',
    textColor:'#504056',
    title: '#504056',
    heroTitle: '#C14CAF',

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
