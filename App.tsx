import Routes from './src/Routes';

import ThemeProvider from './src/context/ThemeContext';

export default function App() {
  return <ThemeProvider>
    <Routes />
  </ThemeProvider>
}