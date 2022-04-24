import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import NavBar from './components/Navbar';
import { Hero } from './components/Hero';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar toggleTheme={toggleTheme} />
      
      <div className="main">
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
