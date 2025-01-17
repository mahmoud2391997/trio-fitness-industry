import React from "react";

interface PackageComponentProps {
  packageName: string;
  key: number;
  packageDetails: string[];
}

const PackageCard: React.FC<PackageComponentProps> = ({
  key,
  packageName,
  packageDetails,
}) => {
  return (
    <div
      key={key}
      className="relative flex flex-col h-auto justify-start my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full"
    >
      <div className="p-4 h-[100px] mb-1">
        <h6 className="mb-2 text-slate-800 text-4xl text-center  font-semibold">
          {packageName}
        </h6>
      </div>
      <div className="mt-6 flex justify-center items-center">

      <button className="w-[40%] m-auto bg-[#928c6b] text-white h-10">SUBSCRIBE</button>
      </div>
      <div className="p-4 mt-[5%]">
      <ul className=" text-base sm:text-lg text-black font-medium list-inside h-auto">
  {packageDetails.map((detail, index) => (
    <li key={index} className="pl-5 relative">
      <span className="absolute left-0 ">•</span>
      <p className="inline w-auto ">{detail}</p>
      <hr />
    </li>
  ))}
</ul>
      </div>
    </div>
  );
};

export default PackageCard;
