import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import React from "react";

interface PackageComponentProps {
  id: string;
  packageName: {
    english: string;
    arabic: string;
  };
  price: {
    english: string;
    arabic: string;
  };
  packageDetails: {
    english: string;
    arabic: string;
  }[];
}

const PackageCard: React.FC<PackageComponentProps> = ({
  id,
  packageName,
  price,
  packageDetails,
}) => {
  const { language } = useLanguage();
  return (
    <div className="relative  h-auto flex flex-col justify-start  bg-white shadow-2xl border-2  border-black rounded-2xl w-full  ">
      <div
        className="flex justify-center items-center h-[270px]  bg-black  w-full rounded-t-[35rem] rounded-b-full pt-1 pb-5 px-6 "
        style={{ background: "url(/aboutbg.jpeg)", backgroundSize: "cover" }}
      >
        <h6 className=" text-[#928c6b] text-3xl sm:text-4xl text-center font-semibold  ">
          {language === "arabic"
            ? "نظام " + packageName.arabic
            : (
              <>
                {packageName.english}
                <br />
                {"Plan"}
              </>
            )}
        </h6>
      </div>
      <h3
        className=" rounded-r-full rounded-l-full w-[95%]  mt-8 text-2xl xl:text-3xl  py-2 sm:py-4 list-disc  text-center m-auto  relative text-[#928c6b] font-semibold mb-2"
        style={{ background: "url(/aboutbg.jpeg)", backgroundSize: "cover" }}
      >
        {language === "arabic" ? price.arabic : price.english}
      </h3>
      <div className="w-full justify-center my-[10%] flex items-center">
        <Link
          className="w-56 mx-auto bg-[#928c6b] text-black flex justify-center text-3xl items-center font-bold text-center py-3 h-auto py-auto cursor-pointer"
          href={`/payment/${id}`}
        >
          <button>
            {language === "arabic" ? "اشترك الان" : "SUBSCRIBE NOW"}
          </button>
        </Link>
      </div>
      <div className="p-2">
        <ul className={`text-xl sm:text-2xl text-black font-medium list-inside h-auto ${language === "arabic" ? "rtl" : ""}`}>
          {packageDetails.map((detail, index) => (
            <li key={index} className="pl-5 my-2 relative">
              <span className={"absolute " + (language === "arabic" ? "right-1" : "left-1")}>•</span>
              <p className={`inline-block px-5 w-full ${language === "arabic" ? "text-right " : ""}`}>
          {language === "arabic" ? detail.arabic : detail.english}
              </p>
              <hr className="bg-black h-[2px]"/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackageCard;
