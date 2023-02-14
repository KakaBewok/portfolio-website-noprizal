/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/globalContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const { inputContact, setInputContact, locale } = useContext(GlobalContext);

  const scriptURL =
    'https://script.google.com/macros/s/AKfycbyHS6bYxdtSBm7nCMd4McbHzhiNvypxLMvaldimS5OZZkgSkEy8JnWAPF3NR5Y4s_SR/exec';

  const form = document.forms['submit-to-google-sheet'];
  const btnSend = document.querySelector('.button-send');
  const btnLoading = document.querySelector('.button-loading');
  const messageSuccess = document.querySelector('.message-success ');

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputContact({
      ...inputContact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    btnLoading.classList.toggle('hidden');
    btnSend.classList.toggle('hidden');

    const fetching = async (scriptURL) => {
      try {
        const result = await fetch(scriptURL, {
          method: 'POST',
          body: new FormData(form),
          'Content-Type': 'multipart/form-data',
        });

        btnLoading.classList.toggle('hidden');
        btnSend.classList.toggle('hidden');
        messageSuccess.classList.toggle('hidden');

        setInputContact({
          name: '',
          email: '',
          message: '',
        });

        setTimeout(() => {
          messageSuccess.classList.add('hidden');
        }, 6000);

        console.log('Success!', result);
      } catch (error) {
        console.error('Error!', error.message);
      }
    };

    fetching(scriptURL);
  };

  return (
    <>
      {/* alert */}
      <div className="hidden message-success alert alert-success shadow-lg mx-auto w-[90%] md:max-w-2xl lg:max-w-2xl">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your message is sent!</span>
        </div>
      </div>
      <form
        className="flex w-[90%] md:max-w-5xl lg:max-w-6xl space-x-3 mx-auto"
        name="submit-to-google-sheet"
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="300"
        data-aos-delay="400"
      >
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-transparent rounded-lg shadow-md dark:bg-gray-800">
          <div className="md:px-7 mb-3 text-3xl font-semibold text-left text-gray-800 dark:text-white">
            {locale === 'ID' ? 'Kirimi saya pesan!' : 'Send me a message!'}
          </div>
          <p className="md:px-7 text-xs mb-5 dark:text-white">
            {locale === 'ID'
              ? 'Punya pertanyaan atau proposal, atau hanya ingin menyapa? Teruskan.'
              : 'Got a question or proposal, or just want to say hello? Go ahead.'}
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
                  placeholder={
                    locale === 'ID'
                      ? 'Hai, saya rasa kami memerlukan aplikasi web untuk produk kami di Perusahaan X. Seberapa cepat Anda bisa berharap untuk membahas ini?!'
                      : 'Hi, I think we need a web app for our products at Company X. How soon can you hope on to discuss this?!'
                  }
                  name="message"
                  required
                  rows={5}
                  cols={40}
                  value={inputContact.message}
                  onChange={(e) => handleChange(e)}
                />
              </label>
            </div>
            {/* button */}
            <div className="col-span-2 text-right">
              {/* button loading */}
              <button
                type="button"
                className="hidden button-loading py-2 px-4 flex justify-center items-center  bg-indigo-600 hover:bg-indigo-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <svg
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="mr-2 animate-spin"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                </svg>
                loading
              </button>
              {/* button send */}
              <button
                type="submit"
                className="button-send py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                {locale === 'ID' ? 'Kirim' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
