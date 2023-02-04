/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import Projects from '../utils/projects';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [theme, setTheme] = useState(() => {
    return Cookies.get('theme') || 'light';
  });
  const [locale, setLocale] = useState(() => {
    return Cookies.get('locale') || 'id';
  });
  const [projects, setProjects] = useState(Projects);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });
  const [filter, setFilter] = useState('');

  const objectState = useMemo(() => {
    return {
      theme,
      setTheme,
      locale,
      setLocale,
      projects,
      setProjects,
      searchParams,
      setSearchParams,
      keyword,
      setKeyword,
      filter,
      setFilter,
    };
  }, [theme, locale, projects, searchParams, keyword, filter]);

  return (
    <GlobalContext.Provider value={objectState}>
      {props.children}
    </GlobalContext.Provider>
  );
};
