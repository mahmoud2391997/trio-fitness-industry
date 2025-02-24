import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchSinglePackage } from "../../redux/store/packagesSlice";
import { useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import Order from "@/components/order";
import PaymentMethod from "@/components/paymentMethod";
import DietPlanSection from "@/components/packageDescription";
import { useLanguage } from "@/context/LanguageContext";

const PaymentPage = () => {
  const [subscribe, setSubscribe] = useState(false);
  const router = useRouter();
  const { packageId, offerIndex, details } = router.query; // Get offerIndex from query
  const packageDetails = useSelector(
    (state: RootState) => state.packages.selectedPackage
  );

  console.log(packageDetails);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (packageId) {
      console.log(`Package ID: ${packageId}`);
      console.log(typeof packageId);

      if (typeof packageId === "string") {
        dispatch(fetchSinglePackage(packageId));
      }
    }
  }, [packageId]);
  console.log(packageDetails?.details);
  const { language } = useLanguage();
  console.log(details);

  return (
    <div className=" bg-gray-100 w-full mt-[10vh] flex flex-col items-center sm:w-[95%] py-[5vh]  sm:py-2 m-auto">
      <DietPlanSection packagee={packageDetails} />
      {!details || subscribe ? (
        <>
          <div className=" w-full  ">
            {packageDetails ? (
              <Order
                packageDetails={packageDetails}
                offerIndex={
                  offerIndex !== undefined
                    ? parseInt(offerIndex as string)
                    : null
                }
              /> // Pass offerIndex to Order component
            ) : (
              <p>Loading package details...</p>
            )}
          </div>
          <main className="w-full grid my-5 gap-5  lg:grid-cols-2 grid-cols-1 ">
            <PaymentMethod type="vodafone" />
            <PaymentMethod type="instapay" />
          </main>
        </>
      ) : (
        <button
          className="bg-[#928c6b] text-white  py-3 font-bold w-48 text-center mt-2 text-xl mb-4 m-auto h-16"
          onClick={() => setSubscribe(true)}
        >
          {language === "arabic" ? "اشترك الان" : "SUBSCRIBE NOW"}
        </button>
      )}
    </div>
  );
};

export default PaymentPage;
