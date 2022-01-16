const colors = {
  light: {
    default: {
      paleBlue: "hsl(225, 100%, 94%)",
      brightBlue: "hsl(245, 75%, 52%)",
      VeryPaleBlue: "hsl(225, 100%, 98%)",
      desaturatedBlue: "hsl(224, 23%, 55%)",
      darkblue: "hsl(223, 47%, 23%)",
    },
    text: {
      primary: "black",
      second: "black",
    },
  },
  dark: {},
};

const fonts = {
  default: {
    family: "'Red Hat Display', sans-serif",
    size: "16px",
  },
};

const breakpoints = {
  sm: 576, // Small devices (landscape phones, 576px and up)
  md: 768, // Medium devices (tablets, 768px and up)
  lg: 992, // Large devices (desktops, 992px and up)
  xl: 1200, // Extra large devices (large desktops, 1200px and up)
  xxl: 1440,
};

const theme = {
  colors,
  breakpoints,
  fonts,
};

export default theme;
