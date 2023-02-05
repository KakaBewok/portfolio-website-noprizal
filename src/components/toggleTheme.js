import { FaMoon, FaSun } from 'react-icons/fa';
import React, { useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { GlobalContext } from '../context/globalContext';

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    Cookies.set('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('class', theme);
  }, [theme]);

  return (
    <button
      className="btn btn-ghost btn-circle dark:hover:bg-gray-700"
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <FaMoon className="w-4 h-4" />
      ) : (
        <FaSun className="w-4 h-4" />
      )}
    </button>
  );
};

export default ToggleTheme;
