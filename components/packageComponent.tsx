import React from "react";

interface PackageComponentProps {
  packageName: string;
  packageDescription: string;
  background: string;
  packageDetails: string[];
}

const PackageComponent: React.FC<PackageComponentProps> = ({
  packageName,
  packageDetails,
  packageDescription,
}) => {
  return (
    <div className="relative h-[85vh] p-2 pb-16 rounded-xl  text-gray-900 shadow-md">
      
      <div className="relative bg-white bg-opacity-85 flex flex-col justify-between p-4 rounded-xl h-full">
        <div className="h-[15%] rounded-lg">
          <h2 className="text-3xl sm:text-4xl text-center text-[#928c6b] font-bold mb-2">
            {packageName}
          </h2>
        </div>
        <div className="h-[20%] rounded-lg my-3">
          <h3 className="text-lg sm:text-xl text-center text-black font-semibold mb-2">
            {packageDescription}
          </h3>
        </div>
        <ul className="list-disc text-base sm:text-lg   text-black font-medium list-inside h-[50%]">
          {packageDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      <button
        style={{ width: "calc(100% - 32px)" }}
        className="bg-[#928c6b] text-black w-full  py-2 m-auto rounded-lg absolute bottom-3"
      >
        Get Started
      </button>
      </div>
    </div>
  );
};

export default PackageComponent;
