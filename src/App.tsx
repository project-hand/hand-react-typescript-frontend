import 'sanitize.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '@/style';
import AppRouter from './router';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
