import React from "react";

import PackageCard from "./packageCard";
const PackageSection: React.FC = () => {
  const packages = [
    {
      id: 1,
      background: "/diet.jpeg",
      title: "Personalized Nutrition",
      details: [
        "Diet plan personalized nutrition coaching to help you reach your goals faster.",
        "Carbohydrates, fats and protein grams range",
        "Estimated calories proper range",
        "Instructions helps achieve result faster",
        "Indicated vitamins and minerals required",
        "Substitutes menu for nutrients sources"
      ],
    },
    {
      id: 2,
      background: "/plan.jpg",
      title: "Customized Training & Nutrition",
      details: [
        "Advanced workout routines designed for maximum efficiency.",
"A specifically tailored diet plan customized to your individual needs.",
"Comprehensive guidance to help you achieve your fitness goals more quickly.",
        "Workout name and shape",
        "Video for right position",
        "Counts for each set and reps",
        "Techniques for perfect results",
        "Instruction to avoid injuries"
      ],
    },
    {
      id: 3,
      background: "/plan.jpg",
      title: "General Nutrition",
      details: [
        "Our Pro Plan offers advanced workouts and specifically tailored Diet plan to help you reach your goals faster.",
        "Workout name and shape",
        "Video for right position",
        "Counts for each set and reps",
        "Techniques for perfect results",
        "Instruction to avoid injuries"
      ],
    },
  ];
  
  return (
    <section className="package-section bg-white text-[#928c6b] p-3 sm:p-12 h-auto">
       <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl  text-center font-bold mb-6 text-[#928c6b]">SELECT THE PACKAGE THAT BEST FITS YOUR NEEDS</h2>
      <div className="packages w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-auto gap-5 m-auto">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            packageName={pkg.title}
            packageDetails={pkg.details}
          />
        ))}
      </div>

    </section>
  );
};
export default PackageSection;
