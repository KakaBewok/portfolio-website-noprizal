import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

const SearchProject = () => {
  const { locale, keyword, setKeyword, setSearchParams } =
    useContext(GlobalContext);

  const keywordSearchChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  return (
    <>
      <input
        type="text"
        placeholder={locale === 'ID' ? 'Cari Proyek' : 'Search Project'}
        value={keyword}
        onChange={(event) => keywordSearchChangeHandler(event.target.value)}
        className="rounded-md input input-bordered w-full md:w-44 placeholder-slate-700"
      />
    </>
  );
};

export default SearchProject;
