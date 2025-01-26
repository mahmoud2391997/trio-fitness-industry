import { FaWhatsapp } from "react-icons/fa";

export default function PaymentMethod({ type }: { type: string }) {
  return (
    <div className="w-[95%] sm:w-full text-lg max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={`${type === "vodafone" ? "/Vodafone.png" : "/instapay.jpg"}`}
        alt="paymentMethod"
        className="w-full  object-cover"
      />
      <div className="p-6">
        <h1 className="text-center text-4xl font-bold text-[#928c6b] mb-4">
          {type === "vodafone" ? "Vodafone Cash" : "INSTAPAY"}
        </h1>
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">STEP 1</h2>
            {type === "vodafone" ? (
              <>
                <p className="text-gray-700">
                  Pay with Vodafone Cash Transfer the fees to
                </p>
                <p className="text-lg font-bold text-gray-900">01000000000</p>
              </>
            ) : (
              <>
                <p className="text-gray-700">
                  Pay with instapay Transfer the fees to
                </p>
                <p className="text-lg font-bold text-gray-900">01000000000</p>
              </>
            )}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">STEP 2</h2>
            <p className="text-gray-700">Take A Screenshot</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">STEP 3</h2>
            <p className="text-gray-700">SEND SCREENSHOT</p>
            <button
              className="bg-green-700 text-white flex justify-center items-center font-bold w-40
             text-center lg:w-[140px] my-3 py-2 mx-auto rounded-lg shadow-md hover:bg-green-800 transition duration-300"
            >
              <FaWhatsapp className="text-2xl mr-2" />
              Whatsapp
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
