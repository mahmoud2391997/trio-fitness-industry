import React from "react";

interface PackageComponentProps {
  packageName: string;
  packageDescription: string[];
}

const PackageComponent: React.FC<PackageComponentProps> = ({
  packageName,
  packageDescription,
}) => {
  return (
    <div className="relative  h-auto p-2 pb-16 rounded-xl  border border-white shadow-md">
      
        <div className="h-[35%] rounded-b-full bg-white ">
          <h2 className="text-2xl sm:text-4xl text-center text-[#928c6b] font-bold mb-2">
            {packageName}
          </h2>
        </div>
        <div className="h-[70%] rounded-lg my-3">
          {packageDescription.map((packagee,index)=>{return <h3 key={index} className="text-lg sm:text-2xl text-center text-white font-semibold mb-2">
            {packagee}
          </h3>})}
          
        </div>
       
      <button
        style={{ width: "calc(100% - 32px)" }}
        className="bg-[#928c6b] text-white w-full  py-2 m-auto rounded-lg absolute bottom-3"
      >
        Get Started
      </button>
    </div>
  );
};

export default PackageComponent;
