import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaDownload } from "react-icons/fa";
import { Download } from "lucide-react";

function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden pt-5 md:pt-20">
      {/* Left */}
      <div className="lg:w-[40%] w-full flex flex-col justify-start pt-30 items-center lg:items-start px-6 lg:px-16 py-12">
        <div className="flex flex-col justify-around h-[60%]">
          <div>
            <h2 className="text-3xl font-heading sm:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-800 leading-tight text-left">
              Hi, I'm{" "}
              <span className="text-emerald-600 drop-shadow-sm">
                Vamshi Krishna
              </span>
            </h2>
            <p className="text-gray-600 font-body text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl text-left">
              I enjoy turning ideas into clean and responsive web experiences
              that people love to use. Most of my time goes into experimenting
              with modern tools, polishing small details, and learning something
              new every day. I’m especially excited about building intuitive UIs
              that feel simple, fast, and a little bit fun.
            </p>
          </div>

          <div>
            <a href="/Resume.pdf" download="Vamshi_Krishna_Resume.pdf">
              <button className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500 text-white font-medium rounded-lg mt-3 hover:bg-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg w-fit cursor-pointer">
                <FaDownload className="text-lg group-hover:translate-y-0.5 transition-transform duration-300" />
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="flex lg:hidden justify-center gap-5 mt-8">
          <SocialIcons />
        </div>
      </div>

      {/* Middle */}
      <div className="lg:w-[40%] w-full md:mt-24 flex items-center justify-center py-10 lg:py-0 z-90 relative overflow-hidden">
        <div className="md:size-100 size-80 bg-emerald-500 rounded-full static md:absolute z-20 md:top-0 top-8 lg:top-0 left-0 md:left-60 lg:left-23 flex items-center justify-center">
          <img
            src="profile.png"
            alt="Profile"
            className="md:hidden visible w-full h-full object-cover rounded-full"
          />
        </div>

        <img
          src="profile.png"
          alt="Profile"
          className="relative z-30 hidden md:block"
        />
      </div>

      {/* Right */}
      <div className="hidden lg:flex lg:w-[12%] h-auto lg:h-screen flex-col justify-center md:-mt-10 mt-0 items-center gap-6 py-10">
        <SocialIcons vertical />
      </div>
    </section>
  );
}
const SocialIcons = ({ vertical }) => (
  <div
    className={`flex ${vertical ? "flex-col" : "flex-row"} items-center gap-6`}
  >
    <a
      href="https://www.linkedin.com/in/vamshikrishna-kalluri921"
      target="_blank"
      rel="noopener noreferrer"
      className="group p-3 rounded-full shadow-lg shadow-gray-300 md:shadow-gray-400  hover:shadow-xl bg-white transition-all duration-300 hover:-translate-y-1"
    >
      <FaLinkedin className="text-gray-700 text-2xl group-hover:text-blue-600 transition-colors" />
    </a>
    <a
      href="https://github.com/vamshi-krishna921"
      target="_blank"
      rel="noopener noreferrer"
      className="group p-3 rounded-full shadow-gray-300 md:shadow-gray-400  shadow-lg hover:shadow-xl bg-white transition-all duration-300 hover:-translate-y-1"
    >
      <FaGithub className="text-gray-700 text-2xl group-hover:text-black transition-colors" />
    </a>
    <a
      href="https://www.instagram.com/vamshi_krishna921"
      target="_blank"
      rel="noopener noreferrer"
      className="group p-3 rounded-full shadow-lg shadow-gray-300 md:shadow-gray-400  hover:shadow-xl bg-white transition-all duration-300 hover:-translate-y-1"
    >
      <FaInstagram className="text-gray-700 text-2xl group-hover:text-pink-500 transition-colors" />
    </a>
  </div>
);

export default Home;
