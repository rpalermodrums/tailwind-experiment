import { useContext } from 'react';
import { ThemeContextProps, ThemeContext } from '../components/ThemeContext';

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
