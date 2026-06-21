"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SponsorCarousel from "@/components/SponsorCarousel";
import SponsorTiers from "@/components/SponsorTiers";

export default function SponsorsPage() {
  return (
    <>
      <main className="bg-[#111111] text-zinc-900 selection:bg-[#e30613] selection:text-white relative">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title={<>Our<br /><span className="text-[#e30613]">Sponsors</span></>}
          subtitle="Backing the future of mobility. Meet the visionary partners who make Team Gigawatt's innovations possible."
          marqueeWords={["SPONSORS", "PARTNERS", "BACKERS"]}
        />

        {/* Heading */}
        <div className="w-full flex flex-col items-center justify-center pt-24 pb-0 px-6 text-center">
          <h2
            className="text-5xl md:text-7xl font-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600"
            style={{ fontFamily: "var(--font-nutmeg)" }}
          >
            Driving our <span className="text-[#e30613]">Vision</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-xl">
            The partners and companies powering Team Gigawatt forward.
          </p>
        </div>

        {/* Horizontal Scroll Carousel */}
        <SponsorCarousel />

        {/*Become a Sponsor */}
        <div className="w-full flex flex-col items-center px-6 pt-28" style={{ paddingBottom: "14rem" }}>
          {/* Section heading */}
          <div className="text-center mb-16">
            <p
              className="text-[#e30613] text-xs font-bold tracking-[0.28em] uppercase mb-4"
            >
              Partner With Us
            </p>
            <h2
              className="text-5xl md:text-7xl font-black uppercase tracking-wide text-white"
              style={{ fontFamily: "var(--font-nutmeg)" }}
            >
              Become a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e30613] to-[#ff6b6b]">
                Sponsor
              </span>
            </h2>
            <div style={{ height: "3.75rem" }} />
          </div>

          <div className="w-full max-w-5xl">
            <SponsorTiers />
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
