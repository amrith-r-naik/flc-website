import React from "react";
import CreateEvent from "~/components/admin/event/create-event";


const page = () => {
  return (
    <div className="w-full space-y-4  bg-[#373A40] p-8">
      <h1 className="text-xl font-extrabold ">Create Event</h1>
      <CreateEvent />
    </div>
  );
};

export default page;
