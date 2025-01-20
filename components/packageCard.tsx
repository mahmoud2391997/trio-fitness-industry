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
      className="relative  h-auto flex flex-col justify-start  bg-white shadow-2xl border-2  border-black rounded-2xl w-full  "
    >
      <div className="flex justify-center items-center max-h-[200px]  bg-black  w-full  rounded-b-full p-6 "style={{background:"url(/aboutbg.jpeg", backgroundSize:"cover"}}>
        <h6 className=" text-[#928c6b] text-4xl text-center font-semibold  ">
          {packageName} Plan
        </h6>
      </div>

      <div className="p-4 mt-[5%]">
      <ul className=" text-base sm:text-lg text-black font-medium list-inside h-auto">
  {packageDetails.map((detail, index) => (
    <li key={index} className="pl-5 my-2 relative">
      <span className="absolute left-0 ">•</span>
      <p className="inline w-auto ">{detail}</p>
      <hr />
    </li>
  ))}
</ul>
      </div>
      <div className="w-full justify-center my-4 flex items-center">

      <button className="w-[60%] mx-auto bg-[#928c6b] text-white h-10">SUBSCRIBE</button>
</div>
    </div>
  );
};

export default PackageCard;
