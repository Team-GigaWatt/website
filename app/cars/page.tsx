import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarDetails from "@/components/CarDetails";
import Hero from "@/components/Hero";

export default function CarsPage() {
  return (
    <>
      <main className="bg-[#e5e5e5] text-zinc-900 selection:bg-[#e30613] selection:text-white">
        <Navbar />
        
        <Hero 
          title={<>Our<br /><span className="text-[#e30613]">Cars</span></>}
          subtitle="Explore the engineering marvels crafted by Team Gigawatt. Precision, power, and electric innovation."
          marqueeWords={["VEHICLES", "MACHINES", "CARS"]}
        />

        

        <CarDetails />
      </main>
      <Footer />
    </>
  );
}
