import React from "react";

interface Package {
 details :   { english: string; arabic: string; }[]  | undefined
img:string
title:{
 english : string ;
 arabic : string ;
} | undefined
description:string;
icon:string;
}
  
interface DietPlanProps {
  packagee: Package |null;
} 

const DietPlanSection: React.FC<DietPlanProps> = ({ packagee }) => {
    console.log(packagee);
    
  return (
    <section className="flex flex-col md:flex-row bg-gray-100 p-10 rounded-lg shadow-lg">
      {/* Left Side - Image Card */}
      <div className="md:w-1/2 bg-white rounded-lg overflow-hidden shadow-md relative group">
  {/* Image Container with Zoom Effect */}
  <div className="overflow-hidden h-full">
    <img
      src={packagee?.img}
      alt="Diet Plan"
      className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
  </div>

  {/* Overlay Content */}
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col h-full items-center justify-center  p-[20%] text-white text-center ">
   <img src={packagee?.icon} />
    <h2 className="text-2xl font-bold mt-2">{packagee?.title?.english}</h2>
  
  </div>
</div>

      <div className="md:w-1/2 p-6">
<p>{packagee?.description}</p>
      {/* Right Side - Text Content */}
        
        <ul className="list-disc mt-4 pl-5 text-gray-700">
        {
            packagee?.details?.map((item,index)=><li key={index}>{item.english}</li>)
        }  
         
        </ul>
      </div>
    </section>
  );
};

export default DietPlanSection;
