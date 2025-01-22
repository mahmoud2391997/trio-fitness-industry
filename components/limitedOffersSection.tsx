import React from 'react'
import PackageCard from './packageCard'
import PackageComponent from './packageComponent'
import { title } from 'process';

function LimitedOffersSection() {
  const packages = [
    {
        id: 1,
        // title: "3 MONTH + 1 MONTH FREE",
        title:"Personalized Nutrition Plan Offers",
        description: ["33% DISCOUNT On 3 Months + 1 Month Free.","33% DISCOUNT On 6 Months."]
      },
      {
        id: 2,
        // title: "6 MONTH + 2 MONTH FREE",
        title:"Customized Training & Nutrition Plan Offers",
        description: ["43% DISCOUNT On 3 Months + 1 Month Free.","38% DISCOUNT On 6 Months."]
    },
];

  return (
    <div className='w-full bg-black text-white sm:p-7'  style={{background:"url(/aboutbg.jpeg)", backgroundSize:"cover"}}>
            <h2 className="xl:text-4xl w-[70%] lg:w-[50%] m-auto lg:text-5xl md:text-4xl sm:text-3xl text-2xl  text-center font-bold mb-6 text-[#928c6b]">DON'T MISS OUT OUR LIMITED-TIME OFFERS!</h2>

      <div className="packages w-[90%] max-w-[400px] sm:w-[70%] md:w-[90%] md:max-w-screen-md xl:w-[70%] lg:max-w-screen-lg lg:w-[80%] grid grid-cols-1 md:grid-cols-2  h-auto gap-4 m-auto">
        {packages.map((pkg) => (
          <PackageComponent
            key={pkg.id}
            packageName={pkg.title}
            packageDescription={pkg.description}
          />
        ))}
      </div>
    </div>
  )
}

export default LimitedOffersSection
