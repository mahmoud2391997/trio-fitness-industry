import React from "react";

import PackageCard from "./packageCard";
const PackageSection: React.FC = () => {
  const packages = [
    {
      id: 1,
      background: "/diet.jpeg",
      title: "Personalized Nutrition",
      price:"1300 EGP / MONTH",

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
      price:"1500 EGP / MONTH",

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
      title: "One On One Personal Gym Coaching",
      price:"2000 EGP / MONTH",
      details:  [
        "Experience a fully tailored fitness experience with our Custom Plan",
        "Work one-on-one with a Coach Hassan trainer to achieve your goals",
        "Body Building Championships Preparations",
        "Other Sports Qualification"
      ]
    },
    {
      id: 4,
      background: "/plan.jpg",
      title: "General Nutrition",
      price:"300 EGP",

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
    <section className="package-section bg-white text-[#928c6b] pt-16  sm:p-7 h-auto" style={{background:"url(/aboutbg.jpeg)", backgroundSize:"cover"}}>
       <h2 className="xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl  text-center w-[60%] m-auto font-bold mb-10 text-[#928c6b]">SELECT THE PACKAGE THAT BEST FITS YOUR NEEDS</h2>
      <div className="packages w-[95%] grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  h-auto gap-3 m-auto">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            price={pkg.price}
            packageName={pkg.title}
            packageDetails={pkg.details}
          />
        ))}
      </div>

    </section>
  );
};
export default PackageSection;
