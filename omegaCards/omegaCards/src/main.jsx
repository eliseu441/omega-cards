import { render } from 'preact';
import App from './app.jsx';
import { CartProvider } from './layout/AppParams/AppParams.jsx';

render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);