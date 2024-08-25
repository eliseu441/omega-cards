import { render } from 'preact';
import App from './app.jsx';
import { AppParamsProvider } from './layout/AppParams/AppParams.jsx';

render(
  <AppParamsProvider>
    <App />
  </AppParamsProvider>,
  document.getElementById('root')
);