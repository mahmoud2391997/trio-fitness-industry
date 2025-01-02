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
    <div className="relative p-4 pb-16 rounded-xl shadow-md">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url(${background})`,
          opacity: 0.7,
        }}
      ></div>
      <div className="relative bg-black bg-opacity-65 flex flex-col justify-start p-4 rounded-xl h-full">
        <div className="h-auto rounded-lg">
          <h4 className="text-sm text-center mb-2">Package</h4>
          <h2 className="text-4xl text-center text-white font-bold mb-2">
            {packageName}
          </h2>
        </div>
        <div className="h-auto rounded-lg my-3">
          <h4 className="text-sm text-center mb-2">Description</h4>
          <h3 className="text-lg text-center text-white font-medium mb-2">
            {packageDescription}
          </h3>
        </div>
        <h4 className="text-sm text-center font-bold mb-2">Features</h4>
        <ul className="list-disc text-lg text-white list-inside">
          {packageDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <button
        style={{ width: "calc(100% - 32px)" }}
        className="bg-[#928c6b] text-white w-full py-2 m-auto rounded-lg absolute bottom-3"
      >
        Get Started
      </button>
    </div>
  );
};

export default PackageComponent;
