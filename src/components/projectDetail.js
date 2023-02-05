import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { projects } = useContext(GlobalContext);
  const { id } = useParams();

  const arrayProjectDetails = projects.filter((project) => {
    return project.id === parseInt(id);
  });
  const projectDetail = arrayProjectDetails[0];

  const {
    name,
    image,
    // link,
    description,
    category,
    tech_stack,
    feature,
    data,
    year,
  } = projectDetail;

  return (
    <>
      <div className="rounded-lg mx-auto max-w-[90%] md:max-w-[70%] lg:max-w-[50%] overflow-hidden bg-white shadow-lg sm:rounded-lg">
        {/* HEADER */}
        <div className="px-4 py-5 sm:px-6 dark:bg-gray-700">
          <img
            className="rounded-md transition-all duration-300 hover:opacity-90"
            src={image}
            alt={name}
          />
          <div className="tooltip tooltip-right" data-tip="Under maintenance">
            <button className="btn btn-primary mt-3">Apply Now</button>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {/* 1 */}
            <div className="px-4 py-5 bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Name
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {name}
              </dd>
            </div>
            {/* 2 */}
            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Description
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {description}
              </dd>
            </div>
            {/* 3 */}
            <div className="px-4 py-5 bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Category
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {category}
              </dd>
            </div>
            {/* 4 */}
            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Tech Stack
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {tech_stack}
              </dd>
            </div>
            {/* 5 */}
            <div className="px-4 py-5 bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Feature
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {feature}
              </dd>
            </div>
            {/* 6 */}
            <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Data Source
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-400">
                {data}
              </dd>
            </div>
            {/* 7 */}
            <div className="px-4 py-5 bg-gray-100 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-700">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-100">
                Year
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
