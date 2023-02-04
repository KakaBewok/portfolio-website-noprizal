/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const { locale } = useContext(GlobalContext);

  return (
    <>
      <div className="text-xs md:text-sm breadcrumbs px-5 mb-8 dark:text-gray-100">
        <ul>
          <li>
            <Link to="/home">
              {window.location.href.includes('home') ? (
                <a className="font-semibold underline">
                  {locale === 'ID' ? 'Beranda' : 'Home'}
                </a>
              ) : (
                <a>{locale === 'ID' ? 'Beranda' : 'Home'}</a>
              )}
            </Link>
          </li>
          <li>
            <Link to="/project">
              {window.location.href.includes('project') ? (
                <a className="font-semibold underline">
                  {locale === 'ID' ? 'Proyek' : 'Projects'}
                </a>
              ) : (
                <a> {locale === 'ID' ? 'Proyek' : 'Projects'}</a>
              )}
            </Link>
          </li>
          <li>
            <Link to="/certificate">
              {window.location.href.includes('certificate') ? (
                <a className="font-semibold underline">
                  {locale === 'ID' ? 'Sertifikat' : 'Certificates'}
                </a>
              ) : (
                <a> {locale === 'ID' ? 'Sertifikat' : 'Certificates'}</a>
              )}
            </Link>
          </li>
          <li>
            <Link to="/about">
              {window.location.href.includes('about') ? (
                <a className="font-semibold underline">
                  {locale === 'ID' ? 'Tentang' : 'About'}
                </a>
              ) : (
                <a> {locale === 'ID' ? 'Tentang' : 'About'}</a>
              )}
            </Link>
          </li>
          <li>
            <Link to="/contact">
              {window.location.href.includes('contact') ? (
                <a className="font-semibold underline">
                  {locale === 'ID' ? 'Kontak' : 'Contact'}
                </a>
              ) : (
                <a> {locale === 'ID' ? 'Kontak' : 'Contact'}</a>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Breadcrumbs;
