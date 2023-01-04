import { createTheme } from '@mui/material'

const themes = {
  palette: {
    background: {
        default: "#004e8a"
      },
    primary: {
      main: '#004e8a',
    },
    secondary: {
      main: '#1e5c0a',
    },
  },
};

const theme = createTheme(themes);

export { theme }
