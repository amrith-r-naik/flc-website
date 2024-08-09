import React from "react";
import SidebarMenu from "~/components/Sidebar/SidebarMenu";
const AllEventsHeader = () => {
  return (
    <div className="mb-2 mt-4 flex w-full items-center bg-black px-2">
      <SidebarMenu />
      <h1 className="font-inter  flex-grow-2 text-center text-4xl font-bold  ">
        Events
      </h1>

      <button className="flex-grow-1 font-inter hidden rounded-sm bg-orange-300 p-2 text-sm font-bold text-white sm:visible sm:block ">
        + New Event
      </button>
      <button className="flex-grow-1 font-inter visible rounded-lg bg-orange-300 p-2 text-sm font-bold text-white sm:hidden">
        + Add
      </button>
    </div>
  );
};
export default AllEventsHeader;
