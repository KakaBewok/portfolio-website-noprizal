/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/globalContext';

const Contact = () => {
  const { inputContact, setInputContact } = useContext(GlobalContext);

  const scriptURL =
    'https://script.google.com/macros/s/AKfycbyHS6bYxdtSBm7nCMd4McbHzhiNvypxLMvaldimS5OZZkgSkEy8JnWAPF3NR5Y4s_SR/exec';
  const form = document.forms['submit-to-google-sheet'];

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputContact({
      ...inputContact,
      [name]: value,
    });
  };

  // useEffect(() => {

  // })

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
      'Content-Type': 'multipart/form-data',
    })
      .then((response) => console.log('Success!', response))
      .catch((error) => console.error('Error!', error.message));
  };

  // console.log(inputContact);

  return (
    <>
      <form
        className="flex w-[90%] md:max-w-5xl lg:max-w-6xl space-x-3 mx-auto"
        name="submit-to-google-sheet"
        onSubmit={handleSubmit}
      >
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-transparent rounded-lg shadow-md dark:bg-gray-800">
          <div className="md:px-7 mb-3 text-3xl font-semibold text-left text-gray-800 dark:text-white">
            Send me a message!
          </div>
          <p className="md:px-7 text-xs mb-5 dark:text-white">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <div className="grid max-w-xl md:max-w-5xl grid-cols-2 gap-4 md:gap-5 m-auto md:px-7">
            {/* name */}
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  id="contact-form-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="John Doe"
                  name="name"
                  onChange={(e) => handleChange(e)}
                  value={inputContact.name}
                  required
                />
              </div>
            </div>
            {/* email */}
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  id="contact-form-email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="john.doe@gmail.com"
                  name="email"
                  required
                  onChange={(e) => handleChange(e)}
                  value={inputContact.email}
                />
              </div>
            </div>
            {/* message */}
            <div className="col-span-2">
              <label className="text-gray-700" htmlFor="name">
                <textarea
                  className="max-h-40 min-h-16 flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="comment"
                  placeholder="Hi, I think we need a web app for our products at Company X. How soon can you hop on to discuss this?!"
                  name="message"
                  required
                  rows={5}
                  cols={40}
                  value={inputContact.message}
                  onChange={(e) => handleChange(e)}
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
