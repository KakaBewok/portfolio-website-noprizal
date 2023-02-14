/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/globalContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const { locale } = useContext(GlobalContext);

  const about_indo =
    'Lulus dari jurusan Ekonomi Islam. Berpengalaman sebagai sistem administrator selama lebih dari 7 tahun. Memiliki kemampuan pemecahan masalah yang baik dan keterampilan pemrograman, memiliki beberapa sertifikat kompetensi dalam pengembangan web dan sangat tertarik untuk memiliki karir dalam dunia pemrograman terutama pengembangan situs web.';

  const about_eng =
    ' Graduated from Islamic Economy major. Experienced as system administrator for more than 7 years. Has a good problem solving  ability and programming skills, has some certificates of competency in web development and really interested to have a good carrier in programming especially website development. ';

  return (
    <>
      <div
        className="relative z-20 flex items-center overflow-hidden bg-transparent "
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="300"
        data-aos-delay="400"
      >
        <div className="container relative flex flex-wrap px-6 md:px-24 py-10 mx-auto ">
          {/* Image */}
          <div className="relative mx-auto mb-5 w-32 md:w-full lg:w-2/5 ">
            <a
              href="https://www.instagram.com/_kkbwk"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/noprizal.jpg"
                className="shadow-md rounded-full md:w-36 lg:w-2/3 m-auto transition-all duration-300 hover:blur-sm"
              />
            </a>
          </div>
          {/* Text and button */}
          <div className="relative z-20 flex flex-col lg:justify-center sm:w-2/3 md:w-full  lg:w-3/5 ">
            {/* text about */}
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
              <span className="text-5xl sm:text-7xl">
                {locale === 'ID' ? 'Saya Noprizal' : "I'am Noprizal"}
              </span>
            </h1>
            <p className="text-sm text-gray-700 lg:max-w-xl sm:text-base dark:text-white">
              {locale === 'ID' ? about_indo : about_eng}
            </p>
            {/* button */}
            <div className="flex mt-8">
              <a
                href="cv-noprizal.pdf"
                download="cv-noprizal.pdf"
                className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400"
              >
                Resume
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/drive/u/1/folders/1zuzgZtELLpaFpk_QOdRHq7L5TgAZUX51"
                className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
              >
                {locale === 'ID' ? 'Sertifikat' : 'Certificates'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
