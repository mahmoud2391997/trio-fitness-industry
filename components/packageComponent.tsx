import Link from "next/link";
import React from "react";

interface PackageComponentProps {
  id: string;
  packageName: string;
  packageDescription: {
    offer: string;
    discount: {
      after: number;
      before: number;
    };
  }[];
}

const PackageComponent: React.FC<PackageComponentProps> = ({
  id,
  packageName,
  packageDescription,
}) => {
  console.log(id);

  return (
    <div className="relative  h-auto pb-[5%] flex flex-col justify-around items-center bg-white  rounded-xl  border border-black shadow-md">
      <div
        className="h-[20%] px-3  rounded-b-full flex justify-center items-center w-full "
        style={{ background: "url(/aboutbg.jpeg)", backgroundSize: "cover" }}
      >
        <h2 className="text-lg sm:text-2xl xl:text-3xl text-center text-[#928c6b] font-bold mb-2">
          {packageName} Plan Offers
        </h2>
      </div>
      <div className="h-[80%] w-auto flex flex-col justify-between m-2">
        {packageDescription.map((packagee, index) => {
          return (
            <div className="flex flex-col justify-center items-center w-full">
              <h3
                key={index}
                className="text-sm rounded-lg  my-2 lg:text-lg p-2 sm:p-4 list-disc sm:text-base text-center m-auto w-full relative text-[#928c6b] font-semibold mb-2"
                style={{
                  background: "url(/aboutbg.jpeg)",
                  backgroundSize: "cover",
                }}
              >
                <div className="text-lg sm:text-2xl ">{packagee.offer}</div>
                <div className="text-lg sm:text-2xl ">
                  {packagee.discount.after} EGP{" "}
                  <span className="text-sm">INSTEAD OF </span>
                  <span className="text-lg sm:text-2xl  line-through">
                    {packagee.discount.before}
                  </span>{" "}
                  EGP
                </div>
              </h3>
              <Link href={`/payment/${id}?offerIndex=${index}`}>
                <button className="bg-[#928c6b] text-black font-bold w-28 text-center lg:w-[140px] my-3 py-1 m-auto h-10">
                  SUBSCRIBE
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackageComponent;
