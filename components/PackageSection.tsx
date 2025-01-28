import React from "react";
import arabicContent from "../content/arabic"; // Import arabic content
import englishContent from "../content/english";
import PackageCard from "./packageCard";
import { useLanguage } from "@/context/LanguageContext";
interface Package {
  _id: string;
  title: {
    english: string;
    arabic: string;
  };
  price: {
    english: string;
    arabic: string;
  };
  details: {
    english: string;
    arabic: string;
  }[];
  offers?: {
    offer: {
      english: string;
      arabic: string;
    };
    discount: {
      before: {
        english: string;
        arabic: string;
      };
      after: {
        english: string;
        arabic: string;
      };
    };
  }[];
}
interface PackageSectionProps {
  packages: Package[];
}

const PackageSection: React.FC<PackageSectionProps> = ({ packages }) => {
  console.log(packages);
  const { language } = useLanguage();

  const content = language === "arabic" ? arabicContent : englishContent;
  return (
    <section
      className="package-section bg-white text-[#928c6b] pt-16 h-auto"
      style={{ background: "url(/aboutbg.jpeg)", backgroundSize: "cover" }}
    >
      <h2 className="xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl  text-center w-[60%] m-auto font-bold mb-14 text-[#928c6b]">
        {content.packagesHeader}
      </h2>
      <div className="packages w-[95%] grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  h-auto gap-3 m-auto">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg._id}
            id={pkg._id}
            price={pkg.price}
            packageName={pkg.title}
            packageDetails={pkg.details}
          />
        ))}
      </div>
    </section>
  );
};
export default PackageSection;
