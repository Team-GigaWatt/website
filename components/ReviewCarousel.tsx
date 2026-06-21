"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

export interface Review {
  id: string | number;
  body: string;
  author: string;
  title: string;
  company?: string;
}

export interface ReviewsCarouselProps {
  reviews: Review[];
  className?: string;
  excludeIds?: (string | number)[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  kicker?: string;
  title?: string;
  accentTitle?: string;
}

function wrapIndex(index: number, length: number) {
  if (length <= 0) {
    return 0;
  }
  return (index + length) % length;
}

export default function ReviewsCarousel({
  reviews,
  className,
  excludeIds = [],
  autoPlay = true,
  autoPlayInterval = 5000,
  kicker = "THAT'S WHAT",
  title = "THEY",
  accentTitle = "SAID",
}: ReviewsCarouselProps) {
  const filteredReviews = useMemo(() => {
    if (excludeIds.length === 0) {
      return reviews;
    }
    const excluded = new Set(excludeIds);
    return reviews.filter((review) => !excluded.has(review.id));
  }, [excludeIds, reviews]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const currentIndex =
    filteredReviews.length > 0 ? Math.min(activeIndex, filteredReviews.length - 1) : 0;
  const activeReview = filteredReviews[currentIndex];

  useEffect(() => {
    if (!autoPlay || filteredReviews.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => wrapIndex(current + 1, filteredReviews.length));
    }, autoPlayInterval);

    return () => window.clearInterval(interval);
  }, [autoPlay, autoPlayInterval, filteredReviews.length]);

  if (!activeReview) {
    return null;
  }

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((current) => wrapIndex(current - 1, filteredReviews.length));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((current) => wrapIndex(current + 1, filteredReviews.length));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-black px-8 sm:px-16 lg:px-24 text-white border-t border-neutral-900/50",
        className
      )}
      style={{
        paddingTop: "6rem",
        paddingBottom: "7rem",
      }}
      aria-label="Testimonials"
    >
      {/* Premium ambient light glow */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#e30613]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[600px] h-[600px] bg-[#e30613]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1380px] mx-auto grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28 items-center">
        {/* Left Column: Title Block and Navigation stacked naturally */}
        <div className="flex flex-col space-y-12 sm:space-y-16 items-end text-right">
          <div className="space-y-6 pt-2 sm:pt-4 lg:pt-6">
            <p className="text-[1.8rem] font-light uppercase leading-none tracking-[-0.04em] text-neutral-400 sm:text-[2.2rem] lg:text-[2.6rem]">
              {kicker}
            </p>
            <h2 className="font-nutmeg text-[4.2rem] uppercase leading-[0.82] tracking-[-0.06em] text-[#e30613] sm:text-[5.8rem] lg:text-[7.2rem]">
              <span className="block">{title}</span>
              <span className="block text-white">{accentTitle}</span>
            </h2>
          </div>

          {/* Controls nested underneath the title with compact layout */}
          <div className="flex flex-col gap-6 items-end">
            <div className="flex items-center gap-5">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={handlePrev}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-all duration-300 hover:bg-[#e30613] hover:border-[#e30613] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={handleNext}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-all duration-300 hover:bg-[#e30613] hover:border-[#e30613] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Pagination dots placed cleanly below the buttons */}
            <div className="flex gap-3">
              {filteredReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                    index === currentIndex
                      ? "w-12 bg-[#e30613]"
                      : "w-2.5 bg-neutral-800 hover:bg-neutral-700"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Card Carousel Container */}
        <div className="relative min-h-[420px] flex items-center justify-end">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeReview.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 260, damping: 28 },
                opacity: { duration: 0.25 },
                scale: { duration: 0.25 },
              }}
              className="w-full max-w-[640px] bg-[#080808] border border-neutral-900 rounded-lg shadow-[0_50px_100px_rgba(0,0,0,0.95)] relative overflow-hidden group hover:border-[#e30613]/25 hover:shadow-[0_20px_80px_rgba(227,6,19,0.08)] transition-all duration-500"
              style={{
                padding: "3.5rem 3rem",
              }}
            >
              {/* Huge stylized double quotes watermark */}
              <span className="absolute -left-2 -top-10 text-[18rem] font-serif text-[#e30613]/5 select-none pointer-events-none font-nutmeg">
                "
              </span>

              {/* Top Accent Line Highlight */}
              <div className="absolute top-0 right-0 w-36 h-[2px] bg-gradient-to-l from-[#e30613]/80 to-transparent" />
              <div className="absolute top-0 right-0 w-[2px] h-36 bg-gradient-to-b from-[#e30613]/80 to-transparent" />

              {/* Card Contents */}
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  {/* Top Right: Name of the person */}
                  <div className="flex justify-end items-center">
                    <span className="font-nutmeg uppercase text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                      {activeReview.author}
                    </span>
                  </div>

                  {/* Below the Name: Position (right-aligned) */}
                  <div className="text-right mt-3.5">
                    <span className="text-xs sm:text-sm font-bold tracking-widest text-[#e30613] uppercase">
                      {activeReview.title}
                      {activeReview.company ? ` | ${activeReview.company}` : ""}
                    </span>
                  </div>

                  {/* Subtle Separator */}
                  <div className="w-20 h-[2px] bg-[#e30613] ml-auto mt-8 mb-10 opacity-80" />

                  {/* Below the Position: Review Quote (right-aligned) */}
                  <div className="text-right">
                    <p className="font-light text-xl sm:text-2xl text-neutral-300 leading-relaxed italic pr-1">
                      "{activeReview.body}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
