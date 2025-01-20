import React from 'react'
import PackageCard from './packageCard'
import PackageComponent from './packageComponent'

function LimitedOffersSection() {
  const packages = [
    {
        id: 1,
        title: "3 MONTH + 1 MONTH FREE",
        description: "Subscribe for 3 months and get an additional month free. A great way to enjoy our services with extra value."
    },
    {
        id: 2,
        title: "6 MONTH + 2 MONTH FREE",
        description: "Subscribe for 6 months and receive 2 extra months for free. Enjoy extended benefits and savings."
    },
];

  return (
    <div className='w-full bg-black text-white p-7'  style={{background:"url(/aboutbg.jpeg", backgroundSize:"cover"}}>
            <h2 className="xl:text-5xl w-[50%] m-auto lg:text-5xl md:text-4xl sm:text-3xl text-2xl  text-center font-bold mb-6 text-[#928c6b]">DON'T MISS OUT OUR LIMITED-TIME OFFERS!</h2>

      <div className="packages w-[80%] grid grid-cols-1 md:grid-cols-2  h-auto gap-5 m-auto">
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
