import Routes from './src/Routes';

import ThemeProvider from './src/context/ThemeContext';
import AuthenticationProvider from './src/context/AuthenticationContext';

export default function App() {
  return <ThemeProvider>
    <AuthenticationProvider>
      <Routes />
    </AuthenticationProvider>
  </ThemeProvider>
}