const ProjectCard = ({ title, description, link }) => (
  <div className="border border-blue-500 p-6 rounded-xl shadow-lg bg-slate-900 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
    <h3 className="text-2xl font-semibold text-white mb-4">
      {title}
    </h3>
    <p className="text-slate-300 text-base mb-6 leading-relaxed">
      {description}
    </p>
    <a
      href={link}
      className="inline-block text-white bg-blue-500 px-6 py-3 rounded-full shadow hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
    >
      View Project
    </a>
  </div>
);

export default ProjectCard;
