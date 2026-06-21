import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientGallery from "@/components/ClientGallery";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Team Gigawatt",
  description: "Witness the moments, the speed, and the spirit of Team Gigawatt.",
};

export default function GalleryPage() {
  return (
    <>
      <main className="bg-[#e5e5e5] text-zinc-900 selection:bg-[#e30613] selection:text-white relative">
        <Navbar />
        
        {/* Hero Section */}
        <Hero 
          title={<>Our<br /><span className="text-[#e30613]">Gallery</span></>}
          subtitle="Moments in motion. Witness the speed, spirit, and engineering excellence of Team Gigawatt."
          marqueeWords={["GALLERY", "MOMENTS", "SPEED"]}
        />

        {/* Gallery Content Section */}
        <div className="relative z-20 bg-[#111111] flex flex-col items-center justify-start w-full min-h-[100vh] border-t-[6px] border-[#e30613]" style={{ paddingTop: '2vh' }}>
          <div className="w-full max-w-[1400px] px-6 md:px-12 flex flex-col items-center">
            <ClientGallery />
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
