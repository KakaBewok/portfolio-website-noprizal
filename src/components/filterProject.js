/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

const FilterProject = () => {
  const { locale, setFilter } = useContext(GlobalContext);

  const filterChangeHandler = (keyword) => {
    setFilter(keyword);
  };

  return (
    <>
      <select
        className="block px-3 py-3 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-full md:w-44 focus:outline-none focus:ring-primary-500 focus:border-primary-500 cursor-pointer"
        name="tech"
        onChange={(event) => filterChangeHandler(event.target.value)}
      >
        <option value="" className="font-semibold">
          {locale === 'ID' ? 'Filter Teknologi' : 'Filter by Tech'}
        </option>
        <option value="" className="font-semibold">
          {locale === 'ID' ? 'Tampilkan Semua' : 'Show All'}
        </option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="Javascript">Javascript</option>
        <option value="PHP">PHP</option>
        <option value="Tailwind">Tailwind</option>
        <option value="Bootstrap">Bootstrap</option>
        <option value="Reactjs">Reactjs</option>
        <option value="Hapi Js">Hapi Js</option>
        <option value="PostgreSQL">PostgreSQL</option>
        <option value="MySQL">MySQL</option>
        <option value="MongoDB">MongoDB</option>
      </select>
    </>
  );
};

export default FilterProject;
