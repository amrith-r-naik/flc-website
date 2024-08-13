// pages/shipping-and-delivery-policy.tsx
import { type FC } from 'react';
import Background from './events/ParticlesBackground';
import Footer from '~/components/footer';

const ShippingAndDeliveryPolicy: FC = () => {
  return (
    <>
    <div
     style={{
       position: "absolute",
       top: 0,
       left: 0,
       width: "100%",
       height: "100%",
       overflow: "hidden",
       zIndex: -1,
     }}
   >
     <Background/>
   </div>
    <div className="  ">
      {/* Header Section */}
      <header className="shadow-md py-4  ">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">INSPIRANTE TECHNOLOGIES PRIVATE LIMITED</h1>
          <p className="text-xl text-center mt-2">Shipping and Delivery Policy</p>
          <p className="text-center text-sm text-gray-600 mt-1">Last updated on Oct 20th 2022</p>
        </div>
      </header>
      
      {/* Content Section */}
      <main className="container mx-auto px-4 py-8">
        <section className=" p-6 rounded-lg shadow-md mb-8 bg-gradient">
          <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
          <p>
            Shipping is not applicable for business. For any queries related to delivery, please contact our support team.
          </p>
        </section>
        
        {/* Membership Registration Card */}
        <section className="text-gray-900 p-6 rounded-lg shadow-md bg-gradient">
          <h2 className="text-2xl font-semibold mb-4">Membership Registration</h2>
          <div className="border  border-gray-300 rounded-lg p-6 ">
            <h3 className="text-xl font-semibold mb-2">Membership Fee</h3>
            <p className="text-lg mb-4">₹400</p>
            <p className="mb-4">One-time payment. Valid until you are a part of the college. All of the club events will be free for members.</p>
           
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
    </>
  );
};

export default ShippingAndDeliveryPolicy;