interface offer {
  offer: string;
  discount: {
    before: string;
    after: string;
  };
}

interface Package {
  _id: string;
  title: string;
  price: string;
  details: string[];
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

  return (
    <div className="mt-[20vh] w-full ">
      <table className="table-auto w-full text-center text-base sm:text-lg">
        <thead>
          <tr className=" rounded-t-md">
            <th className="px-4 font-semibold py-2">Category</th>
            <th className="px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td className="border border-black font-bold px-4 py-2">Package</td>
            <td className="border border-black font-extrabold px-4 py-2">{packageDetails.title}</td>
          </tr>
          <tr>
            <td className="border border-black font-bold px-4 py-2">Offer</td>
            <td className="border border-black font-extrabold  px-4 py-2">
              {offerIndex !== null && packageDetails.offers
                ? packageDetails.offers[offerIndex].offer
                : "No Offer Included"}
            </td>
            </tr>
              {packageDetails.offers && offerIndex !== null ?
          <tr>
            <td className="border border-black font-bold px-4 py-2">Old Price</td>
            <td className="border border-black font-extrabold line-through px-4 py-2">
              {
                    parseInt(
                      packageDetails.offers[offerIndex].discount.before
                     )} EGP
              
            </td>
          </tr> : null} 
          <tr>
            <td className="border border-black font-bold px-4 py-2">Final Price</td>
            <td className="border border-black  font-extrabold  px-4 py-2">
              {packageDetails.offers && offerIndex !== null
                ? packageDetails.offers[offerIndex].discount.after + " EGP"
                : packageDetails.price}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
