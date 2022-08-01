import 'sanitize.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '@/style';
import Test from './TEST';
const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Test />
    </ThemeProvider>
  );
};

export default App;
