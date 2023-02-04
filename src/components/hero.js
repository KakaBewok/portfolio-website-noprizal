/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

const Hero = () => {
  const { locale } = useContext(GlobalContext);

  return (
    <>
      {/* Hero */}
      <div className="relative z-20 flex items-center h-screen dark:bg-gray-700">
        <div className="container relative flex flex-col items-center justify-between px-6 pt-12 mx-auto">
          <div className="flex flex-col">
            <p className="my-6 text-xl md:text-3xl text-center dark:text-white">
              {locale === 'ID'
                ? 'Hai, saya Rizal dan saya seorang Pengembang Website 🤘'
                : "Hi, I'm Rizal and I'm a Website Developer 🤘"}
            </p>
            <h2 className="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-primary lg:text-6xl dark:text-white">
              {locale === 'ID'
                ? 'Membangun produk, merek, dan pengalaman digital.'
                : ' Building digital products, brands, and experiences.'}
            </h2>

            <div className="flex gap-5 items-center justify-center mt-4">
              <a
                href="#"
                className="px-4 py-2 my-2 text-gray-100 uppercase bg-gray-800 border-2 border-gray-800 md:mt-16 dark:bg-white dark:text-gray-800 dark:border-0 hover:dark:text-gray-100 hover:dark:bg-gray-800  hover:bg-gray-100 hover:text-gray-800 text-sm md:text-md"
              >
                {locale === 'ID' ? 'PROYEK SAYA' : 'MY PROJECTS'}
              </a>
              <a
                href="#"
                className="px-6 py-2 my-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 md:mt-16 dark:bg-gray-800 dark:text-gray-100 hover:dark:bg-gray-100 hover:dark:text-gray-800 dark:border-0 hover:bg-gray-800 hover:text-white text-sm md:text-md"
              >
                {locale === 'ID' ? 'TENTANG SAYA' : 'ABOUT ME'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
