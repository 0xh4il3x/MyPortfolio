import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header
      className={`p-4 border-b-slate-200 flex justify-between py-4 flex-wrap md:flex-nowrap gap-y-4 md:gap-y-0 ${
        darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
      }`}
    >
      <h1 className="text-2xl font-bold italic hidden md:block text-blue-400">H@il34mlak</h1>
      <div className="font-bold text-xl flex md:flex-nowrap flex-wrap justify-around items-center space-x-4 gap-y-4 md:gap-y-0">
        <a
          href="/"
          className="hover:decoration-red-400 transition duration-500 ease-in-out hover:text-blue-700"
        >
          Home
        </a>
        <a
          href="/projects"
          className="mr-4 hover:decoration-red-400 transition duration-500 ease-in-out hover:text-blue-700"
        >
          Projects
        </a>
        <a
          href="/contact"
          className="hover:decoration-red-400 transition duration-500 ease-in-out hover:text-blue-700"
        >
          Contact
        </a>
        <a
          href="#skills"
          className="hover:decoration-red-400 transition duration-500 ease-in-out hover:text-blue-700"
        >
          Skills
        </a>
        <a
          href="#testimonials"
          className="hover:decoration-red-400 transition duration-500 ease-in-out hover:text-blue-700 w-full md:w-auto"
        >
          Testimonials
        </a>
      </div>
      <button
        className=" btn-custom ml-auto md:ml-0 -mt-10 md:mt-0 px-3 py-1 md:px-4 md:py-2 lg:px-6 rounded-full border text-center border-blue-700 hover:text-blue-700 transition duration-500 ease-in-out"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
};

export default Header;