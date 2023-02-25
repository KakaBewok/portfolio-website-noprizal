import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';
import { useNavigate } from 'react-router-dom';

const SearchProject = () => {
  const { locale, keyword, setKeyword, setSearchParams } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  const keywordSearchChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
    navigate(`/project?keyword=${keyword}`);
  };

  return (
    <>
      <input
        type="search"
        placeholder={locale === 'ID' ? 'Cari Proyek' : 'Search Project'}
        value={keyword}
        onChange={(event) => keywordSearchChangeHandler(event.target.value)}
        className="rounded-md input input-bordered w-full md:w-44 placeholder-slate-700"
      />
    </>
  );
};

export default SearchProject;
