import React from "react";
import PackageComponent from "./packageComponent";

interface Offer {
  id: string;
  title: string;
  description: Array<{
    offer: string;
    discount: {
      before: number;
      after: number;
    };
  }>;
}

interface LimitedOffersSectionProps {
  offers: Offer[];
}

const LimitedOffersSection: React.FC<LimitedOffersSectionProps> = ({
  offers,
}) => {
  return (
    <div
      className="w-full bg-black text-white pt-9 sm:p-7"
      style={{ background: "url(/aboutbg.jpeg)", backgroundSize: "cover" }}
    >
      <h2 className="xl:text-4xl w-[70%] lg:w-[50%] m-auto lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center font-bold mb-6 text-[#928c6b]">
        DON&apos;T MISS OUT OUR LIMITED-TIME OFFERS!
      </h2>
      <div className="packages w-[95%] max-w-[400px] sm:w-[70%] md:w-[90%] md:max-w-screen-md xl:w-[70%] lg:max-w-screen-lg lg:w-[80%] grid grid-cols-1 md:grid-cols-2 h-auto gap-4 m-auto">
        {offers.map((offer) => (
          <PackageComponent
            key={offer.id}
            id={offer.id}
            packageName={offer.title}
            packageDescription={offer.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LimitedOffersSection;
