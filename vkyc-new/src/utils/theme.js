import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00b8d4',
      light: '#62ebff',
      dark: '#0088a3',
      contrastText: '#000000',
    },
    secondary: {
      main: '#512da8',
      light: '#8559da',
      dark: '#140078',
      contrastText: '#ffffff',
    },
  },
  shape: {
    borderRadius: '0px',
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
  },
})
