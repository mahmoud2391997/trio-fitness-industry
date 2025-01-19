import React from "react";

interface PackageComponentProps {
  packageName: string;
  packageDescription: string;
}

const PackageComponent: React.FC<PackageComponentProps> = ({
  packageName,
  packageDescription,
}) => {
  return (
    <div className="relative min-h-[20vh] p-2 pb-16 rounded-xl  border border-white shadow-md">
      
        <div className="h-[35%] rounded-lg bg-white">
          <h2 className="text-3xl sm:text-4xl text-center text-[#928c6b] font-bold mb-2">
            {packageName}
          </h2>
        </div>
        <div className="h-[50%] rounded-lg my-3">
          <h3 className="text-lg sm:text-2xl text-center text-white font-semibold mb-2">
            {packageDescription}
          </h3>
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
