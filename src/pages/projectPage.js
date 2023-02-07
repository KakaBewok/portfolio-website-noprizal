import React from 'react';
import Navbar from '../components/navbar';
import Breadcrumbs from '../components/breadcrumbs';
import TitleProject from '../components/titleProject';
import SearchProject from '../components/searchProject';
import FilterProject from '../components/filterProject';
import CardList from '../components/cardList';
import Footer from '../components/footer';

const ProjectPage = () => {
  return (
    <>
      <Navbar />
      <div className="py-24 dark:bg-slate-700">
        <Breadcrumbs />
        <div className="mb-10 px-5 flex justify-between items-center flex-wrap w-full">
          <TitleProject />
          <div className="flex flex-wrap justify-center items-center gap-3">
            <SearchProject />
            <FilterProject />
          </div>
        </div>
        <div className="flex gap-y-10 flex-wrap">
          <CardList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
