import React from "react";

interface ServicesCardProps {
  heading: string;
  description: string;
  image: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  heading,
  description,
  image,
}) => {
  return (
    <div className="flex flex-row items-center relative bg-gradient-to-r  from-gray-800 to-transparent text-white pl-4 pt-4 rounded-lg shadow-lg h-[260px] w-full mx-auto">
      <div className="w-2/3">
        <h1 className="text-2xl font-bold text-[#928c6b] mb-2">{heading}</h1>
        <p className="text-sm w-full leading-relaxed mb-4">{description}</p>
      </div>
      <div className=" w-1/3 absolute bottom-0 right-0 md:mt-0 h-[240px]">
        <img src={image} alt="Service" className="h-full rounded-lg" />
      </div>
    </div>
  );
};

export default ServicesCard;
