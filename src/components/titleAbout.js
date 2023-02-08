import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

const TitleAbout = () => {
  const { locale } = useContext(GlobalContext);

  return (
    <>
      <div className="mb-7 md:mb-10">
        <h2 className="font-semibold text-3xl text-gray-700 dark:text-white ">
          {locale === 'ID' ? 'Tentang Saya' : 'About Me'}
        </h2>
      </div>
    </>
  );
};

export default TitleAbout;
