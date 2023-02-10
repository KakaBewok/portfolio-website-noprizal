import React from 'react';
import Navbar from '../components/navbar';
import Breadcrumbs from '../components/breadcrumbs';
import TitleContact from '../components/titleContact';
import Contact from '../components/contact';
import Footer from '../components/footer';

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-r from-gradient1 to-gradient2">
      <Navbar />
      <div className="py-24 dark:bg-slate-700">
        <Breadcrumbs />
        <div className="px-5 flex justify-between items-center flex-wrap w-full">
          <TitleContact />
        </div>
        <div>
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
