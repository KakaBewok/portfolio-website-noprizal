import React from 'react';
import Navbar from '../components/navbar';
import Breadcrumbs from '../components/breadcrumbs';
import TitleAbout from '../components/titleAbout';
import Footer from '../components/footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="py-24 dark:bg-slate-700">
        <Breadcrumbs />
        <div className="px-5 flex justify-between items-center flex-wrap w-full">
          <TitleAbout />
        </div>
        <div className="gap-5 flex flex-wrap">
          <div className="mx-auto max-w-lg p-5 bg-red-500">
            <img
              src="/images/noprizal.jpg"
              alt="Noprizal"
              className="rounded-full w-10 h-10"
            />
            <h2>Noprizal</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
