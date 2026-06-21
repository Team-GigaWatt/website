import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollTextSection, {
  type TextBlock,
} from "@/components/ScrollTextSection";
import ReviewsCarousel, { type Review } from "@/components/ReviewCarousel";
import Footer from "@/components/Footer";


const introBlocks: TextBlock[] = [
  {
    id: "identity",
    index: "01",
    eyebrow: "WHO ARE WE",
    heading: "WE ARE TEAM GIGAWATT",
    body: [
      "Team GigaWatt is a Formula Student team representing BITS Pilani, Goa Campus that participates in India's premier engineering design competition. Established by a group of passionate engineering students with a vision to excel in motorsports ",
      
    ],
    aside: "Team GigaWatt designs and fabricates electric formula-style race cars, showcasing innovation and technical excellence."
    
  },
  {
    id: "mission",
    index: "02",
    eyebrow: "OUR MISSION",
    heading: "ONE TEAM, ONE DREAM",
    body: [
      "Our mission is to develop cutting-edge electric vehicles that compete at both national and international levels while fostering a culture of engineering excellence and teamwork. ",
    ],
    aside: "We aim to push the boundaries of electric vehicle technology.",
  }
  
];

const storyBlocks: TextBlock[] = [
  {
    id: "storypart1",
    index: "01",
    eyebrow: "THE SPARK",
    heading: "THE BEGINNING",
    body: [
      "Team GigaWatt emerged from BITS Goa Racing in 2022, when we made the strategic shift from combustion to electric Formula Student vehicles. Founded by a group of passionate engineering students at BITS Pilani, Goa Campus",
    ],
    aside: "The team is driven by a vision to design and build cutting-edge electric formula-style race cars.",
  },
  {
    id: "storypart2",
    index: "02",
    eyebrow: "THE BREAKTHROUGH",
    heading: "THE DEVELOPMENT",
    body:
      "Starting with a small but dedicated team, we embarked on an ambitious journey to master the complexities of electric vehicle engineering. After rigorous research, design iterations, and hands-on development, we built our first electric race car in 2024.",
    aside: "This marked a significant milestone for our team, positioning us as a competitive force in the Formula Student category.",
  },
  {
    id: "storypart3",
    index: "03",
    eyebrow: "THE JOURNEY",
    heading: "THE ACCOMPLISHMENT",
    body:
      "Since then, Team GigaWatt has grown to include over 80 students from various engineering disciplines, united by a common goal of pushing the boundaries of electric mobility. We compete in Formula Student Electric competitions",
    aside: "we demonstrate our technical expertise and innovative spirit alongside teams from top universities across the globe.",
  },
];


const formulaBlocks: TextBlock[] = [
  {
    id: "formula1",
    index: "01",
    eyebrow: "FORMULA STUDENT",
    heading: "WHAT IS FORMULA STUDENT?",
    body: [
      "Formula Student is a prestigious international engineering design competition for undergraduate and graduate students. Participating teams conceive, design, fabricate, and compete with single-seat, formula-style race cars. Evaluation goes beyond pure on-track performance. Judges assess the car's design ingenuity, technical innovation, and cost-effectiveness, fostering a holistic engineering experience.",
    ],
    aside: "This esteemed competition provides a valuable platform for students to develop practical engineering skills, cultivate teamwork, and showcase their design capabilities to industry professionals.",
  },
  
];

const reviewsData: Review[] = [
  {
    id: 1,
    author: "Krishna Saraf ",
    title: "Team Captain (2025-2026)",
    company: "Team GigaWatt",
    body: "Being part of Team GigaWatt has been a transformative journey. From conceptualizing designs to the thrill of race day, every moment taught me invaluable lessons in engineering and teamwork. The experience shaped my career path and gave me lifelong friends.",
  },
  {
    id: 2,
    author: "Himanshu Garg",
    title: "Team Vice Captain (2025-2026)",
    company: "Team GigaWatt",
    body: "Team GigaWatt gave me practical exposure that no classroom could provide. I led the Electronics team for two years, developing the battery management system and motor controllers. This hands-on experience was instrumental in landing my dream job in the EV industry.",
  },
  {
    id: 3,
    author: "Ansh Bargale",
    title: "Team Manager (2025-2026)",
    company: "Team GigaWatt",
    body: "From failures to victories, Team GigaWatt taught me resilience. The countless hours spent in the workshop perfecting our chassis design weren't just about building a car-they were about building character and problem-solving abilities that I carry with me every day.",
  },
];

export default function HomePage() {
  return (
    <>
    <main className="bg-white text-zinc-900 selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <ScrollTextSection
        id="introduction"
        sectionEyebrow="// INTRODUCTION"
        sectionTitle="TEAM GIGAWATT"
        blocks={introBlocks}
        background="dark"
        ariaLabel="Team Gigawatt about"
      />
      <ScrollTextSection
        id="story"
        sectionEyebrow="// HOW WE BEGAN"
        sectionTitle="OUR STORY"
        blocks={storyBlocks}
        background="surface"
        ariaLabel="Team Gigawatt story"
      />
      <ScrollTextSection
        id="formula"
        sectionEyebrow="// FORMULA STUDENT"
        sectionTitle="FORMULA STUDENT"
        blocks={formulaBlocks}
        background="dark"
        ariaLabel="Formula Student information"
      />
      <ReviewsCarousel reviews={reviewsData} />
    </main>
    <Footer />
    </>
  );
}
