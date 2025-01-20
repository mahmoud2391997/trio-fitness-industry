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
    <div className="flex flex-row items-center  justify-between relative bg-gradient-to-r  from-white to-transparent text-black pl-4 pt-4 rounded-lg shadow-lg h-[400px] w-[90%] mx-auto">
      <div className="w-2/4">
        <h1 className="text-2xl font-bold text-[#928c6b] mb-2">{heading}</h1>
        <p className="text-lg w-full leading-relaxed mb-4">{description}</p>
      </div>
      <div className=" w-1/2 absolute bottom-0 right-0 md:mt-0 h-full">
        <img src={image} alt="Service" className="h-full w-full rounded-lg" />
      </div>
    </div>
  );
};

export default ServicesCard;
