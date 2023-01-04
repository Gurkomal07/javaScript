import '../styles/globals.css'
import { theme } from '../utils/theme/config.js'
import { ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}
export default MyApp
