import React from "react";

function Projects() {
  const projects = [
    {
      name: "Resumatse – AI Resume Builder",
      link: "https://www.resumatse.xyz",
      img: "/Resumatse.png",
      description:
        "Resumatse is an AI-powered resume builder that leverages Google Gemini AI to generate professional summaries and descriptions automatically. Built with React, Tailwind CSS, Shadcn UI, Clerk, and Strapi, it offers a clean, responsive, and user-friendly interface. The platform features multiple templates with a live preview, along with download and share functionalities, enabling users to create personalized, professional resumes quickly and effortlessly.",
      freelance: false,
    },
    {
      name: "VFashions",
      img: "/Vfashions.png",
      link: "https://www.vfashions.in",
      freelance: true,
      description:
        "The E-Commerce Website is a freelance project built using WordPress, WooCommerce, PHP, HTML, and CSS. It features a full product catalog, shopping cart, and secure payment system. I customized the WordPress theme and integrated multiple plugins to enhance user experience, while ensuring mobile responsiveness and SEO optimization for better reach and performance.",
    },
    {
      name: "Obys Clone – Interactive Web Experience",
      img: "/Obys.png",
      link: "https://obys-clone-project.onrender.com",
      description:
        "Developed a visually immersive website inspired by Obys Agency, utilizing GSAP, Tailwind CSS, HTML, CSS, JavaScript, Locomotive Scroll, and Three.js. The project showcases advanced animation techniques, including scroll-based effects and 3D elements, delivering a dynamic user experience. Emphasized responsive design and smooth interactions to enhance usability across devices.",
      freelance: false,
    },
    {
      name: "Attira – E-Commerce Website",
      img: "/Attira.png",
      link: "https://attira.vercel.app/",
      description:
        "Developed a modern e-commerce website using React, Tailwind CSS, GSAP, Context API, and LocalStorage. The platform features dynamic animations, responsive design, and smooth user interactions, with state management and persistent data handling for cart, dynamic search and user preferences, delivering an engaging online shopping experience.",
      freelance: false,
    },
  ];

  return (
    <section className="w-full py-20">
      <h1 className="text-[8vw] md:text-[5vw] font-extrabold text-emerald-400 uppercase text-center mb-20 tracking-tight font-heading">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-10 px-4 md:px-20">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-80 sm:w-96 md:w-[28rem] h-[40rem] bg-gradient-to-b from-emerald-900 via-emerald-950 to-black rounded-3xl [perspective:1000px] group overflow-visible block"
          >
            <div
              className="w-full h-full rounded-3xl shadow-2xl flex flex-col justify-start items-center p-6 md:p-8 text-white
             [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(.25,.46,.45,1)]
             group-hover:[transform:rotateX(70deg)] relative z-10"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-52 md:h-60 object-cover rounded-2xl mb-4 shadow-lg [transform:translateZ(50px)] 
                            transition-transform duration-700 ease-[cubic-bezier(.25,.46,.45,1)] 
                            group-hover:[transform:translateZ(320px)_rotateX(-60deg)]"
              />
              <div
                className="text-emerald-200 text-center [transform:translateZ(50px)] 
                            transition-transform duration-700 ease-[cubic-bezier(.25,.46,.45,1)] 
                            group-hover:[transform:translateZ(90px)_rotateX(-60deg)] relative z-20"
              >
                <h2 className="text-lg md:text-2xl font-heading font-bold mb-3 text-white group-hover:drop-shadow-[0_10px_10px_rgba(0,100,0,0.8)]">
                  {project.name}
                </h2>
                <p className="text-sm text-gray-400 text-left md:text-base font-body font-light leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.link && (
                  <div
                    className="[transform:translateZ(150px)] z-90 transition-transform duration-700 ease-[cubic-bezier(.25,.46,.45,1)] 
                        group-hover:[transform:translateZ(250px)_rotateX(-360deg)] inline-block relative pointer-events-none"
                  >
                    <span
                      className="bg-emerald-500 text-white font-semibold py-2 px-6 rounded-full 
                        transition-all duration-300 transform hover:scale-105 shadow-md inline-block"
                    >
                      Visit Now
                    </span>
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
