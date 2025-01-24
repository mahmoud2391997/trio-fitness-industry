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
          discount:{
            before:"5200",
            after:"3000"
          }
         
        },{
           offer:"6 MONTHS",
          discount:{
            before:"7800",
            after:"4799"
          }
          
        }
          
          
           ],
      },
      {
        id: 2,
        // title: "6 MONTH + 2 MONTH FREE",
        title:"Customized Training & Nutrition Plan Offers",
        description: [{
          offer:"3 MONTHS + 1 MONTH FREE",
          discount:{
            before:"6000",
            after:"3999"
          }
         
        },{
           offer:"6 MONTHS",
    discount:{
            before:"9000",
            after:"5999"
          }
        }
          
          
           ],
    },
];

  return (
    <div className='w-full bg-black  text-white pt-9 sm:p-7'  style={{background:"url(/aboutbg.jpeg)", backgroundSize:"cover"}}>
            <h2 className="xl:text-4xl w-[70%]  lg:w-[50%] m-auto lg:text-5xl md:text-4xl sm:text-3xl text-2xl  text-center font-bold mb-6 text-[#928c6b]">DON&apos;T MISS OUT OUR LIMITED-TIME OFFERS!</h2>

      <div className="packages  w-[95%] max-w-[400px] sm:w-[70%] md:w-[90%] md:max-w-screen-md xl:w-[70%] lg:max-w-screen-lg lg:w-[80%] grid grid-cols-1 md:grid-cols-2  h-auto gap-4 m-auto">
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
