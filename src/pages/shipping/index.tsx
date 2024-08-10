// pages/shipping-and-delivery-policy.tsx
import { type FC } from 'react';
import Footer from '~/components/Footer/Footer';

const ShippingAndDeliveryPolicy: FC = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-950 via-purple-900 to-yellow-500   ">
      {/* Header Section */}
      <header className="shadow-md py-4 text-white ">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">INSPIRANTE TECHNOLOGIES PRIVATE LIMITED</h1>
          <p className="text-xl text-center mt-2">Shipping and Delivery Policy</p>
          <p className="text-center text-sm text-gray-600 mt-1">Last updated on Oct 20th 2022</p>
        </div>
      </header>
      
      {/* Content Section */}
      <main className="container mx-auto px-4 py-8">
        <section className="text-gray-900 p-6 rounded-lg shadow-md mb-8 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300">
          <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
          <p>
            Shipping is not applicable for business. For any queries related to delivery, please contact our support team.
          </p>
        </section>
        
        {/* Membership Registration Card */}
        <section className="text-gray-900 p-6 rounded-lg shadow-md bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300">
          <h2 className="text-2xl font-semibold mb-4">Membership Registration</h2>
          <div className="border text-white border-gray-300 rounded-lg p-6 bg-gradient-to-b from-violet-800 via-blue-900 to-yellow-500">
            <h3 className="text-xl font-semibold mb-2">Membership Fee</h3>
            <p className="text-lg mb-4">₹400</p>
            <p className="mb-4">One-time payment. Valid until you are a part of the college. All of the club events will be free for members.</p>
           
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShippingAndDeliveryPolicy;
