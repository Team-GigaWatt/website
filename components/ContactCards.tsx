import React from "react";
import { IconType } from "react-icons";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <section className="w-full mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">Contact Information</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        <Card
          title="Location"
          subtitle={"Team GigaWatt Workshop\nBITS Pilani, K.K. Birla Goa Campus\nNH-17B, Zuarinagar, Goa - 403726"}
          Icon={FiMapPin}
        />
        <Card title="Email" subtitle="gigawattbitsgoa@gmail.com" Icon={FiMail} />
        <Card
          title="Phone Number"
          subtitle={"+91 70808 07635\n+91 93225 13503"}
          Icon={FiPhone}
        />
      </div>
    </section>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
}

const Card = ({ title, subtitle, Icon }: CardType) => {
  return (
    <article className="min-h-[220px] rounded-2xl border border-slate-200 bg-white p-6 text-center flex flex-col items-center justify-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e30613]/10">
        <Icon className="text-2xl text-[#e30613]" />
        </div>
      <h3 className="mt-4 font-semibold text-xl text-zinc-900">
        {title}
      </h3>
      <p className="mt-2 whitespace-pre-line leading-relaxed text-sm text-zinc-600">
        {subtitle}
      </p>
    </article>
  );
};

export default HoverDevCards;