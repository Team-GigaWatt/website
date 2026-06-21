"use client";

import LogoLoop, { type LogoItem } from "./LogoLoop";

const sponsorLogos: LogoItem[] = [
  { src: "/sponsors/Altium_idwRP5aLTr_0.png",          alt: "Altium",      title: "Altium" },
  { src: "/sponsors/rapidharness.jpeg",           alt: "Rapid Harness", title: "Rapid Harness"},
  { src: "/sponsors/Ansys_idvqLHPwi0_1.png",           alt: "Ansys",       title: "Ansys" },
  { src: "/sponsors/SOLIDWORKS_idA6znzGC__0.png",       alt: "SOLIDWORKS",  title: "SOLIDWORKS" },
  { src: "/sponsors/balajiwires.png",                   alt: "Balaji Wires",title: "Balaji Wires" },
  { src: "/sponsors/bitsaa.jpg",                        alt: "BITSAA",      title: "BITSAA" },
  { src: "/sponsors/bitsgoa.png",                       alt: "BITS Goa",    title: "BITS Goa" },
  { src: "/sponsors/boson.png",                         alt: "Boson",       title: "Boson" },
  { src: "/sponsors/gemtech.jpeg",                      alt: "Gemtech",     title: "Gemtech" },
  { src: "/sponsors/leanwatts.png",                     alt: "LeanWatts",   title: "LeanWatts" },
  { src: "/sponsors/matlab.png",                        alt: "MATLAB",      title: "MATLAB" },
  { src: "/sponsors/sandbox.jpg",                       alt: "Sandbox",     title: "Sandbox" },
];

const HorizontalScrollCarousel = () => {
  return (
    <div
      className="w-full bg-[#111111] relative overflow-hidden flex items-center justify-center text-white"
      style={{ paddingTop: '8rem', paddingBottom: '8rem' }}
    >
      <LogoLoop
        logos={sponsorLogos}
        className="text-white"
        speed={90}
        direction="left"
        logoHeight={80}
        gap={100}
        hoverSpeed={0}
        scaleOnHover={true}
        fadeOut={true}
        fadeOutColor="#111111"
        ariaLabel="Team GigaWatt Sponsors"
      />
    </div>
  );
};

export default HorizontalScrollCarousel;
