import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

const Contact = () => {
  const { locale } = useContext(GlobalContext);

  return (
    <>
      <form className="flex w-[90%] md:max-w-5xl lg:max-w-6xl space-x-3 mx-auto">
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-transparent rounded-lg shadow-md dark:bg-gray-800">
          <div className="md:px-7 mb-3 text-3xl font-semibold text-left text-gray-800 dark:text-white">
            Send me a message!
          </div>
          <p className="md:px-7 text-xs mb-5 dark:text-white">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <div className="grid max-w-xl md:max-w-5xl grid-cols-2 gap-4 md:gap-5 m-auto md:px-7">
            {/* Name */}
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  id="contact-form-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
            </div>
            {/* Email */}
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  id="contact-form-email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="john.doe@gmail.com"
                />
              </div>
            </div>
            {/* Comment */}
            <div className="col-span-2">
              <label className="text-gray-700" htmlFor="name">
                <textarea
                  className="max-h-40 min-h-16 flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="comment"
                  placeholder="Hello Noprizal!"
                  name="comment"
                  rows={5}
                  cols={40}
                />
              </label>
            </div>
            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
