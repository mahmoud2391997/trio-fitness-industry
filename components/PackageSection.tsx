import React from "react";

import PackageComponent from "./packageComponent";
const PackageSection: React.FC = () => {
  const packages = [
    {
      id: 1,
      background:"/diet.jpeg",
      title: "Nutrition Plan",
      description: "Diet plan personalized nutrition coaching to help you reach your goals faster.",
      details: ["Carbohydrates, fats and protein grams range", "Estimated calories proper range", "Instructions helps achieve result faster", "Indicated vitamins and minerals required", "Substitutes menu for nutrients sources "],
    },
    {
      id: 2,
      background:"/plan.jpg",
      title: "Training & Nutrition Plan",
      description: "Our Pro Plan offers advanced workouts and specifically tailored Diet plan to help you reach your goals faster.",
      
      details: ["Workout name and shape","video for right position", "Counts for each set and reps", "Techniques for perfect results","Instruction to avoid injuries"],
    },
    {
      id: 3,
      title: "Custom Plan",
      background:"/coach.jpg",
      description: "Experience a fully tailored fitness experience with our Custom Plan. Work one-on-one with a Coach Hassan trainer to achieve your goals.",
      details: ["Body Building Championships Preparations", "Other sports Qualification"],
    },
  ];

  return (
    <section className="package-section bg-black text-[#928c6b] p-3 sm:p-12 h-auto">
      <h2 className="text-2xl text-center font-bold mb-6">OUR FITNESS PACKAGES</h2>
      <div className="packages  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[100vh] gap-6">
        {packages.map((pkg) => (
          <PackageComponent
            key={pkg.id}
            packageName={pkg.title}
            packageDetails={pkg.details}
            packageDescription={pkg.description}
            background={pkg.background}
          />
        ))}
      </div>
    </section>
  );
};
export default PackageSection;
