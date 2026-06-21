"use client";

import React from "react";

const FONT = "'Poppins', sans-serif";



export interface SponsorTierFeature {
  text: string;
}

export interface SponsorTierData {
  
  tier: string;
  
  price: string;
  
  features: SponsorTierFeature[];
  
  ctaLabel: string;
  
  ctaHref?: string;
  
  accentColor?: string;
  
  headerBg?: string;
  
  wide?: boolean;
  
  featured?: boolean;
}


const DEFAULT_TIERS: SponsorTierData[] = [
  {
    tier: "Title",
    price: "₹3,00,000+",
    wide: true,
    accentColor: "#e30613",
    headerBg: "#0a0a0a",
    features: [
      { text: "Premium logo placement on car, team apparel, and all materials" },
      { text: "Same colour scheme of the team's livery and merch as the Title Sponsor" },
      { text: "All benefits of lower tiers" },
    ],
    ctaLabel: "Become the Title Sponsor",
    ctaHref: "mailto:gigawattbitsgoa@gmail.com?subject=Title%20Sponsorship%20Enquiry",
  },
  {
    tier: "Platinum",
    price: "₹1,00,000+",
    accentColor: "#e30613",
    headerBg: "#6b6b6b",
    features: [
      { text: "Large logo on prominent car positions" },
      { text: "Featured content on our website and social media" },
      { text: "All benefits of lower tiers" },
    ],
    ctaLabel: "Become a Platinum Sponsor",
    ctaHref: "mailto:gigawattbitsgoa@gmail.com?subject=Platinum%20Sponsorship%20Enquiry",
  },
  {
    tier: "Gold",
    price: "₹50,000+",
    accentColor: "#e30613",
    headerBg: "#b8970a",
    featured: true,
    features: [
      { text: "Medium-sized logo on car and team apparel" },
      { text: "Recognition in presentations and team events" },
      { text: "All benefits of lower tiers" },
    ],
    ctaLabel: "Become a Gold Sponsor",
    ctaHref: "mailto:gigawattbitsgoa@gmail.com?subject=Gold%20Sponsorship%20Enquiry",
  },
  {
    tier: "Silver",
    price: "₹25,000+",
    accentColor: "#e30613",
    headerBg: "#9ca3af",
    features: [
      { text: "Logo on car and team website" },
      { text: "Mentioned in team's promotional materials" },
      { text: "Acknowledgment in team presentations" },
    ],
    ctaLabel: "Become a Silver Sponsor",
    ctaHref: "mailto:gigawattbitsgoa@gmail.com?subject=Silver%20Sponsorship%20Enquiry",
  },
];



function CheckIcon({ color = "#e30613" }: { color?: string }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: "3px" }}
    >
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity={0.15} />
      <path
        d="M4.5 8l2.5 2.5 4.5-5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}



function WideTierCard({ data }: { data: SponsorTierData }) {
  const headerBg = data.headerBg ?? "#0a0a0a";
  const accent = data.accentColor ?? "#e30613";

  return (
    <div
      style={{
        width: "100%",
        borderRadius: "1.25rem",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.10)",
        background: "#181818",
        fontFamily: FONT,
      }}
    >
      {/* Header */}
      <div style={{ background: headerBg, padding: "2.25rem 2.5rem", textAlign: "center" }}>
        <p style={{
          color: "#fff", fontSize: "1.6rem", fontWeight: 800,
          letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem",
          fontFamily: FONT,
        }}>
          {data.tier}
        </p>
        <p style={{ color: "#e5e5e5", fontSize: "1.05rem", fontWeight: 600, fontFamily: FONT }}>
          {data.price}
        </p>
      </div>

      {/* Features */}
      <div style={{ padding: "2.25rem 2.5rem", display: "flex", flexWrap: "wrap", gap: "1.25rem 4rem" }}>
        {data.features.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", flex: "1 1 220px" }}>
            <CheckIcon color={accent} />
            <span style={{ color: "#d4d4d4", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: FONT, fontWeight: 400 }}>
              {f.text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ padding: "0 2.5rem 2.25rem" }}>
        <a
          href={data.ctaHref ?? "#"}
          style={{
            display: "block", width: "100%", padding: "1rem 1rem",
            borderRadius: "0.6rem", textAlign: "center", fontWeight: 700,
            fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase",
            textDecoration: "none", transition: "opacity 0.2s, transform 0.2s",
            background: accent, color: "#fff", fontFamily: FONT,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.82";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          {data.ctaLabel}
        </a>
      </div>
    </div>
  );
}



function TierCard({ data }: { data: SponsorTierData }) {
  const headerBg = data.headerBg ?? "#1a1a1a";
  const accent = data.accentColor ?? "#e30613";

  return (
    <div
      style={{
        flex: "1 1 0", minWidth: "220px", borderRadius: "1.25rem", overflow: "hidden",
        border: data.featured ? `1.5px solid ${accent}` : "1px solid rgba(255,255,255,0.08)",
        background: "#181818", display: "flex", flexDirection: "column",
        fontFamily: FONT,
      }}
    >
      {/* Header */}
      <div style={{ background: headerBg, padding: "1.75rem 2rem", textAlign: "center" }}>
        <p style={{
          color: "#fff", fontSize: "1.1rem", fontWeight: 800,
          letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.4rem",
          fontFamily: FONT,
        }}>
          {data.tier}
        </p>
        <p style={{ color: "#f0e6c8", fontSize: "0.95rem", fontWeight: 600, fontFamily: FONT }}>
          {data.price}
        </p>
      </div>

      {/* Features */}
      <div style={{ padding: "2rem", flex: 1 }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
          {data.features.map((f, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <CheckIcon color={accent} />
              <span style={{ color: "#ccc", fontSize: "0.875rem", lineHeight: 1.7, fontFamily: FONT, fontWeight: 400 }}>
                {f.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div style={{ padding: "0 2rem 2rem" }}>
        <a
          href={data.ctaHref ?? "#"}
          style={{
            display: "block", width: "100%", padding: "0.85rem 1rem",
            borderRadius: "0.6rem", textAlign: "center", fontWeight: 700,
            fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase",
            textDecoration: "none", transition: "opacity 0.2s, transform 0.2s",
            background: "transparent", color: accent, border: `1.5px solid ${accent}`,
            fontFamily: FONT,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          {data.ctaLabel}
        </a>
      </div>
    </div>
  );
}



interface SponsorTiersProps {
  tiers?: SponsorTierData[];
}

export default function SponsorTiers({ tiers = DEFAULT_TIERS }: SponsorTiersProps) {
  const wideTiers = tiers.filter((t) => t.wide);
  const regularTiers = tiers.filter((t) => !t.wide);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%", fontFamily: FONT }}>
      {wideTiers.map((tier, i) => (
        <WideTierCard key={i} data={tier} />
      ))}
      {regularTiers.length > 0 && (
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "stretch" }}>
          {regularTiers.map((tier, i) => (
            <TierCard key={i} data={tier} />
          ))}
        </div>
      )}
    </div>
  );
}
