import React from "react";

import PaymentTable from "~/components/admin/payment/payment-table";

const AddImage = () => {
  return (
    <div className="w-full space-y-4 bg-[#373A40] p-8">
      <h1 className="text-xl font-extrabold text-white ">Payments</h1>
      <PaymentTable />
    </div>
  );
};

export default AddImage;
