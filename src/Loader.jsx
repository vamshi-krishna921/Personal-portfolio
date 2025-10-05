import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles } from "lucide-react";

const Loader = () => {
  const loaderRef = useRef(null);
  const counterRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const loadingNowRef = useRef(null);
  const loaderWordsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !loaderWordsRef.current.includes(el)) {
      loaderWordsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.set(loaderWordsRef.current, { y: 150, opacity: 0 });
    gsap.set(".counterDiv", { opacity: 0, y: 100 });
    gsap.set(loadingNowRef.current, { opacity: 0, y: 20 });
    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(loaderWordsRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 0.8,
      ease: "power4.out",
    });
    tl.to(".counterDiv", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      onStart: () => {
        gsap.to(loadingNowRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
        let count = 0;
        const counterEl = counterRef.current;
        const interval = setInterval(() => {
          count++;
          counterEl.textContent = count.toString().padStart(2, "0");
          if (count === 50) {
            gsap.to([textRef1.current, textRef2.current], {
              opacity: 0,
              y: 30,
              duration: 0.3,
              onComplete: () => {
                textRef1.current.textContent = "Where Ideas";
                textRef2.current.textContent = "Meet Interfaces";
                gsap.to([textRef1.current, textRef2.current], {
                  opacity: 1,
                  y: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              },
            });
          }

          if (count >= 100) clearInterval(interval);
        }, 25);
      },
    });
    tl.to(loaderRef.current, {
      y: "-100%",
      duration: 1,
      delay: 2,
      ease: "power2.inOut",
      onComplete: () => {
        loaderRef.current.style.display = "none";
      },
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="z-[999] fixed inset-0 bg-[#101010] flex items-center justify-start overflow-hidden"
    >
      <div className="ml-[10vw] leading-10 md:leading-[7rem] text-white">
        <div className="overflow-hidden flex gap-[3vw]">
          <p className="md:text-[4vw] text-3xl font-light italic counterDiv overflow-hidden opacity-0 translate-y-[100px]">
            <span
              ref={counterRef}
              className="inline-block w-[50px] -mr-7 md:mr-12"
            >
              00
            </span>{" "}
            - 100
          </p>
        </div>

        <div className="overflow-hidden">
          <h1
            ref={(el) => {
              addToRefs(el);
              textRef1.current = el;
            }}
            className="font-semibold text-4xl md:text-[6.5vw] uppercase"
          >
            Welcome
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1
            ref={(el) => {
              addToRefs(el);
              textRef2.current = el;
            }}
            className="font-semibold text-4xl md:text-[6.5vw] uppercase"
          >
            To My Portfolio
          </h1>
        </div>
        <div className="mt-6 overflow-hidden relative">
          <h2
            ref={loadingNowRef}
            className="text-xl md:text-2xl font-light opacity-0"
          >
            Loading Now...
            <Sparkles className="absolute left-40 top-0" />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Loader;
