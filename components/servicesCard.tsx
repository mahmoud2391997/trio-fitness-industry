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
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-b to-gray-500 from-black m-auto text-white px-4 rounded-lg shadow-lg h-auto w-auto mx-auto">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-[#928c6b] mb-2">{heading}</h1>
        <p className="text-lg leading-relaxed mb-4">{description}</p>
      </div>
      <div className="mt-6 md:mt-0">
        <img
          src={image}
          alt="Service"
          className="h-80 rounded-lg"
        />
      </div>
    </div>
  );
};

export default ServicesCard;