import { useLanguage } from "@/context/LanguageContext";
import React from "react";

interface Package {
  details: { english: string; arabic: string }[] | undefined;
  img: string;
  title:
    | {
        english: string;
        arabic: string;
      }
    | undefined;
  description: string;
  icon: string;
}

interface DietPlanProps {
  packagee: Package | null;
}

const DietPlanSection: React.FC<DietPlanProps> = ({ packagee }) => {
  const { language } = useLanguage();

  return (
    <section className="flex flex-col md:flex-row bg-gray-100 h-auto py-[1vh] md:px-0 px-[2vw] md:py-[7vh] rounded-lg">
      {/* Left Side - Image Card */}
      <div className="md:w-1/2 bg-white rounded-lg  overflow-hidden shadow-md relative group flex-shrink-0">
        {/* Image Container with Zoom Effect */}
        <div className="overflow-hidden h-full">
          <img
            src={packagee?.img}
            alt="Diet Plan"
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            style={{ maxHeight: "100%", height: "100%" }} // Constrain image height
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col h-full items-center justify-center p-[20%] text-white text-center">
          <img src={packagee?.icon} className="md:h-auto h-[50px]" />
          <h2 className="text-lg md:text-2xl font-bold mt-2">
            {language === "arabic"
              ? "نظام " + packagee?.title?.arabic
              : packagee?.title?.english + " Plan"}
          </h2>
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="md:w-1/2 h-full pl-6 md:px-6 flex flex-col justify-start">
        <ul className="list-disc md:pl-5 h-full mt-4 mb-10 md:m-0 text-black">
          {packagee?.details?.map((item, index) => (
            <li
              className={`md:text-xl lg:text-2xl mb-4 ${
                language === "arabic" ? "rtl text-right list-item-arabic" : ""
              }`}
              key={index}
            >
              {language === "arabic" ? item.arabic : item.english}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DietPlanSection;