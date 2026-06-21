"use client";

import React, { useState } from 'react';
import Masonry from '@/components/Masonry';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  { id: '1',  img: '/gallery/1000236872.jpg', height: 400 },
  { id: '2',  img: '/gallery/1000236914.jpg', height: 600 },
  { id: '3',  img: '/gallery/1000236916.jpg', height: 500 },
  { id: '4',  img: '/gallery/1000236918.jpg', height: 700 },
  { id: '5',  img: '/gallery/1000236919.jpg', height: 450 },
  { id: '6',  img: '/gallery/1000236924.jpg', height: 550 },
  { id: '7',  img: '/gallery/1000236926.jpg', height: 600 },
  { id: '8',  img: '/gallery/1000236932.jpg', height: 650 },
  { id: '9',  img: '/gallery/1000236934.jpg', height: 400 },
  { id: '10', img: '/gallery/1000236936.jpg', height: 550 },
  { id: '11', img: '/gallery/1000236938.jpg', height: 750 },
  { id: '12', img: '/gallery/1000255026.jpg', height: 450 },
  { id: '13', img: '/gallery/img4.jpg', height: 600 },
  { id: '14', img: '/gallery/img5.jpg', height: 600 },
  { id: '15', img: '/gallery/gigawatt1-1.jpg', height: 400 },
  { id: '16', img: '/gallery/gigawatt1-2.jpg', height: 500 },
  { id: '17', img: '/gallery/gigawatt1-3.jpg', height: 450 },
  { id: '18', img: '/gallery/gigawatt1-4.jpg', height: 550 },
  
];

export default function ClientGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close when pressing Escape key, navigate on arrows
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => prev !== null ? (prev + 1) % galleryItems.length : null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full relative min-h-[1000px]">
      <Masonry 
        items={galleryItems} 
        onItemClick={(item) => {
          const idx = galleryItems.findIndex(i => i.id === item.id);
          setSelectedIndex(idx >= 0 ? idx : null);
        }} 
        scaleOnHover={true} 
      />

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-pointer"
            onClick={() => setSelectedIndex(null)}
          >
            <div className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors z-[101]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>

            {/* Left Arrow */}
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Right Arrow */}
            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => prev !== null ? (prev + 1) % galleryItems.length : null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div 
              className="relative max-w-[80vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={selectedIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  src={galleryItems[selectedIndex].img} 
                  alt="Expanded gallery view" 
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
