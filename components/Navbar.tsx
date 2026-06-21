"use client";

import React, { Dispatch, SetStateAction, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 10) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (Math.abs(delta) < 4) return;

      if (delta > 0) setIsVisible(false);
      else setIsVisible(true);

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-0 transition-transform duration-300 ease-out ${
          isVisible ? 'translate-y-0' : '-translate-y-[100px]'
        }`}
      >
        {/* Desktop Navigation */}
        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
          className="relative mx-auto hidden md:flex w-fit rounded-full border-[1.5px] border-black bg-white p-1.5 isolate"
        >
          <Tab setPosition={setPosition} href="/">Home</Tab>
          <Tab setPosition={setPosition} href="/#introduction">About</Tab>
          <Tab setPosition={setPosition} href="/cars">Cars</Tab>
          <Tab setPosition={setPosition} href="/team">Team</Tab>
          <Tab setPosition={setPosition} href="/sponsors">Sponsors</Tab>
          <Tab setPosition={setPosition} href="/gallery">Gallery</Tab>
          <Tab setPosition={setPosition} href="/contact">Contact</Tab>

          <Cursor position={position} />
        </ul>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden w-full flex justify-end">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="bg-transparent text-black p-2 flex items-center justify-center hover:text-[#e30613] transition-colors"
          >
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-[#111111] flex flex-col items-center justify-center overflow-hidden"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-white p-2 hover:text-[#e30613] transition-colors duration-300"
            >
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="36px" width="36px" xmlns="http://www.w3.org/2000/svg">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="flex flex-col items-center gap-8 text-white text-3xl sm:text-4xl font-black uppercase tracking-widest" style={{ fontFamily: "var(--font-nutmeg)" }}>
              <MobileLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileLink>
              <MobileLink href="/#introduction" onClick={() => setIsMenuOpen(false)}>About</MobileLink>
              <MobileLink href="/cars" onClick={() => setIsMenuOpen(false)}>Cars</MobileLink>
              <MobileLink href="/team" onClick={() => setIsMenuOpen(false)}>Team</MobileLink>
              <MobileLink href="/sponsors" onClick={() => setIsMenuOpen(false)}>Sponsors</MobileLink>
              <MobileLink href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</MobileLink>
              <MobileLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const MobileLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link href={href} onClick={onClick} className="hover:text-[#e30613] transition-colors duration-300 block">
      {children}
    </Link>
  </motion.div>
);

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
  href: string;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer text-xs uppercase text-black hover:text-white transition-colors duration-300 md:text-[14px] font-bold tracking-wider"
      style={{ fontFamily: "var(--font-nutmeg)" }}
    >
      <Link href={href} className="w-full h-full flex items-center justify-center" style={{ padding: "12px 28px" }}>
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 rounded-full bg-[#e30613]"
      style={{ height: "calc(100% - 12px)", top: "6px" }}
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};
