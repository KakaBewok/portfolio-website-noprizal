import React from 'react';
import Navbar from '../components/navbar';
import Breadcrumbs from '../components/breadcrumbs';
import TitleAbout from '../components/titleAbout';
import About from '../components/about';
import Footer from '../components/footer';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-r from-gradient1 to-gradient2">
      <Navbar />
      <div className="py-24 dark:bg-slate-700">
        <Breadcrumbs />
        <div className="px-5 flex justify-between items-center flex-wrap w-full">
          <TitleAbout />
        </div>
        <div>
          <About />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
