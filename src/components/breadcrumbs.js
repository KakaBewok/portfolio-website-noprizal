/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const { locale } = useContext(GlobalContext);

  console.log(window.location.href);

  return (
    <>
      <div className="text-xs md:text-sm breadcrumbs px-5 mb-8 dark:text-gray-100">
        <ul>
          <li>
            {/* <div className="bg-sky-600 text-white px-2 py-1 rounded"> */}
            <Link to="/home">
              <a className="font-bold">
                {locale === 'ID' ? 'Beranda' : 'Home'}
              </a>
            </Link>
            {/* </div> */}
          </li>
          <li>
            <Link to="/project">
              <a> {locale === 'ID' ? 'Proyek' : 'Projects'}</a>
            </Link>
          </li>
          <li>
            <Link to="/certificate">
              <a> {locale === 'ID' ? 'Sertifikat' : 'Certificates'}</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a> {locale === 'ID' ? 'Tentang' : 'About'}</a>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <a> {locale === 'ID' ? 'Kontak' : 'Contact'}</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Breadcrumbs;
