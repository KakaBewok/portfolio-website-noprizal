/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';
import Card from './card';

const CardList = () => {
  const { projects, keyword, filter } = useContext(GlobalContext);

  const projectsListbyKeyword = projects.filter((project) => {
    return (
      project.name.toLowerCase().includes(keyword.toLowerCase()) ||
      project.description.toLowerCase().includes(keyword.toLowerCase()) ||
      project.category.toLowerCase().includes(keyword.toLowerCase()) ||
      project.link.toLowerCase().includes(keyword.toLowerCase()) ||
      project.tech_stack.toLowerCase().includes(keyword.toLowerCase())
    );
  });

  const projectsListbyFilter = projects.filter((project) => {
    return project.tech_stack.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      {keyword
        ? projectsListbyKeyword.map((project) => (
            <div className="mx-auto">
              <Card key={project.id} {...project} />
            </div>
          ))
        : projectsListbyFilter.map((project) => (
            <div className="mx-auto ">
              <Card key={project.id} {...project} />
            </div>
          ))}
    </>
  );
};

export default CardList;
