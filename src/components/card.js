/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({ id, image, name, link, tech_stack_logo }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        className="card-project card w-[20rem] md:w-[21rem] lg:w-[23rem] bg-base-100 shadow-lg hover:cursor-pointer dark:bg-gray-800 bg-opacity-0"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="600"
        data-aos-delay="300"
      >
        <figure className="px-10 pt-10">
          <a href={link} target="_blank" rel="noreferrer">
            <img
              src={image}
              alt={name}
              className="rounded-xl transition-all duration-200 hover:opacity-70"
            />
          </a>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title dark:text-white font-bold">{name}</h2>
          {/* <p className="dark:text-gray-300">{tech_stack}</p> */}
          <div className="flex flex-wrap items-center gap-3">
            {tech_stack_logo}
          </div>
          <div className="card-actions">
            <Link to={`/project/${id}`}>
              <button className="btn btn-primary btn-sm text-xs mt-2">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
