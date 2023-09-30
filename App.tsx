import Routes from './src/Routes';

import ThemeProvider from './src/context/ThemeContext';
import AuthenticationProvider from './src/context/AuthenticationContext';
import ProductsProvider from './src/context/ProductsContext';

export default function App() {
  return <ThemeProvider>
    <AuthenticationProvider>
      <ProductsProvider>
        <Routes />
      </ProductsProvider>
    </AuthenticationProvider>
  </ThemeProvider>
}