import React from 'react'
import PackageComponent from './packageComponent'

function LimitedOffersSection() {
  const packages = [
    {
        id: 1,
        // title: "3 MONTH + 1 MONTH FREE",
        title:"Personalized Nutrition Plan Offers",
        description: [{
          offer:"3 MONTHS + 1 MONTH FREE",
          discount:"3000 L.E INSTEAD OF 5200 L.E"
        },{
           offer:"6 MONTHS",
          discount:"4799 L.E INSTEAD OF 7800 L.E"
        }
          
          
           ],
      },
      {
        id: 2,
        // title: "6 MONTH + 2 MONTH FREE",
        title:"Customized Training & Nutrition Plan Offers",
        description: [{
          offer:"3 MONTHS + 1 MONTH FREE",
          discount:"3999L.E INSTEAD OF 6000L.E"
        },{
           offer:"6 MONTHS",
          discount:"5999L.E INSTEAD OF 9000L.E"
        }
          
          
           ],
    },
];

  return (
    <div className='w-full bg-black text-white sm:p-7'  style={{background:"url(/aboutbg.jpeg)", backgroundSize:"cover"}}>
            <h2 className="xl:text-4xl w-[70%] lg:w-[50%] m-auto lg:text-5xl md:text-4xl sm:text-3xl text-2xl  text-center font-bold mb-6 text-[#928c6b]">DON&apos;T MISS OUT OUR LIMITED-TIME OFFERS!</h2>

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
