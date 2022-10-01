import App from '@/App';
import { ThemeProvider } from '@/context/theme';
import i18n from '@/i18n';
import 'normalize.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Helmet titleTemplate={`%s - Sushi ${i18n.t('Dashboard')}`} />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
