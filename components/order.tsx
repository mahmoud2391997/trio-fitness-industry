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
      <table className="table-auto w-full text-center">
        <thead>
          <tr className="border rounded-t-md">
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Package</td>
            <td className="border px-4 py-2">{packageDetails.title}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Offer</td>
            <td className="border px-4 py-2">
              {offerIndex !== null && packageDetails.offers
                ? packageDetails.offers[offerIndex].offer
                : "No Offer Included"}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Discount Amount</td>
            <td className="border px-4 py-2">
              {packageDetails.offers && offerIndex !== null
                ? `${
                    parseInt(
                      packageDetails.offers[offerIndex].discount.before
                    ) -
                    parseInt(packageDetails.offers[offerIndex].discount.after)
                  } EGP`
                : "No Discount Included"}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Final Price</td>
            <td className="border px-4 py-2">
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
