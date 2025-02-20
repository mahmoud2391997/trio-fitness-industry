import { useRouter } from "next/router";
import { useEffect } from "react";
import { fetchSinglePackage } from "../../redux/store/packagesSlice";
import { useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import Order from "@/components/order";
import PaymentMethod from "@/components/paymentMethod";
import DietPlanSection from "@/components/packageDescription";

const PaymentPage = () => {
  const router = useRouter();
  const { packageId, offerIndex } = router.query; // Get offerIndex from query
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

  return (
    
    <div className=" bg-gray-100 w-full mt-[20vh]  sm:w-[95%] px-[10vw] py-[5vh]  sm:py-2 sm:px-5 m-auto">
      <DietPlanSection packagee={packageDetails} />
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
        <PaymentMethod type="vodafone"/>
        <PaymentMethod type="instapay"/>
      </main>
    </div>
  );
};

export default PaymentPage;
