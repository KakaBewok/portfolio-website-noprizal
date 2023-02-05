/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';
import ToggleTheme from './toggleTheme';
import ToggleLocale from './toggleLocale';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { locale } = useContext(GlobalContext);

  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-100 dark:bg-gray-500 dark:text-gray-100 fixed top-0 left-0 right-0 z-50 shadow-sm">
        {/* Hamburger Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-md bg-base-100 rounded-box w-52 dark:bg-gray-500"
            >
              <li>
                <Link to="/home">
                  <a>{locale === 'ID' ? 'Beranda' : 'Home'}</a>
                </Link>
              </li>
              <li>
                <Link to="/project">
                  <a>{locale === 'ID' ? 'Proyek' : 'Projects'}</a>
                </Link>
              </li>
              <li>
                <Link to="/certificate">
                  <a>{locale === 'ID' ? 'Sertifikat' : 'Certificates'}</a>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <a>{locale === 'ID' ? 'Tentang' : 'About'}</a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <a>{locale === 'ID' ? 'Kontak' : 'Contact'}</a>
                </Link>
              </li>
              <li className="md:hidden">
                <ToggleLocale />
              </li>
              <li className="md:hidden">
                <ToggleTheme />
              </li>
            </ul>
          </div>
        </div>
        {/* Logo/Brand */}
        <div className="md:hidden navbar-center">
          <Link to="/home">
            <a className="btn btn-ghost normal-case text-xl ml-20 md:ml-0">
              Noprizal
            </a>
          </Link>
        </div>
        {/* Menu Right */}
        <div className="navbar-end hidden md:flex">
          <ToggleLocale />
          <ToggleTheme />
        </div>
      </div>
    </>
  );
};

export default Navbar;
