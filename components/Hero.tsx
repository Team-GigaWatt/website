"use client";

import { motion } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

const MarqueeRow = ({ text, reverse = false }: { text: string; reverse?: boolean }) => {
  return (
    <div className="flex -translate-y-12 select-none overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
      >
        <span className="w-fit whitespace-nowrap text-[25vw] md:text-[20vmax] font-black uppercase leading-[0.75] text-slate-300 pr-24 md:pr-48">
          {text}
        </span>
        <span className="w-fit whitespace-nowrap text-[25vw] md:text-[20vmax] font-black uppercase leading-[0.75] text-slate-300 pr-24 md:pr-48">
          {text}
        </span>
      </motion.div>
    </div>
  );
};

export default function Hero({
  title = (
    <>
      We Are<br />
      <span className="text-[#e30613]">Team Gigawatt</span>
    </>
  ),
  subtitle = "We are Team Gigawatt, the premier electric Formula Student team representing BITS Pilani, Goa Campus. Pushing the boundaries of automotive engineering.",
  marqueeWords = ["RACING", "SPEED", "INNOVATION"]
}: {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  marqueeWords?: string[];
}) {
  return (
    <section className="relative h-screen bg-slate-200 overflow-hidden flex flex-col justify-center">

      {/* Desktop: scrolling marquee rows */}
      <div className="hidden md:flex absolute inset-0 z-0 flex-col justify-center pointer-events-none mt-12">
        {marqueeWords.map((word, idx) => (
          <MarqueeRow key={idx} text={word} reverse={idx % 2 !== 0} />
        ))}
      </div>

      {/* Mobile: single large static word behind the title */}
      <div className="flex md:hidden absolute inset-0 z-0 items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className={`text-[45vw] font-black uppercase leading-none text-slate-300/50 tracking-tighter ${outfit.className}`}
          aria-hidden="true"
        >
          {marqueeWords[0]}
        </span>
      </div>

      {/* Title overlay */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none px-6 w-full">
        <h1
          className={`text-center w-full text-[11vw] sm:text-[12vw] md:text-[8rem] lg:text-[8rem] xl:text-[10rem] uppercase font-black leading-[0.85] tracking-tighter text-slate-900 ${outfit.className}`}
        >
          {title}
        </h1>
      </div>

      {/* Scroll Down Button — desktop only */}
      <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12 z-50">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hidden text-8xl text-slate-500 md:block hover:text-[#e30613] transition-colors duration-300 cursor-pointer"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="8 12 12 16 16 12"></polyline>
          <line x1="12" y1="8" x2="12" y2="16"></line>
        </svg>
      </div>
    </section>
  );
}
