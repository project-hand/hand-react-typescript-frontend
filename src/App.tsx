import 'sanitize.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '@/style';


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

    </ThemeProvider>
  );
};

export default App;
