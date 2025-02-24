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
}) => {
  const { language } = useLanguage();
  return (
    <div className="relative  h-auto flex flex-col justify-start  bg-black shadow-2xl border-2  border-black rounded-2xl w-full  ">
      <div className="flex justify-center items-center h-[220px]  bg-white  border border-[#928c6b] w-full rounded-t-[35rem] rounded-b-full pt-1 pb-5 px-6 ">
        <h6 className=" text-[#928c6b]  text-3xl sm:text-4xl text-center font-semibold  ">
          {language === "arabic" ? (
            "نظام " + packageName.arabic
          ) : (
            <>
              {packageName.english}
              <br />
              {"Plan"}
            </>
          )}
        </h6>
      </div>
      <h3 className=" rounded-r-full rounded-l-full w-[95%] bg-white border border-[#928c6b] mt-8 text-xl xl:text-4xl  py-2 sm:py-4 list-disc   text-center m-auto  relative text-[#928c6b] font-semibold mb-2">
        {language === "arabic" ? price.arabic : price.english}
      </h3>
      <div className="w-64 m-auto justify-center my-[10%] bg-white py-3  flex rounded-lg flex-col items-center">
        <Link href={`/payment/${id}?details=true`}>
          <button className="bg-[#928c6b] text-white py-3 font-bold w-56 rounded-lg text-center mt-2 text-xl mb-4 m-auto h-16">
            {language === "arabic" ? "عرض التفاصيل" : "VIEW DETAILS"}
          </button>
        </Link>
        <Link
          className="w-56 mx-auto bg-[#928c6b] text-white flex justify-center text-3xl rounded-lg items-center font-bold text-center py-3 h-auto py-auto cursor-pointer"
          href={`/payment/${id}`}
        >
          <button>
            {language === "arabic" ? "اشترك الان" : "SUBSCRIBE NOW"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
