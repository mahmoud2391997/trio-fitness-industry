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
    <div className="mt-[20vh] w-full px-1">
      <table className="table-auto w-full text-center text-base sm:text-lg">
        <thead>
        { language === "arabic" ? 
          <tr className="rounded-t-md">
            <th className="px-4 w-1/2 text-lg sm:text-xl font-semibold py-2">{content.orderDetails}</th>
            <th className="px-4 w-1/2 text-lg py-2">{content.orderCategory}</th> </tr> :
          <tr className=" rounded-t-md">
            
            <th className="px-4 w-1/2 text-lg sm:text-xl font-semibold py-2">{content.orderCategory}</th>
            <th className="px-4 w-1/2 text-lg sm:text-xl py-2">{content.orderDetails}</th>
          </tr>}
        </thead>
        <tbody className="w-full">
            { language === "arabic" ? 

<tr >
            <td className="border border-black text-lg sm:text-2xl font-extrabold px-4 py-2">{  "نظام " +  packageDetails.title.arabic  }</td>
            <td className="border border-black text-lg sm:text-2xl font-bold px-4 py-2">{content.orderPackage}</td>
          </tr> :
          <tr >
            <td className="border border-black text-lg sm:text-2xl font-bold px-4 py-2">{content.orderPackage}</td>
            <td className="border border-black text-lg sm:text-2xl font-extrabold px-4 py-2">{ packageDetails.title.english + " Plan" }</td>
          </tr>}
            { language === "arabic" ? 
          <tr>
            <td className="border border-black font-extrabold text-lg sm:text-2xl  px-4 py-2">
              {offerIndex !== null && packageDetails.offers
                ? 
                language === "arabic" ?  packageDetails.offers[offerIndex].offer.arabic : packageDetails.offers[offerIndex].offer.english 
                : "لا يتضمن عرض"}
            </td>
                <td className="border border-black text-lg sm:text-2xl font-bold px-4 py-2">{content.orderOffer}</td>
            </tr> :
          <tr>
            <td className="border text-lg sm:text-2xl border-black font-bold px-4 py-2">{content.orderOffer}</td>
            <td className="border text-lg sm:text-2xl border-black font-extrabold  px-4 py-2">
              {offerIndex !== null && packageDetails.offers
                ? 
                language === "arabic" ?  packageDetails.offers[offerIndex].offer.arabic : packageDetails.offers[offerIndex].offer.english 
                : "No Offer Included"}
            </td>
            </tr> }
              {packageDetails.offers && offerIndex !== null ?
                (language === "arabic" ? 
          <tr>
            <td className="border border-black text-lg sm:text-2xl font-extrabold line-through px-4 py-2">
              {
                
                language === "arabic" ?   packageDetails.offers[offerIndex].discount.before.arabic + " جنيه" :  parseInt(packageDetails.offers[offerIndex].discount.before.english )  + " EGP"
              } 
            </td> 
              <td className="border border-black text-lg sm:text-2xl font-bold px-4 py-2">{content.orderOldPrice}</td>
              
             </tr> :
          <tr>
            <td className="border border-black text-lg sm:text-2xl font-bold px-4 py-2">{content.orderOldPrice}</td>
            <td className="border border-black text-lg sm:text-2xl font-extrabold line-through px-4 py-2">
              {
                   
                     language === "arabic" ?   packageDetails.offers[offerIndex].discount.before.arabic + " جنيه" :  parseInt(packageDetails.offers[offerIndex].discount.before.english  )+ " EGP"
                     } 
              
            </td>
          </tr>) : null} 
         { language === "arabic" ? 
          <tr>
            <td className="border border-black text-lg sm:text-2xl  font-extrabold  px-4 py-2">
              {packageDetails.offers && offerIndex !== null
                ? language === "arabic" ?   packageDetails.offers[offerIndex].discount.after.arabic + " جنيه" : packageDetails.offers[offerIndex].discount.after.english + " EGP"
                : language === "arabic" ? packageDetails.price.arabic  : packageDetails.price.english  }
            </td>
                <td className="border border-black text-lg sm:text-2xl font-bold px-4 py-2">{content.orderPrice}</td>
          </tr>  :
          <tr >
            <td className="border border-black text-lg sm:text-2xl font-bold px-4 py-2">{content.orderPrice}</td>
            <td className="border border-black  text-lg sm:text-2xl font-extrabold  px-4 py-2">
              {packageDetails.offers && offerIndex !== null
                ? language === "arabic" ?   packageDetails.offers[offerIndex].discount.after.arabic + " جنيه" : packageDetails.offers[offerIndex].discount.after.english + " EGP"
                : language === "arabic" ? packageDetails.price.arabic  : packageDetails.price.english }
            </td>
          </tr> }
        </tbody>
      </table>
    </div>
  );
}
