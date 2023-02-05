import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

const TitleDetailProject = () => {
  const { locale } = useContext(GlobalContext);

  return (
    <>
      <div className="flex justify-center items-start mb-10 md:mb-0">
        <h2 className="font-semibold text-3xl text-gray-700 dark:text-white ">
          {locale === 'ID' ? 'Detail Proyek' : 'Project Details'}
        </h2>
      </div>
    </>
  );
};

export default TitleDetailProject;
