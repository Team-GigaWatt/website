import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] relative z-30 font-sans border-t border-black/5 mt-32">
      <div className="w-full flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32">
        
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center justify-center w-full mx-auto">
          <Link href="/" className="mb-6 inline-block">
            <Image 
              src="/gigawatt-logo.png" 
              alt="Team Gigawatt Logo" 
              width={200} 
              height={80} 
              className="w-auto h-20 object-contain filter brightness-0 transition-opacity duration-300 hover:opacity-70 mx-auto" 
            />
          </Link>
          <p className="text-zinc-500 text-[16px] sm:text-[18px] tracking-wide mb-24 font-medium text-center">
            Driving Innovation, Powering Excellence.
          </p>
        </div>
        
        {/* Quick Links Horizontal */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 mb-24 w-full mx-auto">
          {[
            { name: 'Home', href: '/' },
            { name: 'Cars', href: '/cars' },
            { name: 'Team', href: '/team' },
            { name: 'Gallery', href: '/gallery' },
            { name: 'About', href: '/#about' },
            { name: 'Sponsors', href: '/sponsors' },
            { name: 'Contact', href: '/contact' }
          ].map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-zinc-600 text-[15px] font-semibold tracking-wide hover:text-black transition-colors text-center"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Socials */}
        <div className="flex justify-center items-center gap-6 mb-24 mt-15 w-full mx-auto">
          <a href="https://instagram.com/teamgigawatt" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white border border-black/10 flex items-center justify-center text-zinc-600 hover:border-black hover:bg-black hover:text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <FaInstagram size={22} />
          </a>
          <a href="https://www.linkedin.com/company/team-gigawatt/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white border border-black/10 flex items-center justify-center text-zinc-600 hover:border-black hover:bg-black hover:text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <FaLinkedinIn size={22} />
          </a>
          <a href="mailto:gigawattbitsgoa@gmail.com" className="w-14 h-14 rounded-full bg-white border border-black/10 flex items-center justify-center text-zinc-600 hover:border-black hover:bg-black hover:text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <FaEnvelope size={22} />
          </a>
        </div>
        
        {/* Divider and Copyright */}
        <div className="w-full max-w-4xl mx-auto border-t border-black/10 pt-8 pb-4 flex flex-col items-center justify-center">
          <p className="text-zinc-500 text-[14px] font-medium tracking-wide text-center">
            © {new Date().getFullYear()} Team GigaWatt BITS Goa. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
