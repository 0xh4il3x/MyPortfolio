import haile from '../assets/haile.jpg';

const AboutSection = () => (
  <div className="flex flex-wrap items-center justify-center min-h-screen p-6 md:p-12">
    <img
      src={haile}
      alt="About me"
      className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0"
    />
    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-12 text-center md:text-left">
      <div className="text-2xl font-bold text-blue-500 mb-4">
        <span className="inline-block overflow-hidden whitespace-nowrap border-blue-500">
        Hello! I'm Haileamlak Sahle
        </span>
      </div>
      <p className="text-base md:text-lg font-serif font-bold leading-relaxed">
      I’m an aspiring cybersecurity professional with a passion for securing digital systems and identifying vulnerabilities. Focused on penetration testing and ethical hacking, I’m always learning and staying updated with the latest cybersecurity trends.

     My goal is to use my growing expertise to contribute to building secure and resilient systems. Let’s connect and work toward a safer digital world!
      </p>
    </div>
  </div>
);

export default AboutSection;
