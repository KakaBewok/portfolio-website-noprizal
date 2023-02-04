import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

const TitleProject = () => {
  const { locale, projects } = useContext(GlobalContext);

  return (
    <>
      <div className="flex justify-center items-start gap-1 flex-col mb-10 md:mb-0">
        <h2 className="font-semibold text-3xl text-gray-700 dark:text-white ">
          {locale === 'ID' ? 'Proyek Saya' : 'My Projects'}
        </h2>
        <p className="dark:text-gray-100 text-sm">
          {locale === 'ID' ? 'Jumlah proyek: ' : 'Number of projects: '}
          {projects.length}
        </p>
      </div>
    </>
  );
};

export default TitleProject;
