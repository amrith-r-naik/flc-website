import { type FC } from "react";

const Shipping: FC = () => {
  return (
    <>
      <div>
        <header className="py-4 shadow-md ">
          <div className="container mx-auto px-4">
            <h1 className="text-center font-title text-3xl font-bold">
              INSPIRANTE TECHNOLOGIES PRIVATE LIMITED
            </h1>
            <p className="mt-2 text-center text-xl">
              Shipping and Delivery Policy
            </p>
            <p className="mt-1 text-center text-sm">
              Last updated on Oct 20th 2022
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section className=" mb-8 rounded-lg p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Shipping Policy</h2>
            <p>
              Shipping is not applicable for business. For any queries related
              to delivery, please contact our support team.
            </p>
          </section>

          <section className=" rounded-lg p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">
              Membership Registration
            </h2>
            <div className=" rounded-lg border border-gray-300 p-6 ">
              <h3 className="mb-2 text-xl font-semibold">Membership Fee</h3>
              <p className="mb-4 text-lg">₹400</p>
              <p className="mb-4">
                One-time payment. Valid until you are a part of the college. All
                of the club events will be free for members.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Shipping;
