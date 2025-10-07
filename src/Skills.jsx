import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skills = [
    { name: "C", img: "/C.png" },
    { name: "Java", img: "/Java.png" },
    { name: "Figma", img: "/Figma.png" },
    { name: "HTML", img: "/HTML.png" },
    { name: "CSS", img: "/CSS.png" },
    { name: "Javascript", img: "/Javascript.png" },
    { name: "Tailwind", img: "/Tailwind.png" },
    { name: "GSAP", img: "/GSAP.png" },
    { name: "React", img: "/React.png" },
    { name : "Tanstack Query", img : "/Tanstack.png"},
    { name: "Git", img: "/Git.png" },
    { name: "GitHub", img: "/Github.png" },
    { name: "Clerk", img: "/Clerk.png" },
    { name: "Strapi", img: "/Strapi.webp" },
  ];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const skillsContainer = skillsRef.current;

      const updateAnimation = () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());

        const totalWidth = skillsContainer.scrollWidth;
        const viewportWidth = section.offsetWidth;
        const xMove = Math.max(0, totalWidth - viewportWidth);

        if (xMove > 0) {
          gsap.to(skillsContainer, {
            x: -xMove,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${xMove}`,
              scrub: 2,
              pin: true,
              invalidateOnRefresh: true,
            },
          });
        }
      };
      updateAnimation();
      window.addEventListener("resize", updateAnimation);

      return () => {
        window.removeEventListener("resize", updateAnimation);
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, sectionRef);

    return () => ctx.revert();
  });

  return (
    <section
      ref={sectionRef}
      className="page-2 w-full min-h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-emerald-900 via-emerald-950 to-black text-white relative"
    >
      <h1
        ref={titleRef}
        className="text-[10vw] font-extrabold font-heading text-emerald-300 uppercase tracking-tight mb-12"
      >
        Skills
      </h1>

      <div className="w-full overflow-hidden px-8">
        <div ref={skillsRef} className="flex flex-nowrap gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`md:size-100 size-50 flex flex-col items-center justify-center 
                      ${
                        skill.name === "Clerk" || skill.name === "CSS"
                          ? "bg-white"
                          : "bg-emerald-400/10"
                      } 
                      backdrop-blur-xl border border-emerald-300/30 shadow-lg shrink-0 rounded-2xl 
                      hover:${
                        skill.name === "Clerk"
                          ? "bg-gray-900"
                          : "bg-emerald-400/20"
                      } 
                      hover:scale-105 hover:shadow-emerald-500/40 transition-all duration-300`}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-[90%] h-[90%] object-cover mb-2"
              />
              <p
                className={`text-md font-semibold ${
                  skill.name === "Clerk" || skill.name === "CSS"
                    ? "text-emerald-500"
                    : "text-emerald-200"
                }`}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
