import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-serif">Contact Me</h1>
        <p className="text-blue-600 italic text-2xl mt-5">
          haileamlaksahle<span className="font-sans font-semibold size-64">@</span>gmail.com
        </p>
        <p className="font-light italic mt-5">
          Feel free to reach me with any questions!
        </p>
      </div>
      <form
        name="contact"
        action="/success"
        method="POST"
        className="p-6 space-y-4 mt-30"
      > 
        <input type="hidden" name="form-name" value="contact" />
        <div
          className={`${
            darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
          } flex items-center justify-center w-full md:w-2/3 mx-auto flex-col border-none`}
        >
          <div className="flex items-center gap-x-4 justify-center w-full">
          <i class="fa-regular fa-user"></i>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={`${
              darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
            } p-2 w-full outline-none border border-b-blue-600 border-l-0 border-r-0 border-t-0`}
          />
          </div>
         <div className="flex items-center gap-x-4 justify-center w-full">
         <i class="fa-regular fa-envelope"></i>
         <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={`${
              darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
            } p-3 w-full outline-none border border-b-blue-600 border-l-0 border-r-0 border-t-0`}
          />
         </div>
          <div className="flex items-center gap-x-4 justify-center w-full">
          <i class="fa-regular fa-message"></i>
          <textarea
            maxLength="500"
            name="message"
            placeholder="Your Message"
            required
            className={`${
              darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
            } p-3 w-full outline-none border border-b-blue-600 border-l-0 border-r-0 border-t-0`}
          />
          </div>
          
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className={`${
              darkMode ? "text-black" : "text-white"
            } transition duration-300 ease-in-out border border-blue-500 px-5 py-2 rounded-full hover:text-blue-500`}
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex space-x-8 items-center justify-center mt-10 mb-10">
        <a
          href="https://twitter.com/Sahle_H"
          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
          target="_blank"
        >
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a
          href="https://t.me/lbfwbs"
          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
          target="_blank"
        >
          <i className="fab fa-telegram-plane text-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/haileamlak-sahle-80986b269"
          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
          target="_blank"
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a
          href="https://www.instagram.com/hailemlak.sahle"
          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
          target="_blank"
        >
          <i className="fab fa-instagram text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
