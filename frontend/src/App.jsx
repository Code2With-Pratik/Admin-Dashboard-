import React, { createContext, useState } from 'react';
import Dashboard from './pages/Dashboard';

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('dark'); // Default to dark

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <Dashboard />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;