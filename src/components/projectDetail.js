/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/globalContext';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectDetail = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const { projects, locale } = useContext(GlobalContext);
  const { id } = useParams();

  const arrayProjectDetails = projects.filter((project) => {
    return project.id === parseInt(id);
  });
  const projectDetail = arrayProjectDetails[0];

  const {
    name,
    image,
    link,
    source_code,
    description,
    category,
    tech_stack,
    feature,
    data,
    year,
  } = projectDetail;

  return (
    <>
      <div
        className="rounded-lg mx-auto max-w-[90%] md:max-w-[80%] lg:max-w-[70%] overflow-hidden bg-transparent shadow-lg dark:bg-slate-800"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="300"
        data-aos-delay="400"
      >
        {/* HEADER */}
        <div className="px-4 py-5 sm:px-6 dark:bg-gray-800">
          <img
            className="rounded-md transition-all duration-300 hover:opacity-80"
            src={image}
            alt={name}
          />
          {/* button */}
          <div className="flex justify-center items-center flex-wrap gap-4 w-full">
            <div>
              <a href={source_code} target="_blank" rel="noreferrer">
                <button className="btn btn-outline tracking-widest mt-5 px-12 md:px-28 dark:bg-slate-100 dark:text-slate-700 dark:hover:opacity-70">
                  {locale === 'ID' ? 'Kode' : 'Code'}
                </button>
              </a>
            </div>
            <div>
              <a href={link} target="_blank" rel="noreferrer">
                <button className="btn btn-success text-white tracking-widest mt-5 px-12 md:px-28 hover:opacity-80">
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-none">
          <dl>
            {/* 1 */}
            <div className="px-4 py-5 bg-transparent  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-slate-800">
              <dt className="text-md font-semibold text-slate-800 dark:text-slate-100">
                {locale === 'ID' ? 'Nama Proyek' : 'Project Name'}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {name}
              </dd>
            </div>
            {/* 2 */}
            <div className="px-4 py-5 bg-transparent  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-slate-800">
              <dt className="text-md font-semibold text-slate-800 dark:text-slate-100">
                {locale === 'ID' ? 'Deskripsi' : 'Description'}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {description}
              </dd>
            </div>
            {/* 3 */}
            <div className="px-4 py-5 bg-transparent sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-slate-800">
              <dt className="text-md font-semibold text-slate-800 dark:text-slate-100">
                {locale === 'ID' ? 'Kategori' : 'Category'}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {category}
              </dd>
            </div>
            {/* 4 */}
            <div className="px-4 py-5 bg-transparent sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-slate-800">
              <dt className="text-md font-semibold text-slate-800 dark:text-slate-100">
                {locale === 'ID' ? 'Teknologi' : 'Tech Stack'}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {tech_stack}
              </dd>
            </div>
            {/* 5 */}
            <div className="px-4 py-5 bg-transparent sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-slate-800">
              <dt className="text-md font-semibold text-slate-800 dark:text-slate-100">
                {locale === 'ID' ? 'Fitur' : 'Feature'}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {feature}
              </dd>
            </div>
            {/* 6 */}
            <div className="px-4 py-5 bg-transparent sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-slate-800">
              <dt className="text-md font-semibold text-slate-800 dark:text-slate-100">
                {locale === 'ID' ? 'Sumber Data' : 'Source Data'}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {data === '-' ? (
                  <p>-</p>
                ) : (
                  <a
                    href={data}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {data}
                  </a>
                )}
              </dd>
            </div>
            {/* 7 */}
            <div className="px-4 py-5 bg-transparent sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-slate-800">
              <dt className="text-md font-semibold text-slate-800 dark:text-slate-100">
                {locale === 'ID' ? 'Tahun' : 'Year'}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {year}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
