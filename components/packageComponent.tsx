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
    <div className="relative p-4 pb-16 rounded-xl h-full text-gray-900 shadow-md">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url(${background})`,
          opacity: 0.7,
        }}
      ></div>
      <div className="relative bg-white bg-opacity-70 flex flex-col justify-start p-4 rounded-xl h-full">
        <div className="h-1/6 rounded-lg">
          <h4 className="text-xl text-center font-bold mb-2">Package</h4>
          <h2 className="text-3xl text-center text-black font-bold mb-2">
            {packageName}
          </h2>
        </div>
        <div className="h-2/6 rounded-lg my-3">
          <h4 className="text-xl text-center font-bold mb-2">Description</h4>
          <h3 className="text-xl text-center text-black font-medium mb-2">
            {packageDescription}
          </h3>
        </div>
        <h4 className="text-xl text-center font-bold mb-2">Features</h4>
        <ul className="list-disc text-lg text-black list-inside h-1/2">
          {packageDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <button
        style={{ width: "calc(100% - 32px)" }}
        className="bg-[#928c6b] text-black w-full py-2 m-auto rounded-lg absolute bottom-3"
      >
        Get Started
      </button>
    </div>
  );
};

export default PackageComponent;
