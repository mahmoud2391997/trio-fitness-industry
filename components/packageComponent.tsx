import React from "react";

interface PackageComponentProps {
  packageName: string;
  packageDescription: {offer:string,
    discount:{
      after:string,
      before:string,
    },
  }[];
}

const PackageComponent: React.FC<PackageComponentProps> = ({
  packageName,
  packageDescription,
}) => {
  return (
    <div className="relative pt-[15%] h-auto pb-[20%] flex flex-col justify-around items-center bg-white  rounded-xl  border border-black shadow-md">
      
        <div className="h-[30%] px-3 absolute top-0 rounded-b-full flex justify-center items-center w-full " style={{background:"url(/aboutbg.jpeg)", backgroundSize:"cover"}}>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center text-[#928c6b] font-bold mb-2">
            {packageName}
          </h2>
        </div>
        <div className="h-[70%] w-auto  mt-8" >
          {packageDescription.map((packagee,index)=>{return <h3 key={index} className="text-sm rounded-lg  my-2 lg:text-lg p-2 sm:p-4 list-disc sm:text-base text-center m-auto w-full relative text-[#928c6b] font-semibold mb-2" style={{background:"url(/aboutbg.jpeg)", backgroundSize:"cover"}}>
            <div className="text-sm sm:text-lg ">
              {packagee.offer}
            </div>
            <div className="text-sm sm:text-lg">
              {packagee.discount.after} L.E <span className="text-sm">
                INSTEAD OF {" "}
                </span> 
                 <span className="text-sm sm:text-lg line-through">
                
                 {packagee.discount.before}
                </span> L.E
            </div>
          </h3>})}
          
        </div>
       
      <button
        
        className="bg-[#928c6b] text-white w-[120px] md:h-8 text-center lg:w-[140px] mt-3 mb-1 py-1 absolute bottom-2 m-auto h-7 lg:h-9"
      >
        Get Started
      </button>
    </div>
  );
};

export default PackageComponent;
