import React from "react";

import PackageCard from "./packageCard";
interface Package {
  _id: string;
  title: string;
  price: string;
  details: string[];
  offers?: {
    offer: string;
    discount: {
      before: string;
      after: string;
    };
  }[];
}
interface PackageSectionProps {
  packages: Package[];
}

const PackageSection: React.FC<PackageSectionProps> = ({ packages }) => {
  console.log(packages);
  
  return (
    <section
      className="package-section bg-white text-[#928c6b] pt-16  sm:p-3 h-auto"
      style={{ background: "url(/aboutbg.jpeg)", backgroundSize: "cover" }}
    >
      <h2 className="xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl  text-center w-[60%] m-auto font-bold mb-10 text-[#928c6b]">
        SELECT THE PACKAGE THAT BEST FITS YOUR NEEDS
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
