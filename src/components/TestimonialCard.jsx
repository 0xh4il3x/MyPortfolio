import { motion } from "framer-motion";

const TestimonialCard = ({ name, quote, image }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="p-6 rounded-xl bg-gradient-to-r from-purple-500 via-blue-800 to-indigo-700 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
  >
    <div className="flex items-center mb-6">
      <img
        src={image}
        alt={`${name}'s picture`}
        className="w-24 h-24 rounded-full border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-110"
      />
      <div className="ml-6">
        <p className="text-lg italic text-opacity-90">{quote}</p>
        <h4 className="text-xl font-semibold mt-4 tracking-wide">{` ${name}`}</h4>
      </div>
    </div>
  </motion.div>
);

export default TestimonialCard;
