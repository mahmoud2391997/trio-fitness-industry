import arabicContent from "@/content/arabic";
import englishContent from "@/content/english";
import { useLanguage } from "@/context/LanguageContext";
import { FaWhatsapp } from "react-icons/fa";

export default function PaymentMethod({ type }: { type: string }) {
  const {language} = useLanguage();
  const content = language === "arabic" ? arabicContent : englishContent;

  return (
    <div className="w-[95%] sm:w-full text-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={`${type === "vodafone" ? "/Vodafone.png" : "/instapay.jpg"}`}
        alt="paymentMethod"
        className="w-full  object-cover"
      />
      <div className="p-1 sm:p-6">
        <h1 className={"text-center text-4xl font-bold mb-4" + (type === "vodafone" ? " text-[#e60101]" : " text-[#4c0b6e]")}>    
          {type === "vodafone" ? "Vodafone Cash" : "INSTAPAY"}
        </h1>
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl text-black font-semibold mb-2">{content.paymentStep1Header}</h2>
            {type === "vodafone" ? (
              <>
              {
                language === "arabic" ?  <p className="text-gray-700 text-2xl">
                  ادفع بفودافون كاش قم بتحويل المبلغ الى
                </p> : <p className="text-gray-700 text-2xl">
                  Pay with Vodafone Cash Transfer the fees to
                </p>
              }
                <p className="text-3xl font-extrabold my-2 text-gray-900">010 29000 741</p>
              </>
              
            ) : (
              <> {
                language === "arabic" ?  <p className="text-gray-700 text-2xl">
                  ادفع بإنستاباى قم بتحويل المبلغ الى</p> :
                <p className="text-gray-700 text-2xl">
                  Pay with instapay Transfer the fees to
                </p>
} <p className="text-3xl font-extrabold my-2 text-gray-900">010 29000 741</p>
<span className="text-gray-700 text-2xl">{content.orTo}</span>
                <p className=" text-xl sm:text-3xl text-center my-2 font-extrabold text-gray-900">alhassan.omar@instapay</p>
</>
            )}
          </div>
          <div className="text-center">
            <h2 className="text-2xl text-black font-semibold mb-2">{content.paymentStep2Header}</h2>
            <p className="text-gray-700 text-2xl">{content.paymentStep2}</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl text-black font-semibold mb-2">{content.paymentStep3Header}</h2>
            <p className="text-gray-700 text-2xl">{content.paymentStep3}</p>
            <a
              href="https://wa.me/+201229845327"
              className="bg-green-700 text-white flex justify-center items-center font-bold w-40
             text-center lg:w-[240px] my-3 py-2 mx-auto rounded-lg shadow-md hover:bg-green-800 transition duration-300"
            >
              <FaWhatsapp className="text-2xl mr-2" />
              Whatsapp
            </a>
          </div>
         
        </section>
      </div>
    </div>
  );
}
