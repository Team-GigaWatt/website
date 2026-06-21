"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactCards from "@/components/ContactCards";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <main className="bg-[#e5e5e5] text-zinc-900 selection:bg-[#e30613] selection:text-white relative" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Navbar />
        
        {/* Hero Section */}
        <Hero 
          title={<>Get In<br /><span className="text-[#e30613]">Touch</span></>}
          subtitle="Have a question or want to collaborate? We'd love to hear from you."
          marqueeWords={["CONTACT", "CONNECT", "REACH OUT"]}
        />

        {/* Unified Content Container */}
        <div className="w-full flex justify-center" style={{ paddingTop: "4rem", paddingBottom: "8rem" }}>
          <div className="w-full max-w-5xl px-5 sm:px-6 lg:px-8 flex flex-col gap-12">
            <ContactCards />
            <div className="flex justify-center w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
