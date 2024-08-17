import React, { useEffect, useState } from "react";

import EventCard from "~/components/admin/allEvents/eventCard";
import { api } from "~/utils/api";

import AllEventsHeader from "../../../../components/admin/allEvents/allEventsHeader";
import SortingEvents from "../../../../components/admin/allEvents/sortingEvents";

function formatDate(dateString: Date) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JS
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
const AllEvents = () => {
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [groupBy, setGroupBy] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  const draftEvents = api.event.getAllEventsForAdminByState.useQuery({
    state: "DRAFT",
  });
  const publishedEvents = api.event.getAllEventsForAdminByState.useQuery({
    state: "PUBLISHED",
  });
  const completedEvents = api.event.getAllEventsForAdminByState.useQuery({
    state: "COMPLETED",
  });

  const handleSortOrderChange = (order: string) => {
    setSortOrder(order);
  };

  const handleGroupByChange = (groupBy: string) => {
    setGroupBy(groupBy);
  };

  const handleSortByChange = (sortBy: string) => {
    setSortBy(sortBy);
  };

  useEffect(() => {
    console.log(sortOrder, groupBy, sortBy);
  }, [sortOrder, groupBy, sortBy]);

  return (
    <div className="my-4 flex min-h-screen w-full flex-col bg-black">
      <AllEventsHeader />

      <SortingEvents
        onSortOrderChange={handleSortOrderChange}
        onGroupByChange={handleGroupByChange}
        onSortByChange={handleSortByChange}
        currentSortOrder={sortOrder}
      />
      {draftEvents.status === "success" && (
        <div className=" mb-4 mt-4 h-full flex-grow px-4 pt-4">
          <h1 className="font-inter text-3xl font-semibold">Drafts</h1>
          <hr className="mb-4" />
          <div className="flex h-full flex-wrap justify-center gap-12 sm:justify-start">
            {/* <EventCard />
          <EventCard />
          <EventCard />
          <EventCard /> */}
            {draftEvents.data.map((event, index) => (
              <EventCard
                key={index}
                title={event.name}
                fromDate={formatDate(event.fromDate)}
                toDate={formatDate(event.toDate)}
                venue={event.venue}
                registrations={event._count.Team}
              />
            ))}
          </div>
        </div>
      )}
      {publishedEvents.status === "success" && (
        <div className=" mb-4 mt-4 h-full flex-grow px-4 pt-4">
          <h1 className="font-inter text-3xl font-semibold ">Published</h1>
          <hr className="mb-4" />
          <div className="flex h-full flex-wrap justify-center gap-12 sm:justify-start">
            {/* <EventCard />
          <EventCard />
          <EventCard />
          <EventCard /> */}
            {publishedEvents.data.map((event, index) => (
              <EventCard
                key={index}
                title={event.name}
                fromDate={formatDate(event.fromDate)}
                toDate={formatDate(event.toDate)}
                venue={event.venue}
                registrations={event._count.Team}
              />
            ))}
          </div>
        </div>
      )}

      {completedEvents.status === "success" && (
        <div className=" mb-4 mt-4 h-full flex-grow px-4 pt-4">
          <h1 className="font-inter text-3xl font-semibold ">Completed</h1>
          <hr className="mb-4" />
          <div className="flex h-full flex-wrap justify-center gap-12 sm:justify-start">
            {/* <EventCard />
          <EventCard />
          <EventCard />
          <EventCard /> */}
            {completedEvents.data.map((event, index) => (
              <EventCard
                key={index}
                title={event.name}
                fromDate={formatDate(event.fromDate)}
                toDate={formatDate(event.toDate)}
                venue={event.venue}
                registrations={event._count.Team}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEvents;
