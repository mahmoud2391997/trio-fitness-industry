import React from "react";

interface PackageComponentProps {
  packageName: string;
  price: string;
  packageDetails: string[];
}

const PackageCard: React.FC<PackageComponentProps> = ({
  packageName,
  price,
  packageDetails,
}) => {
  return (
    <div
      className="relative  h-auto flex flex-col justify-start  bg-white shadow-2xl border-2  border-black rounded-2xl w-full  "
    >
      <div className="flex justify-center items-center h-[200px]  bg-black  w-full  rounded-b-full pt-1 pb-5 px-6 "style={{background:"url(/aboutbg.jpeg)", backgroundSize:"cover"}}>
        <h6 className=" text-[#928c6b] text-2xl sm:text-3xl text-center font-semibold  ">
          {packageName}<br/> Plan
        </h6>
      </div>
      <h3  className=" rounded-r-full rounded-l-full w-[90%]  mt-8 text-lg sm:text-2xl  py-2 sm:py-4 list-disc  text-center m-auto  relative text-[#928c6b] font-semibold mb-2" style={{background:"url(/aboutbg.jpeg)", backgroundSize:"cover"}}>
          
           {price}
          
          </h3>
      <div className="w-full justify-center my-[10%] flex items-center">

      <button className="w-[60%] mx-auto bg-[#928c6b] text-black font-bold h-10">SUBSCRIBE</button>
</div>
      <div className="p-2">
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
    </div>
  );
};

export default PackageCard;
