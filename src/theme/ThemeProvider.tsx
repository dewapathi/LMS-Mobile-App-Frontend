import React, {createContext, useContext} from 'react';

const defaultTheme = {
  colors: {
    primary: '#6200ee',
    background: '#ffffff',
    text: '#000000',
    error: '#b00020',
    success: '#4caf50',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
};

const ThemeContext = createContext(defaultTheme);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
