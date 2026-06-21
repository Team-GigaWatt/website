import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Team Gigawatt",
  description: "Meet the brilliant minds behind Team Gigawatt.",
};

const teamMembers = [
  { name: "Devendra Kulkarni", title: "Team Principal", handle: "Devendra Kulkarni", status: "Team Principal", image: "/team/principal.jpeg", contactLink: "https://www.linkedin.com/in/-devendra-kulkarni-/" },
  { name: "Mehul Jotshi", title: "Mechanical Design Head& Chasis Lead", handle: "Mehul Jotshi", status: "Chasis Lead", image: "/team/mehul.jpg", contactLink: "https://www.linkedin.com/in/mehul-j-a44b00366/" },
  { name: "Shaanvi Kokra", title: "Statics Head& Battery-Powertrain Co-Lead", handle: "Shaanvi Kokra", status: "Statics Head", image: "/team/shaanvi.jpg", contactLink: "https://www.linkedin.com/in/shaanvi-kokra-1ab42232b/" },
  { name: "Shrivatsav Naidu", title: "Battery-Powertrain Co-Lead", handle: "Shrivatsav Naidu", status: "Battery-Powertrain Co-Lead", image: "/team/shrivatsav.jpg", contactLink: "https://www.linkedin.com/in/shrivatsav-naidu-2320802b8/" },
  { name: "Kanishk Malhotra", title: "Electronics Lead", handle: "Kanishk Malhotra", status: "Electronics Lead", image: "/team/kanishk.jpg", contactLink: "https://www.linkedin.com/in/kanishk-malhotra0803/" },
  { name: "Samyagya Goel", title: "Vehicle Dynamics Co-Lead", handle: "Samyagya Goel", status: "Vehicle Dynamics Co-Lead", image: "/team/samyagya.jpg", contactLink: "https://www.linkedin.com/in/samyagya-goel/" },
  { name: "Abhas Patel", title: "Vehicle Dynamics Co-Lead", handle: "Abhas Patel", status: "Vehicle Dynamics Co-Lead", image: "/team/abhas.jpg", contactLink: "https://www.linkedin.com/in/abhas-patel-66ba40320/" },
  
];

const coordinators: typeof teamMembers = [
  { name: "Ansh Bargale", title: "Team Manager", handle: "Ansh Bargale", status: "Team Manager", image: "/team/coordinators/ansh.jpeg", contactLink: "https://www.linkedin.com/in/ansh-bargale-905527271?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Himanshu Garg", title: "Vice Captain", handle: "Himanshu Garg", status: "Vice Captain", image: "/team/coordinators/himanshu.jpeg", contactLink: "https://www.linkedin.com/in/whyhimanshugarg?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Krishna Saraf", title: "Captain", handle: "Krishna Saraf", status: "Captain", image: "/team/coordinators/krishna.jpeg", contactLink: "https://www.linkedin.com/in/krishna-s-a89165235?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Arush Chopra", title: "Sponsorship and Outreach Lead", handle: "Arush Chopra", status: "Sponsorship and Outreach Lead", image: "/team/coordinators/arush.jpeg", contactLink: "https://www.linkedin.com/in/arush-chopra-bits-goa?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Kshayik Champawat", title: "Vehicle Dynamics Co-Lead", handle: "Kshayik Champawat", status: "Vehicle Dynamics Co-Lead", image: "/team/coordinators/ks.jpeg", contactLink: "https://www.linkedin.com/in/kshayik-champawat-2924762b3?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Arunav Satyaraj", title: "Powertrain Lead", handle: "Arunav Satyaraj", status: "Powertrain Lead", image: "/team/coordinators/arunav.jpeg", contactLink: "https://www.linkedin.com/in/arunav-satyaraj-6ab44a296?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Syed Aatif", title: "Battery Lead", handle: "Syed Aatif", status: "Battery Lead", image: "/team/coordinators/syed.jpeg", contactLink: "https://www.linkedin.com/in/syed-aatif-028b8b311?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Arnav Sethi", title: "Vehicle Design Co-Lead", handle: "Arnav Sethi", status: "Vehicle Design Co-Lead", image: "/team/coordinators/arnav.jpeg", contactLink: "https://www.linkedin.com/in/arnav?utm_source=share_via&utm_content=profile&utm_medium=member_android" },

];

export default function TeamPage() {
  return (
    <>
      <main className="bg-[#e5e5e5] text-zinc-900 selection:bg-[#e30613] selection:text-white relative">
        <Navbar />
        
        {/* Hero Section */}
        <Hero 
          title={<>The<br /><span className="text-[#e30613]">Squad</span></>}
          subtitle="Meet the brilliant engineering minds and passionate students driving the electric revolution at BITS Pilani, Goa Campus."
          marqueeWords={["SQUAD", "TEAM", "MEMBERS"]}
        />

        {/* Dynamic Component Cards Grid */}
        <div className="relative z-20 bg-[#111111] pt-40 border-t-[6px] border-[#e30613] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center w-full overflow-hidden" style={{ paddingBottom: '100px' }}>
          <div className="w-full max-w-[1300px] px-6 md:px-12 flex flex-col items-center">
            <div className="flex flex-col text-center w-full" style={{ marginTop: '50px', marginBottom: '50px' }}>
              {/* <h2 className="text-[#e30613] tracking-[0.4em] text-sm md:text-base font-bold uppercase mb-6">Our Members</h2> */}
              <h3 className="text-5xl md:text-6xl text-white font-black uppercase" style={{ fontFamily: 'var(--font-nutmeg)' }}>
                Driving the future
              </h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 lg:gap-16 w-full">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="w-full max-w-[320px] md:max-w-[350px] lg:max-w-[360px] flex-shrink-0">
                  <ProfileCard
                    name={member.name}
                    title={member.title}
                    handle={member.handle}
                    status={member.status}
                    contactText="Contact Me"
                    contactLink={member.contactLink}
                    // If member.image exists (e.g. "/members/mayank.jpeg"), use it. Otherwise use the placeholder fallback.
                    avatarUrl={(member as any).image || `https://i.pravatar.cc/600?u=${member.handle}`}
                    className="w-full mx-auto"
                    showUserInfo={true}
                    enableTilt={false}
                    enableMobileTilt={false}
                    behindGlowEnabled={false}
                    behindGlowColor="#f8f7f766"
                    innerGradient="linear-gradient(145deg,#1f1f1f 0%,#260002 100%)"
                  />
                </div>
              ))}
            </div>

            {/* Coordinators Section */}
            <div className="w-full border-t border-white/10 mt-20 pt-16">
              <div className="flex flex-col text-center w-full" style={{ marginTop: '50px', marginBottom: '50px' }}>
                <h3 className="text-5xl md:text-6xl text-white font-black uppercase" style={{ fontFamily: 'var(--font-nutmeg)' }}>
                  Coordinators <span className="text-[#e30613]">2025-26</span>
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-12 lg:gap-16 w-full">
                {coordinators.map((member, idx) => (
                  <div key={idx} className="w-full max-w-[320px] md:max-w-[350px] lg:max-w-[360px] flex-shrink-0">
                    <ProfileCard
                      name={member.name}
                      title={member.title}
                      handle={member.handle}
                      status={member.status}
                      contactText="Contact Me"
                      contactLink={member.contactLink}
                      avatarUrl={(member as any).image || `https://i.pravatar.cc/600?u=${member.handle}`}
                      className="w-full mx-auto"
                      showUserInfo={true}
                      enableTilt={false}
                      enableMobileTilt={false}
                      behindGlowEnabled={false}
                      behindGlowColor="#f8f7f766"
                      innerGradient="linear-gradient(145deg,#1f1f1f 0%,#260002 100%)"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
