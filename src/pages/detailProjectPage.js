import React from 'react';
import Navbar from '../components/navbar';
import Breadcrumbs from '../components/breadcrumbs';
import TitleDetailProject from '../components/titleDetailProject';
import ProjectDetail from '../components/projectDetail';
import Footer from '../components/footer';

const DetailProjectPage = () => {
  return (
    <>
      <Navbar />
      <div className="py-24 dark:bg-slate-700">
        <Breadcrumbs />
        <div className="px-5 flex justify-between items-center flex-wrap w-full">
          <TitleDetailProject />
        </div>
        <div className="gap-5 flex flex-wrap">
          <ProjectDetail />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailProjectPage;
