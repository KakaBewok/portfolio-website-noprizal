/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/globalContext';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin.js';

const Hero = () => {
  const { locale } = useContext(GlobalContext);

  useEffect(() => {
    AOS.init();

    gsap.registerPlugin(TextPlugin);

    gsap.from('.greetings', { duration: 2, delay: 0, text: '' });

    gsap.to('.greetings', {
      text: locale === 'ID' ? 'HAI, SAYA NOPRIZAL🤘' : "HI, I'AM NOPRIZAL🤘",
      duration: 2,
      delay: 0,
    });
  }, [locale]);

  return (
    <>
      {/* Hero */}
      <div className="relative z-20 flex items-center h-screen dark:bg-gray-700">
        <div className="container relative flex flex-col items-center justify-between px-6 pt-12 mx-auto">
          <div
            className="flex flex-col"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h2 className="greetings max-w-5xl py-2 mx-auto text-5xl font-bold text-center text-primary lg:text-7xl dark:text-white"></h2>
            <p className="role font-semibold my-6 text-sm md:text-2xl text-center dark:text-white">
              {locale === 'ID'
                ? 'PENGGEMAR JAVASCRIPT & PENGEMBANG WEBSITE'
                : 'JAVASCRIPT ENTHUSIAST & WEB DEVELOPER'}
            </p>

            <div className="flex gap-5 items-center justify-center mt-4">
              <Link to="/project">
                <a
                  href="#"
                  className="px-4 py-2 my-2 text-gray-100 uppercase bg-gray-800 border-2 border-gray-800 md:mt-16 dark:bg-white dark:text-gray-800 dark:border-0 hover:dark:text-gray-100 hover:dark:bg-gray-800  hover:bg-transparent hover:text-slate-800 text-sm md:text-md"
                >
                  {locale === 'ID' ? 'PROYEK SAYA' : 'MY PROJECTS'}
                </a>
              </Link>
              <Link to="/about">
                <a
                  href="#"
                  className="px-6 py-2 my-2 text-slate-800 uppercase bg-transparent border-2 border-slate-800 md:mt-16 dark:bg-slate-800 dark:text-gray-100 hover:dark:bg-gray-100 hover:dark:text-slate-800 dark:border-0 hover:bg-slate-800 hover:text-white text-sm md:text-md"
                >
                  {locale === 'ID' ? 'TENTANG SAYA' : 'ABOUT ME'}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
