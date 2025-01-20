import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status
  const [error, setError] = useState(null); // Track error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setIsSubmitted(true); // Show success message
    setFormData({ name: "", email: "", message: "" }); // Clear form fields

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-blue-600 italic text-2xl mt-5">
          haileamlaksahle<span className="font-sans font-semibold size-64">@</span>gmail.com
        </p>
        <p className="text-pretty font-light italic mt-5">
          Feel free to reach me with any questions!
        </p>
      </div>
      <form
        name="contact-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="p-6 space-y-4 mt-30"
        onSubmit={handleSubmit} // Attach handleSubmit to the form's onSubmit
      >
        {/* Hidden field for Netlify honeypot */}
        <input type="hidden" name="form-name" value="contact-form" />
        <div className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </div>

        <div
          className={`${
            darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
          } flex items-center justify-center w-full md:w-2/3 mx-auto flex-col border-none`}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            value={formData.name}
            required
            className={`${
              darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
            } p-2 w-full outline-none border border-b-blue-600 border-l-0 border-r-0 border-t-0`}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            value={formData.email}
            required
            className={`${
              darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
            } p-3 w-full outline-none border border-b-blue-600 border-l-0 border-r-0 border-t-0`}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            value={formData.message}
            required
            className={`${
              darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
            } p-3 w-full outline-none border border-b-blue-600 border-l-0 border-r-0 border-t-0`}
          />
        </div>
        {isSubmitted && (
          <p className="text-green-500 text-center">Successfully submitted!</p>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className={`${
              darkMode ? " text-black" : "text-white"
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
        >
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a
          href="https://t.me/lbfwbs"
          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
        >
          <i className="fab fa-telegram-plane text-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/haileamlak-sahle-80986b269"
          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a
          href="https://www.instagram.com/hailemlak.sahle"
          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
        >
          <i className="fab fa-instagram text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;




// import React, { useContext, useState } from "react";
// import { ThemeContext } from "../App";

// const Contact = () => {
//   const { darkMode } = useContext(ThemeContext);
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status
//   const [error, setError] = useState(null); // Track error messages

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(false); // Reset submission status
//     setError(null); // Clear any previous errors
//     setIsSubmitted(true); // Show success message
//     setFormData({ name: "", email: "", message: "" }); // Clear form
//   };

//   return (
//     <div>
//       <div className="text-center mt-10">
//         <h1 className="text-4xl font-bold">Contact Me</h1>
//         <p className="text-blue-600 italic text-2xl mt-5">
//           haileamlaksahle<span className="font-sans font-semibold size-64">@</span>gmail.com
//         </p>
//         <p className="text-pretty font-light italic mt-5">
//           Feel free to reach me with any questions!
//         </p>
//       </div>
//       <form
//         name="contact-form"
//         onSubmit={handleSubmit}
//         method="POST"
//         className="p-6 space-y-4 mt-30"
//         data-netlify="true"
//         data-netlify-honeypot="bot-field"
//       >
//         {/* Hidden field for Netlify honeypot */}
//         <input type="hidden" name="form-name" value="contact-form" />
//         <div className="hidden">
//           <label>
//             Don’t fill this out: <input name="bot-field" />
//           </label>
//         </div>
//         <div
//           className={`${
//             darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
//           } flex items-center justify-center w-full md:w-2/3 mx-auto flex-col border-none`}
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             onChange={handleChange}
//             value={formData.name}
//             required
//             className={`${
//               darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
//             } p-2 w-full outline-none border border-b-blue-600 border-l-0 border-r-0 border-t-0`}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             onChange={handleChange}
//             value={formData.email}
//             required
//             className={`${
//               darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
//             } p-3 w-full outline-none border border-b-blue-600 border-l-0 border-r-0 border-t-0`}
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             onChange={handleChange}
//             value={formData.message}
//             required
//             className={`${
//               darkMode ? "bg-gray-200 text-black" : "bg-slate-900 text-white"
//             } p-3 w-full outline-none border border-b-blue-600 border-l-0 border-r-0 border-t-0`}
//           />
//         </div>
//         {isSubmitted && (
//           <p className="text-green-500 text-center">Successfully submitted!</p>
//         )}
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         <div className="flex items-center justify-center">
//           <button
//             type="submit"
//             className={`${
//               darkMode ? " text-black" : "text-white"
//             } transition duration-300 ease-in-out border border-blue-500 px-5 py-2 rounded-full hover:text-blue-500`}
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//       <div className="flex space-x-8 items-center justify-center mt-10 mb-10">
//         <a
//           href="https://twitter.com/Sahle_H"
//           className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
//         >
//           <i className="fab fa-twitter text-2xl"></i>
//         </a>
//         <a
//           href="https://t.me/lbfwbs"
//           className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
//         >
//           <i className="fab fa-telegram-plane text-2xl"></i>
//         </a>
//         <a
//           href="https://www.linkedin.com/in/haileamlak-sahle-80986b269"
//           className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
//         >
//           <i className="fab fa-linkedin text-2xl"></i>
//         </a>
//         <a
//           href="https://www.instagram.com/hailemlak.sahle"
//           className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
//         >
//           <i className="fab fa-instagram text-2xl"></i>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Contact;
