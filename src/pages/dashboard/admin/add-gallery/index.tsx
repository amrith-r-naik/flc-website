import React from "react";

import AddGallery from "~/components/admin/gallery/add-gallery";

const page = () => {
  return (
    <div className="w-full space-y-4  bg-[#373A40] p-8">
      <h1 className="text-xl font-extrabold ">Add Gallery</h1>
      <AddGallery />
    </div>
  );
};

export default page;
