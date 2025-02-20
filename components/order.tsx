import arabicContent from "@/content/arabic";
import englishContent from "@/content/english";
import { useLanguage } from "@/context/LanguageContext";

interface offer {
  offer: {
    english: string;
    arabic: string
  };
  discount: {
    before: {
      english: string;
      arabic: string
    };
    after: {
      english: string;
      arabic: string
    };
  };
}

interface Package {
  _id: string;
  title: {
    english: string;
    arabic: string
  };
  price: {
    english: string;
    arabic: string
  };
  details: {
    english: string;
    arabic: string
  }[];
  offers?: offer[];
}
export default function Order({
  packageDetails,
  offerIndex,
}: {
  packageDetails: Package;
  offerIndex: number | null;
}) {
  console.log(offerIndex);
const {language} = useLanguage();
const content = language === "arabic" ? arabicContent : englishContent;

  return (
    <div className=" text-black w-full px-1">
       
      <table className="table-auto w-full text-center text-base sm:text-lg">
        <tbody className="w-full">
            { language === "arabic" ? 

<tr >
            <td className="border border-black text-base sm:text-2xl font-extrabold px-4 py-2">{  "نظام " +  packageDetails.title.arabic  }</td>
            <td className="border border-black text-base sm:text-2xl font-bold px-4 py-2">{content.orderPackage}</td>
          </tr> :
          <tr >
            <td className="border border-black text-base sm:text-2xl font-bold px-4 py-2">{content.orderPackage}</td>
            <td className="border border-black text-base sm:text-2xl font-extrabold px-4 py-2">{ packageDetails.title.english + " Plan" }</td>
          </tr>}
            { language === "arabic" ? 
          <tr>
            <td className="border border-black font-extrabold text-base sm:text-2xl  px-4 py-2">
              {offerIndex !== null && packageDetails.offers
                ? 
                language === "arabic" ?  packageDetails.offers[offerIndex].offer.arabic : packageDetails.offers[offerIndex].offer.english 
                : "لا يتضمن عرض"}
            </td>
                <td className="border border-black text-base sm:text-2xl font-bold px-4 py-2">{content.orderOffer}</td>
            </tr> :
          <tr>
            <td className="border text-base sm:text-2xl border-black font-bold px-4 py-2">{content.orderOffer}</td>
            <td className="border text-base sm:text-2xl border-black font-extrabold  px-4 py-2">
              {offerIndex !== null && packageDetails.offers
                ? 
                language === "arabic" ?  packageDetails.offers[offerIndex].offer.arabic : packageDetails.offers[offerIndex].offer.english 
                : "No Offer Included"}
            </td>
            </tr> }
              {packageDetails.offers && offerIndex !== null ?
                (language === "arabic" ? 
          <tr>
            <td className="border border-black text-base sm:text-2xl font-extrabold line-through px-4 py-2">
              {
                
                language === "arabic" ?   packageDetails.offers[offerIndex].discount.before.arabic + " جنيه" :  parseInt(packageDetails.offers[offerIndex].discount.before.english )  + " EGP"
              } 
            </td> 
              <td className="border border-black text-base sm:text-2xl font-bold px-4 py-2">{content.orderOldPrice}</td>
              
             </tr> :
          <tr>
            <td className="border border-black text-base sm:text-2xl font-bold px-4 py-2">{content.orderOldPrice}</td>
            <td className="border border-black text-base sm:text-2xl font-extrabold line-through px-4 py-2">
              {
                   
                     language === "arabic" ?   packageDetails.offers[offerIndex].discount.before.arabic + " جنيه" :  parseInt(packageDetails.offers[offerIndex].discount.before.english  )+ " EGP"
                     } 
              
            </td>
          </tr>) : null} 
         { language === "arabic" ? 
          <tr>
            <td className="border border-black text-base sm:text-2xl  font-extrabold  px-4 py-2">
              {packageDetails.offers && offerIndex !== null
                ? language === "arabic" ?   packageDetails.offers[offerIndex].discount.after.arabic + " جنيه" : packageDetails.offers[offerIndex].discount.after.english + " EGP"
                : language === "arabic" ? packageDetails.price.arabic  : packageDetails.price.english  }
            </td>
                <td className="border border-black text-base sm:text-2xl font-bold px-4 py-2">{content.orderPrice}</td>
          </tr>  :
          <tr >
            <td className="border border-black text-base sm:text-2xl font-bold px-4 py-2">{content.orderPrice}</td>
            <td className="border border-black  text-base sm:text-2xl font-extrabold  p-0">
              <table className="w-full h-full">
                <thead className="w-full border-b border-black">
                  <tr >
                    <td className=" border-r border-black">Price In EGP</td>
                    <td>Price In USD</td>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" border-r border-black">
                    {packageDetails.offers && offerIndex !== null
                ? language === "arabic" ?   packageDetails.offers[offerIndex].discount.after.arabic + " جنيه" : packageDetails.offers[offerIndex].discount.after.english + " EGP"
                : language === "arabic" ? packageDetails.price.arabic  : packageDetails.price.english }
                    </td>
                    <td>
                      20 USD
                    </td>
                  </tr>
                </tbody>
              </table>
           </td>           
          </tr> }
        </tbody>
      </table>
      <div  className="w-auto   p-2 bg-black"> 
          <h1 className="text-center text-2xl sm:text-3xl mb-2 underline text-white font-bold">Payment Terms And Policy</h1>
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-yellow-500">⚠️<br/>Caution</h1>
          <p className="text-center my-2 text-base sm:text-2xl text-white"> {content.advancePayment}</p>
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-red-500">❌<br/>Attention</h1>
          <p className="text-center my-2 text-base sm:text-2xl text-white"> {content.paymentCondition}</p>
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-green-500 flex flex-col items-center">
  <span className="flex items-center justify-center rounded-full h-12 w-12 bg-green-500 mb-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="white"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
  Successful Fees Transfer
</h1>


          <p className="text-center my-2 text-base sm:text-2xl text-white">
  
  {content.payment}
  
</p>



          </div>
    </div>
  );
}
