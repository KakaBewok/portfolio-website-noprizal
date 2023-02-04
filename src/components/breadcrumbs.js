/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

const Breadcrumbs = () => {
  const { locale } = useContext(GlobalContext);

  return (
    <>
      <div className="text-xs md:text-sm breadcrumbs px-5 mb-8 dark:text-gray-100">
        <ul>
          <li>
            <a> {locale === 'ID' ? 'Beranda' : 'Home'}</a>
          </li>
          <li>
            <a> {locale === 'ID' ? 'Proyek' : 'Projects'}</a>
          </li>
          <li>
            <a> {locale === 'ID' ? 'Sertifikat' : 'Certificates'}</a>
          </li>
          <li>
            <a> {locale === 'ID' ? 'Tentang' : 'About'}</a>
          </li>
          <li>
            <a> {locale === 'ID' ? 'Kontak' : 'Contact'}</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Breadcrumbs;
