import React from "react";
import PackageComponent from "./packageComponent";
import { useLanguage } from "@/context/LanguageContext";
import arabicContent from "../content/arabic";
import englishContent from "@/content/english";

interface Offer {
  id: string;
  title: {
    english: string;
    arabic: string;
  };
  description: Array<{offer: {
    english: string;
    arabic: string;
  };
  discount: {
    before: 
    {
      english: string;
      arabic: string;
    };
    after: {
      english: string;
      arabic: string;
    }
  }}>;
}
{
  
}
interface LimitedOffersSectionProps {
  offers: Offer[];
}

const LimitedOffersSection: React.FC<LimitedOffersSectionProps> = ({
  offers,
}) => {
  const { language } = useLanguage();

  const content = language === "arabic" ? arabicContent : englishContent;
  return (
    <div id="packages"
      className="w-full bg-black text-white pt-9 sm:p-7"
      style={{ background: "url(/aboutbg.jpeg)", backgroundSize: "cover" }}
    >
      <h2 className="xl:text-5xl w-[70%] lg:w-[50%] m-auto lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center font-bold my-11 text-[#928c6b]">
{content.offersHeader}  
      </h2>
      <div className="packages w-[95%]   grid grid-cols-1 md:grid-cols-2 h-auto gap-4 m-auto">
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
