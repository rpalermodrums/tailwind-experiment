import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './pages/Dashboard';
import './index.css';
import { ThemeProvider } from './components/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  </React.StrictMode>,
);
