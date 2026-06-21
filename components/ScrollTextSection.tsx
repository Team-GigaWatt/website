"use client";

import { useEffect, useRef, useState } from "react";

export interface TextBlock {
  id: string;
  index?: string;
  eyebrow?: string;
  heading: string;
  body: string | string[];
  aside?: string;
}

export interface ScrollTextSectionProps {
  id?: string;
  sectionEyebrow?: string;
  sectionTitle: string;
  blocks: TextBlock[];
  background?: "dark" | "surface";
  ariaLabel?: string;
}

function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Block({ block }: { block: TextBlock }) {
  const { ref, inView } = useInView(0.2);
  const paragraphs = Array.isArray(block.body) ? block.body : [block.body];

  return (
    <div
      ref={ref}
      id={block.id}
      className={`sts-block ${inView ? "sts-block--visible" : ""}`}
    >
      {(block.index || block.eyebrow) && (
        <div className="sts-block__meta">
          {block.index && (
            <span className="sts-block__index">{block.index} /</span>
          )}
          {block.eyebrow && (
            <span className="sts-block__eyebrow">{block.eyebrow}</span>
          )}
        </div>
      )}

      <h2 className="sts-block__heading">{block.heading}</h2>
      <div className="sts-block__rule" aria-hidden="true" />

      <div className="sts-block__content">
        <div className="sts-block__body">
          {paragraphs.map((paragraph, index) => (
            <p key={`${block.id}-${index}`} className="sts-block__para">
              {paragraph}
            </p>
          ))}
        </div>

        {block.aside && (
          <aside className="sts-block__aside">
            <p>{block.aside}</p>
          </aside>
        )}
      </div>
    </div>
  );
}

export default function ScrollTextSection({
  id,
  sectionEyebrow,
  sectionTitle,
  blocks,
  background = "dark",
  ariaLabel,
}: ScrollTextSectionProps) {
  return (
    <section
      className={`sts sts--${background}`}
      id={id}
      aria-label={ariaLabel ?? sectionTitle}
    >
      <div className="sts__outer">
        <div className="sts__sidebar">
          <div className="sts__sticky">
            {sectionEyebrow && (
              <p className="sts__sidebar-eyebrow">{sectionEyebrow}</p>
            )}

            <h1 className="sts__sidebar-title">
              {sectionTitle.split(" ").map((word, index) => (
                <span key={`${word}-${index}`} className="sts__sidebar-word">
                  {word}
                </span>
              ))}
            </h1>
          </div>
        </div>

        <div className="sts__blocks">
          {blocks.map((block) => (
            <Block key={block.id} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}
