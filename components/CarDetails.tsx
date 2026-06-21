"use client";

import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Titan_One, Outfit } from 'next/font/google';

const titanOne = Titan_One({ weight: '400', subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });

export interface CarSpec {
  label: string;
  value: string;
}

export interface CarData {
  id: string;
  name: string;
  suffix: string;
  images: string[];
  specs: CarSpec[];
}

export const defaultSpecs: CarSpec[] = [
  { label: 'Top Speed', value: '120 km/h' },
  { label: 'Acceleration', value: '0-100 in 2.8s' },
  { label: 'Motor', value: 'Dual Axial Flux' },
  { label: 'Max Power', value: '80 kW' },
  { label: 'Max Torque', value: '1200 Nm' },
  { label: 'Battery', value: '6.8 kWh Li-ion' },
  { label: 'Weight', value: '190 kg' },
  { label: 'Chassis', value: 'Carbon Fiber Monocoque' },
  { label: 'Suspension', value: 'Double Wishbone Pushrod' },
  { label: 'Brakes', value: '4-Piston Calipers' },
  { label: 'Tires', value: 'Hoosier Racing Slicks' },
];

export const defaultCarsData: CarData[] = [
  {
    id: "gigawatt-1-0",
    name: "GIGAWATT",
    suffix: "2.0",
    images: [
      '/gigawat_2.0/1000236914.jpg',
      '/gigawat_2.0/1000236916.jpg',
      '/gigawat_2.0/1000236918.jpg',
      '/gigawat_2.0/1000236924.jpg',
      '/gigawat_2.0/1000236936.jpg',
      '/gigawat_2.0/1000236938.jpg',
      '/gigawat_2.0/1000255026.jpg',
    ],
    specs: [
      { label: 'Top Speed', value: '80 km/h' },
      { label: 'Acceleration (0-60km/h)', value: '5 seconds' },
      { label: 'Motor', value: 'Agni 119R Brushed DC Motor' },
      { label: 'Maximum Power', value: '20 kW' },
      { label: 'Maximum Torque', value: '30 Nm' },
      { label: 'Battery', value: '58V Lithium-Ion, 3.3 kWh capacity' },
      { label: 'Weight', value: '250 kg' },
      { label: 'Chassis', value: 'Tubular Spaceframe' },
      { label: 'Suspension', value: 'Direct Attach' },
      { label: 'Brakes', value: 'Single Piston Wilwood Calipers' },
      { label: 'Tires', value: '13 Inches' },
    ]
  },
  
];

export default function CarDetails({ cars = defaultCarsData }: { cars?: CarData[] }) {
  return (
    <div className="w-full bg-[#e5e5e5] z-20 relative pt-12">
      <div className="w-full flex justify-center sticky top-24 z-30 pointer-events-none mb-12">
        
      </div>
      
      <div className="flex flex-col w-full">
        {cars.map((car) => (
          <CarView key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

function CarView({ car }: { car: CarData }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % car.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [car.images.length]);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % car.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + car.images.length) % car.images.length);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24 border-b border-zinc-300 last:border-0 relative">
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mb-6 md:mb-8 text-center md:text-left z-10"
      >
        <h1 className={`text-5xl md:text-7xl text-zinc-900 tracking-tight leading-none font-extrabold mb-0 ${outfit.className}`}>
          {car.name} <span className="font-light text-zinc-500">{car.suffix}</span>
        </h1>
      </motion.div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        
        {/* Carousel on left */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full h-[400px] md:h-[600px] mt-[3px] rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl flex items-center justify-center group shrink-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={car.images[currentImage]} 
                alt="Car View" 
                fill 
                className="object-cover"
                unoptimized={car.images[currentImage].startsWith('http')}
              />
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="absolute inset-x-0 bottom-6 flex justify-center items-center gap-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={prevImage}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#e30613] hover:border-[#e30613] transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {car.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentImage ? 'w-8 bg-[#e30613]' : 'w-2 bg-white/50'}`}
                />
              ))}
            </div>
            <button 
              onClick={nextImage}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#e30613] hover:border-[#e30613] transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Classy Vertical List on right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col w-full h-auto min-h-[400px] md:h-[600px] md:pl-12"
        >
          {car.specs.map((spec, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row justify-between items-start sm:items-end flex-1 border-b border-zinc-900/20 group hover:border-[#e30613] transition-colors duration-300`}
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-zinc-500 font-bold group-hover:text-[#e30613] transition-colors duration-300 mb-1 sm:mb-0 pb-1 md:pb-3">
                {spec.label}
              </span>
              <span className={`text-lg md:text-[1.6rem] text-zinc-900 group-hover:text-[#e30613] transition-colors duration-300 leading-none pb-1 md:pb-2 font-medium ${outfit.className}`}>
                {spec.value}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
