import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import React from "react";

interface PackageComponentProps {
  id: string;
  packageName: {
    english: string;
    arabic: string;
  };
  packageDescription: {
    offer: {
      english: string;
      arabic: string;
    };
    discount: {
      after: {
        english: string;
        arabic: string;
      };
      before: {
        english: string;
        arabic: string;
      };
    };
  }[];
}

const PackageComponent: React.FC<PackageComponentProps> = ({
  id,
  packageName,
  packageDescription,
}) => {
  const { language } = useLanguage();
  return (
    <div className="relative  h-auto pb-[5%] my-3 flex flex-col  justify-around items-center bg-white  rounded-xl  border border-gray-300  shadow-md">
      <div
        className="h-[160px] px-3 py-2  rounded-b-full flex justify-center items-center w-full rounded-t-[50rem]"
        style={{ background: "url(/aboutbg.jpeg)", backgroundSize: "cover" }}
      >
        <h2 className="text-3xl w-[80%] xl:text-4xl text-center text-[#928c6b] font-bold mb-2">
          {language === "arabic"
            ? "نظام " + packageName.arabic
            : packageName.english + " Plan"}
        </h2>
      </div>
    
      <div className="h-auto w-[85%] flex flex-col justify-between m-2">
        {packageDescription.map((packagee, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center my-5 p-5 rounded-lg w-full"
              style={{
                background: "url(/aboutbg.jpeg)",
                backgroundSize: "cover",
              }}
            >
              <h3 className="text-sm bg-white w-auto rounded-lg  mt-2 lg:text-lg p-2 sm:p-4 list-disc sm:text-base text-center m-auto  relative text-[#928c6b] font-semibold ">
                <div className="text-xl sm:text-3xl ">
                  {" "}
                  {language === "arabic"
                    ? packagee.offer.arabic
                    : packagee.offer.english}
                </div>
                <div className="text-xl sm:text-3xl mt-2">
                  {language === "arabic"
                    ? packagee.discount.after.arabic + " جنيه "
                    : packagee.discount.after.english + " EGP"}
                  <span className="text-sm">
                    {" "}
                    {language === "arabic" ? " بدلا من " : " INSTEAD OF "}
                  </span>
                  <span className="text-xl sm:text-3xl  line-through">
                    {language === "arabic"
                      ? packagee.discount.before.arabic + " جنيه "
                      : packagee.discount.before.english + " EGP"}{" "}
                  </span>
                </div>
              </h3>
            <div className="mt-4  flex flex-col">
              <Link href={`/payment/${id}?offerIndex=${index}&details=true`}>
          <button className="bg-[#928c6b] text-white py-3 font-bold w-56 rounded-lg text-center mt-2 text-xl mb-4 m-auto h-16">
            {language === "arabic" ? "عرض التفاصيل" : "VIEW DETAILS"}
          </button>
        </Link>
              <Link href={`/payment/${id}?offerIndex=${index}`}>
                <button className="bg-[#928c6b] text-white py-3 font-bold w-56 text-center  text-xl  rounded-lg m-auto h-16">
                  {language === "arabic" ? "اشترك الان" : "SUBSCRIBE NOW"}
                </button>
              </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackageComponent;
