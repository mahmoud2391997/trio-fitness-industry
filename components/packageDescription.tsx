import React from "react";

interface Package {
  details: { english: string; arabic: string }[] | undefined;
  img: string;
  title:
    | {
        english: string;
        arabic: string;
      }
    | undefined;
  description: string;
  icon: string;
}

interface DietPlanProps {
  packagee: Package | null;
}

const DietPlanSection: React.FC<DietPlanProps> = ({ packagee }) => {
  console.log(packagee);

  return (
    <section className="flex flex-col md:flex-row bg-gray-100 lg:px-[4vw]  md:py-[10vh]  rounded-lg ">
      {/* Left Side - Image Card */}
      <div className="md:w-1/2 bg-white rounded-lg overflow-hidden shadow-md relative group">
        {/* Image Container with Zoom Effect */}
        <div className="overflow-hidden h-full">
          <img
            src={packagee?.img}
            alt="Diet Plan"
            className="w-full h-[50vh] md:h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col h-full items-center justify-center  p-[20%] text-white text-center ">
          <img src={packagee?.icon} className="md:h-auto  h-[50px]"  />
          <h2 className="text-lg md:text-2xl font-bold mt-2">
            {packagee?.title?.english}
          </h2>
        </div>
      </div>

      <div className="md:w-1/2 p-6">
        <p className="md:text-xl lg:text-2xl">{packagee?.description}</p>
        {/* Right Side - Text Content */}

        <ul className="list-disc mt-4 pl-5 text-gray-700">
          {packagee?.details?.map((item, index) => (
            <li className="md:text-xl lg:text-2xl my-4" key={index}>
              {item.english}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DietPlanSection;
