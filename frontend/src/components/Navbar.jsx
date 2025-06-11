import React from 'react';
import { ThemeContext } from '../App';

const Navbar = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <nav className={`p-4 flex justify-between items-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <div className="flex items-center">
        <h1 className="text-xl font-bold">SmartStore</h1>
      </div>
      <div className="flex items-center space-x-4">
        <span>Hi, Admin</span>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;