// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './fonts.css';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const theme = createTheme({
  typography: {
    fontFamily: 'Vazirmatn, Arial, sans-serif',
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
  <ThemeCustomization>
    <ScrollTop>
      <Routes />
    </ScrollTop>
  </ThemeCustomization>
  </ThemeProvider>
);

export default App;
