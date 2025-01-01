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
  background,
}) => {
  return (
    <div
      className="p-4 bg-transparent pb-16 rounded-xl shadow-md relative "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "0.7",
      }}
    >
      <div className="bg-black flex flex-col justify-start opacity-85 p-4 rounded-xl h-full ">
        <div className="h-auto rounded-lg ">
          <h4 className="text-sm text-center  mb-2">Package</h4>
          <h2 className="text-4xl text-center text-white font-bold mb-2">
            {packageName}
          </h2>
        </div>
        <div className="h-auto rounded-lg my-3">
          <h4 className="text-sm text-center   mb-2">Description</h4>
          <h3 className="text-base text-center text-white font-medium mb-2">
            {packageDescription}
          </h3>
        </div>
        <h4 className="text-sm text-center  font-bold mb-2">Features</h4>
        <ul className="list-disc text-white list-inside">
          {packageDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <button
        style={{ width: "calc(100% - 32px)" }}
        className="bg-[#928c6b] text-white w-full py-2 m-auto rounded-lg  absolute  bottom-3 "
      >
        Get Started
      </button>
    </div>
  );
};

export default PackageComponent;
