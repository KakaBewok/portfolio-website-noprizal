import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

const TitleProject = () => {
  const { locale } = useContext(GlobalContext);

  return (
    <h2 className="font-semibold text-3xl text-gray-700 dark:text-white mb-4 md:mb-0">
      {locale === 'ID' ? 'Proyek Saya' : 'My Projects'}
    </h2>
  );
};

export default TitleProject;
