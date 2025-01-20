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
    <div className="flex flex-row items-center my-5 justify-between relative bg-gradient-to-r  from-white to-transparent text-black pl-4 rounded-lg shadow-lg min-h-[400px] h-auto sm:max-w-[47%] lg:max-w-[32%] mx-auto">
      <div className="w-2/3">
        <h1 className="text-lg md:text-lg lg:text-2xl font-bold text-[#928c6b] mb-2">{heading}</h1>
        <p className="text-md md:text-base lg:text-lg w-full leading-relaxed mb-4">{description}</p>
      </div>
      <div className=" w-1/3  md:mt-0 h-full">
        <img src={image} alt="Service" className="h-full w-full rounded-lg" />
      </div>
    </div>
  );
};

export default ServicesCard;
