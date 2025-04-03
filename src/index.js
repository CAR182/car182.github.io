import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './contexts/theme';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
