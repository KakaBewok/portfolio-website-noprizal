import React, { useContext } from 'react';
import Cookies from 'js-cookie';
import { GlobalContext } from '../context/globalContext';

const ToggleLocale = () => {
  const { locale, setLocale } = useContext(GlobalContext);

  const toggleLocale = () => {
    const newLocale = locale === 'ID' ? 'EN' : 'ID';
    setLocale(newLocale);
    Cookies.set('locale', newLocale);
  };

  return (
    <button
      className="btn btn-ghost btn-circle dark:hover:bg-gray-700"
      onClick={toggleLocale}
    >
      {locale === 'ID' ? 'EN' : 'ID'}
    </button>
  );
};

export default ToggleLocale;
